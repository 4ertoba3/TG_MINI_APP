import asyncio
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command
from aiogram.types import WebAppInfo, ReplyKeyboardMarkup, KeyboardButton

TOKEN = "7951045570:AAH0n7flc1q-Q6pVDs8kTCFfEglSPbnKtNs"
WEB_APP_URL = "https://fd24-5-35-37-132.ngrok-free.app/"  # сюда вставляешь адрес своего FastAPI приложения

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