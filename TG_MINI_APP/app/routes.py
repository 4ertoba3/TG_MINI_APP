# from fastapi import APIRouter, Request, Depends
# from fastapi.responses import HTMLResponse
# from sqlalchemy.orm import Session
# from .database import SessionLocal
# from . import models
# from fastapi.templating import Jinja2Templates
#
# router = APIRouter()
# templates = Jinja2Templates(directory="app/templates")
#
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()
#
# @router.get("/", response_class=HTMLResponse)
# async def read_root(request: Request):
#     return templates.TemplateResponse("index.html", {"request": request})