document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btn-verificar');

    if (boton) {
        boton.addEventListener('click', () => {
            // Animación simple al hacer clic
            const icono = boton.querySelector('i');
            icono.style.transition = 'transform 0.5s ease';
            icono.style.transform = 'rotate(360deg)';

            // Mensaje interactivo
            alert('🚀 ¡Conexión con el Servidor DevOps Exitosa! Estructura verificada al 100%.');
            console.log('Validación manual disparada por el usuario.');

            // Resetear el icono después de la animación
            setTimeout(() => {
                icono.style.transform = 'rotate(0deg)';
            }, 500);
        });
    }
});