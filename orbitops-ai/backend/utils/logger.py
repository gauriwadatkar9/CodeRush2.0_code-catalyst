"""
Centralized application logger.
"""
import logging
import sys

from utils.config import get_settings

settings = get_settings()


def get_logger(name: str) -> logging.Logger:
    """Return a configured logger instance for the given module name."""
    logger = logging.getLogger(name)

    if not logger.handlers:
        handler = logging.StreamHandler(sys.stdout)
        formatter = logging.Formatter(
            fmt="%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
            datefmt="%Y-%m-%d %H:%M:%S",
        )
        handler.setFormatter(formatter)
        logger.addHandler(handler)
        logger.setLevel(logging.DEBUG if settings.debug else logging.INFO)
        logger.propagate = False

    return logger
