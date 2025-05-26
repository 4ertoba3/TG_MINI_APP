document.querySelector('.analize-pagephoto-button-galery').addEventListener('click', function () {
        document.getElementById('galleryInput').click();
});

document.querySelector('.analize-pagephoto-button-camera').addEventListener('click', function () {
        document.getElementById('cameraInput').click();
});

// Обработка выбранного файла
document.getElementById('galleryInput').addEventListener('change', handleFile);
document.getElementById('cameraInput').addEventListener('change', handleFile);

function handleFile(event) {
    const file = event.target.files[0];
    if (file) {
        // Здесь можешь отправить файл на сервер или в Telegram Bot API
        console.log("Выбран файл:", file);
    }
}