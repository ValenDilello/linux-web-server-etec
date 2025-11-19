/**
 * =========================================================================
 * Módulo principal de Bosque Común
 * Archivo: js/main.js
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------
    // 1. Manejo del Menú Hamburguesa
    // -----------------------------------------------------------
    const menuToggle = document.getElementById('menu-toggle');
    const header = document.querySelector('.header'); // <-- OBTENEMOS EL HEADER
    const mainNav = document.getElementById('main-nav');

    /**
     * Alterna la visibilidad del menú de navegación y la animación del header.
     */
    const toggleMenu = () => {
        const isExpanded = mainNav.classList.toggle('is-open');
        
        // CRUCIAL: Añadir/Quitar la clase 'is-open' al HEADER para la animación de altura
        if (header) {
            header.classList.toggle('is-open');
        }

        menuToggle.setAttribute('aria-expanded', isExpanded);
    };

    // La comprobación ahora incluye 'header'
    if (menuToggle && header && mainNav) {
        menuToggle.addEventListener('click', toggleMenu);
    }


    // -----------------------------------------------------------
    // 2. Simulación de Carga de Datos y Actualización de Stats
    // -----------------------------------------------------------

    /** Datos simulados que provendrían de una API */
    const mockApiData = {
        totalPlants: 2548,
        activeUsers: 452,
        commonPlants: [
            { name: 'Cedro', percentage: '30%' },
            { name: 'Arce', percentage: '25%' },
            { name: 'Bambú', percentage: '15%' },
        ],
    };

    /**
     * Rellena el sidebar de estadísticas con datos simulados.
     */
    const loadStatsData = (data) => {
        document.getElementById('stat-plants-total').textContent = data.totalPlants.toLocaleString();
        document.getElementById('stat-users-active').textContent = data.activeUsers.toLocaleString();

        const commonPlantsList = document.getElementById('stat-common-plants');
        if (commonPlantsList) {
            commonPlantsList.innerHTML = ''; // Limpiar lista
            data.commonPlants.forEach(plant => {
                const listItem = document.createElement('li');
                listItem.textContent = `${plant.name} (${plant.percentage})`;
                commonPlantsList.appendChild(listItem);
            });
        }
    };

    // Cargar datos al iniciar la página
    loadStatsData(mockApiData);


    // -----------------------------------------------------------
    // 3. Manejo de Tooltips y Plantas Interactivas
    // -----------------------------------------------------------

    const plants = document.querySelectorAll('.plant');

    /**
     * Genera el contenido HTML del tooltip a partir de los atributos de datos.
     * @param {HTMLElement} plantElement - El elemento div.plant.
     * @returns {string} HTML del contenido del tooltip.
     */
    const generateTooltipContent = (plantElement) => {
        const name = plantElement.dataset.plantName || 'Planta Desconocida';
        const level = plantElement.dataset.plantLevel || '0%';
        const owner = plantElement.dataset.plantOwner || 'Bosque Común';

        return `
            <div class="tooltip__content">
                <p class="tooltip__name">${name}</p>
                <p class="tooltip__level">Nivel: ${level}</p>
                <p class="tooltip__owner">Propietario: ${owner}</p>
            </div>
        `;
    };

    /**
     * Inicializa los tooltips para todas las plantas.
     */
    const initializePlantTooltips = () => {
        plants.forEach(plant => {
            const tooltip = plant.querySelector('.plant__tooltip');
            
            // 1. Rellenar el tooltip con contenido
            if (tooltip) {
                tooltip.innerHTML = generateTooltipContent(plant);
            }

            // 2. Lógica para asegurar que el tooltip se muestra/oculta correctamente
            // (El CSS ya maneja la mayoría con el pseudo-clase :hover, 
            // pero si se necesita lógica JS adicional, se agregaría aquí)
        });
    };

    initializePlantTooltips();
});


// -----------------------------------------------------------
    // 4. Manejo del Banner de Aviso (Experimental)
    // -----------------------------------------------------------
    const wipBanner = document.getElementById('wip-banner');
    const closeWipBtn = document.getElementById('close-wip');

    if (wipBanner && closeWipBtn) {
        // 1. Comprobar si el usuario ya lo cerró antes (Opcional)
        // 2. Evento para cerrar
        closeWipBtn.addEventListener('click', () => {
            // Efecto visual de desvanecimiento
            wipBanner.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            wipBanner.style.opacity = '0';
            wipBanner.style.transform = 'translateY(-10px)';

            // Esperar a que termine la animación para quitarlo del HTML
            setTimeout(() => {
                wipBanner.style.display = 'none';
                
            }, 300);
        });
    }