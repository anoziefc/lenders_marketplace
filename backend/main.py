from backend.db import Storage
from backend.routers import router
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import ORJSONResponse


@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        print("🔄 Starting app and initializing DB...")
        storage = Storage()
        app.state.storage = storage
        print("✅ Database initialized.")
        yield
        app.state.storage._engine.dispose()
        print("🛑 Shutting down app...")
    except Exception as e:
        print("Failed to initialize DB:", e)

app = FastAPI(
    lifespan=lifespan,
    default_response_class=ORJSONResponse,
    response_model_by_alias=False
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"]
)

app.include_router(router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Welcome to Lenders List"}


@app.get("/health")
def health():
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, reload=True)
