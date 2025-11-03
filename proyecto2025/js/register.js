// Espera a que todo el contenido del HTML esté cargado
document.addEventListener("DOMContentLoaded", function() {

    // 1. Seleccionamos los elementos que necesitamos
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const iconEyeOpen = document.getElementById('icon-eye-open');
    const iconEyeClosed = document.getElementById('icon-eye-closed');

    // 2. Revisamos que los elementos existan (esto es un buen seguro)
    if (togglePassword && passwordInput && iconEyeOpen && iconEyeClosed) {

        // 3. Añadimos el "escuchador" de clics al icono
        togglePassword.addEventListener('click', function() {

            // Comprueba el tipo actual del input de contraseña
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';

            // Cambia el tipo del input
            passwordInput.setAttribute('type', type);

            // Cambia el icono que se muestra
            if (type === 'text') {
                // Si la contraseña es visible, muestra el ojo cerrado
                iconEyeOpen.style.display = 'none';
                iconEyeClosed.style.display = 'block';
            } else {
                // Si la contraseña está oculta, muestra el ojo abierto
                iconEyeOpen.style.display = 'block';
                iconEyeClosed.style.display = 'none';
            }
        });
    } else {
        // Si esto aparece, hay un error en los ID de tu HTML
        console.error("Error: No se encontraron los elementos para el toggle de contraseña.");
    }

});