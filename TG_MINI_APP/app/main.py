from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from app.database import init_db
from app.models import User
from pydantic import BaseModel
from fastapi import Form

app = FastAPI()

@app.on_event("startup")
async def startup_event():
    await init_db()

templates = Jinja2Templates(directory="app/templates")

@app.post("/register")
async def register_user(
    telegram_id: int = Form(...),  # Обязательное поле
    username: str = Form(...),      # Обязательное поле
    first_name: str = Form(...),    # Обязательное поле
    last_name: str = Form(None),    # Необязательное поле, по умолчанию None
    age: int = Form(..., ge=0),     # Обязательное поле, и должно быть больше или равно 0
):
    # Создаем нового пользователя в базе данных
    user = await User.create(
        telegram_id=telegram_id,
        username=username,
        first_name=first_name,
        last_name=last_name,
        age=age
    )
    return {"message": f"User {user.username} successfully registered!"}

@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})