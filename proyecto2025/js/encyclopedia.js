// js/encyclopedia.js

// Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Obtener los elementos necesarios
    const searchInput = document.getElementById('search-input');
    const plantGrid = document.getElementById('plant-grid');
    
    // Comprobar si la barra de búsqueda y la cuadrícula existen en esta página
    if (searchInput && plantGrid) {
        
        // 2. Obtener todas las tarjetas de plantas
        const plantCards = plantGrid.querySelectorAll('.plant-card');

        // 3. Crear la función de filtrado
        const filterPlants = (event) => {
            // Obtener el texto de búsqueda y pasarlo a minúsculas
            const searchTerm = event.target.value.toLowerCase();

            // 4. Recorrer cada tarjeta de planta
            plantCards.forEach(card => {
                // Obtener todo el texto de la tarjeta (nombre, especie, tags, desc)
                const cardText = card.textContent.toLowerCase();

                // 5. Comprobar si el texto de la tarjeta INCLUYE el término de búsqueda
                if (cardText.includes(searchTerm)) {
                    // Si coincide, se muestra
                    card.style.display = ''; // Vuelve al valor por defecto (grid)
                } else {
                    // Si no coincide, se oculta
                    card.style.display = 'none';
                }
            });
        };

        // 6. Añadir el "escuchador" de eventos al campo de búsqueda
        // 'input' se dispara cada vez que el usuario escribe o borra una letra
        searchInput.addEventListener('input', filterPlants);
    }
});