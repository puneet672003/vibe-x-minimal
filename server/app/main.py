from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import process_text

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(process_text.router)
