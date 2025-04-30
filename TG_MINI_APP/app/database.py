from tortoise import Tortoise
from dotenv import load_dotenv
import os

load_dotenv()

TORTOISE_ORM = {
    "connections": {
        "default": os.getenv("DB_URL"),
    },
    "apps": {
        "models": {
            "models": ["aerich.models", "app.models"],
            "default_connection": "default",
        }
    }
}

async def init_db():
    await Tortoise.init(config=TORTOISE_ORM)
    await Tortoise.generate_schemas()