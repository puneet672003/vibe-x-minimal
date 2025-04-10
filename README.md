# Vibex

**Vibex** is a smart music matching engine that finds the perfect background music for your story. It breaks down your input into semantically distinct scenes and maps them to fitting tracks from a vast library of over 1.6 million music clips.

##  How It Works

1. **Scene Segmentation**: Breaks the story into meaningful segments.  
2. **Semantic Understanding**: Uses language models to understand the emotion, pacing, and context of each scene.  
3. **Music Matching**: Finds and recommends matching background tracks from a vector db of 1.6M clips.

---

## Project Structure

```
vibex/
├── client/      # Frontend (Next.js)
└── server/      # Backend (FastAPI + LangChain)
```

---

## Getting Started

### 1. Backend (FastAPI + LangChain)

```bash
cd server
poetry install
poetry run python run.py
```

### 2. Frontend (Next.js)

```bash
cd client
pnpm install
pnpm run dev
```

---

