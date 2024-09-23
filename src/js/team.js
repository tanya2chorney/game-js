document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;

    // Получаем все слайды
    const slides = document.querySelectorAll('.slider-item');

    // Если слайдов нет, выводим сообщение об ошибке
    if (slides.length === 0) {
        console.error('Слайды не найдены!');
        return;
    }

    // Скрыть все слайды
    function hideAllSlides() {
        slides.forEach(slide => {
            slide.style.display = 'none'; // Скрываем каждый слайд
        });
    }

    // Показать текущий слайд
    function showSlide(index) {
        hideAllSlides(); // Сначала скрываем все слайды

        // Проверяем выход за границы массива слайдов
        if (index < 0) {
            currentSlide = slides.length - 1; // Возвращаемся на последний слайд
        } else if (index >= slides.length) {
            currentSlide = 0; // Возвращаемся на первый слайд
        } else {
            currentSlide = index; // Устанавливаем текущий слайд
        }

        // Показываем текущий слайд
        slides[currentSlide].style.display = 'block';
    }

    // Переход на предыдущий слайд
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Переход на следующий слайд
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Добавляем обработчики событий для стрелок
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');

    // Проверяем, если кнопки не найдены, выводим ошибку
    if (!prevButton || !nextButton) {
        console.error('Кнопки переключения не найдены!');
        return;
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Инициализация: показываем первый слайд
    showSlide(currentSlide);
});
