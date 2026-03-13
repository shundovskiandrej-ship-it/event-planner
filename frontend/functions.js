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
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return passwordRegex.test(normalizedPassword);
}

function validateLogin(email, password) {
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);
    return isValidEmail && isValidPassword;
}