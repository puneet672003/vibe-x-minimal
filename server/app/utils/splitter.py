from semantic_text_splitter import TextSplitter


def split_text(text, words_per_minute=300):
    words_per_30sec = int(words_per_minute / 2)
    chars_per_30sec = words_per_30sec * 5

    splitter = TextSplitter(chars_per_30sec)
    chunks = splitter.chunks(text)

    return chunks
