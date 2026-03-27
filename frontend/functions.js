function validateEmail(email) {
    if (typeof email !== "string") {
        return false;
    }
    const normalizedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(normalizedEmail);
}

function validatePassword(password) {
    if (typeof password !== "string") {
        return false;
    }
    const normalizedPassword = password.trim();
    // Бара: мин 8 карактери, голема буква, бројка и специјален карактер
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return passwordRegex.test(normalizedPassword);
}

function validateLogin(email, password) {
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);
    return isValidEmail && isValidPassword;
}

// ДЕЛ ЗА ЛОГИРАЊЕ (login.html)
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) { // Поправено: submit
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if(validateLogin(email, password)) {
            // Поправено: setItem за да се зачува емаилот
            localStorage.setItem("userEmail", email); 

            window.location.href = "welcome.html";
        } else {
            alert("Невалиден емаил или лозинка!");
        }
    });
}

// ДЕЛ ЗА ДОБРЕДОЈДЕ (welcome.html)
const welcomeHeading = document.getElementById("welcome");
if (welcomeHeading) {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
        welcomeHeading.textContent = `Welcome to event planner, ${savedEmail}`;
    }
}