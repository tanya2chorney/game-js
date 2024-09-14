const modal = document.getElementById("myModal");
        const closeModalBtn = document.getElementById("closeModal");
        const saveNameBtn = document.getElementById("saveName");
        const usernameInput = document.getElementById("username");
        const errorMessage = document.getElementById("error");
        const userSpan = document.getElementById("user");

        // Функция открытия модального окна
        function openModal() {
            if (!localStorage.getItem("userName")) {
                modal.style.display = "flex";
            } else {
                const savedName = localStorage.getItem("userName");
                userSpan.textContent = savedName; // Отображаем имя пользователя
            }
        }

        // Автоматическое открытие при загрузке, если имя не сохранено
        window.onload = function () {
            openModal();
        };

        // Закрытие по кнопке
        closeModalBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });

        // Закрытие по нажатию на бекдроп
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        // Закрытие по нажатию ESC
        window.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                modal.style.display = "none";
            }
        });

        // Сохранение имени пользователя
        saveNameBtn.addEventListener("click", function () {
            const userName = usernameInput.value.trim();
            
            // Проверка имени
            if (userName.length < 4) {
                errorMessage.textContent = "Ім'я має містити більше 4 символів!";
            } else {
                localStorage.setItem("userName", userName); // Сохраняем имя в LocalStorage
                userSpan.textContent = userName; // Обновляем имя на странице
                modal.style.display = "none"; // Закрываем модальное окно
            }
        });