// -------- Formular-Validierung (Login & Register) --------
(function () {
    const namePattern = /^[A-Za-z�������\s-]+$/;

    function byId(id) {
        return document.getElementById(id);
    }

    function errorSpanFor(input) {
        return byId("error-" + input.id);
    }

    function showError(input, message) {
        const span = errorSpanFor(input);
        if (span) span.textContent = message;
        input.classList.add("error");
    }

    function clearError(input) {
        const span = errorSpanFor(input);
        if (span) span.textContent = "";
        input.classList.remove("error");
    }

    // ----- Hilfspr�fungen -----
    function isEmpty(input) {
        return !input.value || input.value.trim() === "";
    }

    // ----- Login-Validierung -----
    function validateLoginForm(form) {
        let valid = true;
        const email = byId("userEmail");
        const password = byId("userPassword");

        [email, password].forEach(clearError);

        // E-Mail
        if (isEmpty(email)) {
            showError(email, "E-Mail darf nicht leer sein.");
            valid = false;
        } else if (!email.checkValidity()) {
            showError(email, "Bitte eine g�ltige E-Mail eingeben.");
            valid = false;
        }

        // Passwort
        if (isEmpty(password)) {
            showError(password, "Passwort darf nicht leer sein.");
            valid = false;
        } else if (password.value.length < 6) {
            showError(password, "Passwort muss mindestens 6 Zeichen haben.");
            valid = false;
        }

        return valid;
    }


    window.validateLoginForm = validateLoginForm; // Expose to global scope


})();