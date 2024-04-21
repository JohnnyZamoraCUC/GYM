document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("#loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const email = document.querySelector("#inputEmail").value;
        const password = document.querySelector("#inputPassword").value;

        // Verificar las credenciales (hardcode)
        if (email === "admin@gmail.com" && password === "admin") {
            // Redireccionar a home.html si las credenciales son correctas
            window.location.href = "home.html";
        } else {
            // Mostrar mensaje de error (puedes implementar esto si lo necesitas)
            alert("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
        }
    });
});
