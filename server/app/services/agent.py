import os
import getpass

from langchain_mistralai import ChatMistralAI
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_core.rate_limiters import InMemoryRateLimiter

from app.config.prompts import description_prompt, selection_prompt
from app.models.agent_response import GeneratedDescription, SelectedMusic
from app.utils.formatter import getFormattedOutput, getFormattedDescriptions


class Agent:
    def __init__(self):
        self.K = 10

        self.vector_store = None
        self.retriever = None
        self.llm = None
        self.load_agent()

    def check_creds(self):
        if "MISTRAL_API_KEY" not in os.environ:
            os.environ["MISTRAL_API_KEY"] = getpass.getpass(
                "Enter your Mistral API key: "
            )

    def load_vector_store(self, path="faiss_index"):
        embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
        self.vector_store = FAISS.load_local(
            path, embeddings, allow_dangerous_deserialization=True
        )

    def init_retriever(self):
        self.retriever = self.vector_store.as_retriever(search_kwargs={"k": self.K})

    def load_agent(self):
        self.check_creds()
        self.load_vector_store()
        self.init_retriever()

        rate_limiter = InMemoryRateLimiter(
            requests_per_second=1, check_every_n_seconds=1, max_bucket_size=10
        )
        self.llm = ChatMistralAI(
            model_name="mistral-large-latest",
            temperature=0,
            max_retries=2,
            rate_limiter=rate_limiter,
        )


agent = Agent()

description_model = agent.llm.bind_tools([GeneratedDescription])
selection_model = agent.llm.bind_tools([SelectedMusic])

description_chain = description_prompt | description_model
selection_chain = selection_prompt | selection_model


async def get_music(story):
    description = getFormattedOutput(
        description_chain.invoke({"story": story}), GeneratedDescription
    )
    matched_music_list = await agent.retriever.ainvoke(description.description)
    matched_music_index = getFormattedOutput(
        await selection_chain.ainvoke(
            {
                "k": agent.K,
                "story": story,
                "music_descriptions": getFormattedDescriptions(matched_music_list),
            }
        ),
        SelectedMusic,
    )

    matched_music = matched_music_list[matched_music_index.index - 1]
    return matched_music, matched_music_index.reason
