from typing import List
from pydantic import BaseModel


class Segment(BaseModel):
    chunk_text: str
    audio_url: str
    start_time: float
    end_time: float
    reason: str


class ProcessTextResponse(BaseModel):
    segments: List[Segment]
