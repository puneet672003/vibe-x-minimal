def getFormattedOutput(aiResponse, formatModel):
    formatted_output = formatModel.model_validate(aiResponse.tool_calls[0]["args"])
    return formatted_output


def getFormattedDescriptions(music_descriptions):
    formatted_descriptions = "\n".join(
        [f"{i+1}. {doc.page_content}" for i, doc in enumerate(music_descriptions)]
    )
    return formatted_descriptions
