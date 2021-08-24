$(document).ready(function($) {
    if ($('.content-slider__container').length){
        var MainSlider = new Swiper('.content-slider__container', {
            slidesPerView: 1,
            loop: true,
            observer: true,
            spaceBetween: 30,
            observeParents: true,
            lazy: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: ".content-slider__container .swiper-pagination",
                clickable: true,
            }
        });
    }

    if ($('.tabs__content-slider').length){
        var MainSlider = new Swiper('.tabs__content-slider', {
            slidesPerView: 1,
            loop: true,
            observer: true,
            spaceBetween: 30,
            observeParents: true,
            lazy: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: ".tabs__content-slider .swiper-pagination",
                clickable: true,
            }
        });
    }

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    if ($('.tabs').length){
        $('.tabs .tabs__nav-item').on('click', function(){
            let ClickedNav = $(this).data('tab');
            let NeedElem = $( ".tabs .tabs__content-item[data-content='"+ClickedNav+"']" );
            $('.tabs .tabs__nav-item').removeClass('active');
            $(this).addClass('active');
            $('.tabs__content .tabs__content-item').removeClass('active');
            NeedElem.addClass('active');
        });
    }

    if ($('.timetable__list').length){
        $('.timetable__item').on('click', function(){
            $('.timetable__item').removeClass('active');
            $(this).addClass('active');
        });
    }

    $("a.header__nav-lnk").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 0
        }, 800);
    });
});