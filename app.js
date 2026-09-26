document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('saludo');
    if (boton) {
        boton.addEventListener('click', () => {
            alert('Hola! Bienvenido a nuestra landing page!');
        });
    }
});