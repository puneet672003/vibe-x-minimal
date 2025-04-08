from pydantic import BaseModel, Field


class GeneratedDescription(BaseModel):
    """Always use this tool to structure your response."""

    description: str = Field(description="Description of music")


class SelectedMusic(BaseModel):
    """Always use this tool to structure your response."""

    index: int = Field(description="Index (1-based) of the best matching description")
    reason: str = Field(description="Why this music fits the story")
