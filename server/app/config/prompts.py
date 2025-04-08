from langchain_core.prompts import ChatPromptTemplate

description_prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are background music caption generator tool. Given the piece of text, describe music that fits the best as background music",
        ),
        (
            "system",
            "The caption consists of multiple sentences about the music, e.g., 'A low sounding male voice is rapping over a fast paced drums playing a reggaeton beat along with a bass. Something like a guitar is playing the melody along. This song may be playing in a bar.'",
        ),
        (
            "system",
            "The music description should include genre, instruments, mood, tempo and scene setting.",
        ),
        ("user", "Text: {story} \n Description: "),
    ]
)

selection_prompt = ChatPromptTemplate.from_messages(
    [
        ("system", "You are a background music matching tool."),
        (
            "system",
            "Given a story and {k} background music descriptions, choose the one that best matches the mood, tempo, and setting of the story.",
        ),
        (
            "user",
            "Story: {story} \n\n Music Descriptions: {music_descriptions} \n\n Which one matches best?",
        ),
    ]
)
