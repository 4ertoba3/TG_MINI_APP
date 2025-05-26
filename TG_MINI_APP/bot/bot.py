import asyncio
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command
from aiogram.types import WebAppInfo, ReplyKeyboardMarkup, KeyboardButton

TOKEN = "7821104503:AAHAvID8VmrZFf8Ci_jDzlMUwaFbyzaNEJQ"
WEB_APP_URL = "https://4636-212-111-82-81.ngrok-free.app/"  # сюда вставляешь адрес своего FastAPI приложения

# Инициализация бота и диспетчера
bot = Bot(token=TOKEN)
dp = Dispatcher()

@dp.message(Command("start"))
async def cmd_start(message: types.Message):
    keyboard = ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(text="Открыть Mini App", web_app=WebAppInfo(url=WEB_APP_URL))]
        ],
        resize_keyboard=True
    )
    await message.answer("Нажми на кнопку ниже, чтобы открыть Mini App:", reply_markup=keyboard)

async def main():
    # Запускаем бота
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())