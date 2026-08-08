"""
Application configuration.

Settings are loaded from environment variables (and an optional .env file).
See .env.example for the full list of supported variables.
"""
from functools import lru_cache
from typing import List

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # General
    app_name: str = "OrbitOps AI Backend"
    app_version: str = "1.0.0"
    environment: str = "development"
    debug: bool = True

    # Server
    host: str = "0.0.0.0"
    port: int = 8000

    # CORS — comma-separated list of allowed origins in the environment,
    # parsed into a list below.
    cors_origins: str = "http://localhost:5173,http://127.0.0.1:5173"

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    @property
    def cors_origins_list(self) -> List[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]


@lru_cache
def get_settings() -> Settings:
    """Cached settings instance — avoids re-parsing env vars on every request."""
    return Settings()
