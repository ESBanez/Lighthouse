import $ from 'jquery';

// Owl Carousel initialization
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        loop: true,
        autoplayHoverPause: false,
        autoplay: true,
        smartSpeed: 1000,
    });
});
