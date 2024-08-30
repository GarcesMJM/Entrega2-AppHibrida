window.onload = init;

function init(){
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    function updateCarousel() {
        const carouselWidth = document.querySelector('.carousel').offsetWidth;
        const offset = -carouselWidth * currentIndex;
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
    }

    function moveCarousel(direction) {
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        updateCarousel();
    }

    function autoMoveCarousel() {
        moveCarousel(1);
    }

    // Mueve el carrusel automáticamente cada 3 segundos
    let autoMoveInterval = setInterval(autoMoveCarousel, 3000);

    // Pausar el carrusel al hacer hover y reanudarlo al salir
    document.querySelector('.carousel').addEventListener('mouseover', () => {
        clearInterval(autoMoveInterval);
    });

    document.querySelector('.carousel').addEventListener('mouseout', () => {
        autoMoveInterval = setInterval(autoMoveCarousel, 3000);
    });

    // Actualiza el carrusel al cambiar el tamaño de la ventana para mantener el comportamiento responsivo
    window.addEventListener('resize', updateCarousel);

    desplegarMenu();
}

function desplegarMenu() {
    var menuToggle = document.getElementById('menu-toggle');
    var sidebarMenu = document.getElementById('sidebar-menu');

    menuToggle.addEventListener('click', function() {
        if (sidebarMenu.classList.contains('hidden')) {
            sidebarMenu.classList.remove('hidden');
            menuToggle.classList.remove('sidebar');
            menuToggle.classList.add('hidden');
        }
    });

    sidebarMenu.addEventListener('click', function(){
        if(menuToggle.classList.contains('hidden')){
            sidebarMenu.classList.add('hidden');
            menuToggle.classList.remove('hidden');
            menuToggle.classList.add('sidebar');
        }
    });
}



