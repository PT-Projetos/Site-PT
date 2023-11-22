var $carousel = document.querySelector(".carousel-rolagem");

new Glider($carousel,
    {
    slidesToShow: 4,
    slideToScroll: 4,
    draggable: true,
    dots: ".glider-dots",
    arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
    },
    responsive: [
            {
        breakpoint: 775,
        settings: {
            slidesToShow: 'auto',
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25
        }
            },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        }
    ]
});