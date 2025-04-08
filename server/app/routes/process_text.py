import asyncio
from fastapi import APIRouter, Form
from httpx import HTTPStatusError

from app.services.agent import get_music
from app.utils.splitter import split_text
from app.models.process_text import ProcessTextResponse, Segment

router = APIRouter(prefix="/process-text")


@router.post("/", response_model=ProcessTextResponse)
async def process_text(story_text: str = Form(...)):
    text_chunks = split_text(story_text)
    segments = []

    for chunk in text_chunks:
        retries = 0
        wait_time = 5
        max_retries = 2

        while True:
            try:
                music_document, reason = await get_music(chunk)
                music_data = music_document.metadata

                segments.append(
                    Segment(
                        chunk_text=chunk,
                        audio_url=music_data["audio"],
                        start_time=music_data["start_time"],
                        end_time=music_data["end_time"],
                        reason=reason,
                    )
                )
                break
            except HTTPStatusError as e:
                if e.response.status_code == 429:
                    print(f"Rate limit hit. Retrying in {wait_time}s...")
                    await asyncio.sleep(wait_time)

                    if retries == max_retries:
                        raise e
                    retries += 1
                else:
                    raise e

    return ProcessTextResponse(segments=segments)
