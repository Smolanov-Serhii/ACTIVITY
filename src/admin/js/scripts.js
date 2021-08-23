jQuery(document).ready(function($) {

    if ($('.cleaning-slider__items').length){
        var MainSlider = new Swiper('.cleaning-slider__items', {
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
            navigation: {
                nextEl: '.cleaning-slider__next',
                prevEl: '.cleaning-slider__prev',
            }
        });
    }

    var MainSwiper = new Swiper(".prev-swiper", {
        loop: true,
        spaceBetween: 18,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

    });
    var PrevSwiper = new Swiper(".main-swiper", {
        loop: true,
        // spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: MainSwiper,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    if ($('.prices-page').length){
        $('.prices-page__tabs-item').on('click', function(){
            let ClickedNav = $(this).data('cont');
            let NeedElem = $( ".prices-page__prices-item[data-contid='"+ClickedNav+"']" );
            $('.prices-page__tabs-item').removeClass('active-tab');
            $(this).addClass('active-tab');
            $('.prices-page__prices-item ').removeClass('active-tab');
            NeedElem.addClass('active-tab');
        });
    }

    if ($('.contacts-page').length){
        ymaps.ready(function () {
            var CenterFirstCoord = $('.contacts-page__map').data('coord1');
            var CenterSecondCoord = $('.contacts-page__map').data('coord2');
            var IconUrl = $('.contacts-page__map').data('icon');
            var myMap = new ymaps.Map('map', {
                    center: [CenterFirstCoord, CenterSecondCoord],
                    controls: [],
                    zoom: 16
                }, {
                    searchControlProvider: true
                }),

                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    // Своё изображение иконки метки.
                    iconImageHref: "",
                    // Размеры метки.
                    iconImageSize: [0, 0],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                }),
                myPlacemarkWithContent = new ymaps.Placemark([CenterFirstCoord, CenterSecondCoord], {
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#imageWithContent',
                    // Своё изображение иконки метки.
                    iconImageHref: IconUrl,
                    // Размеры метки.
                    iconImageSize: [40, 60],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-20, -30],
                    // Смещение слоя с содержимым относительно слоя с картинкой.
                    iconContentOffset: [20, 30],
                    // Макет содержимого.
                    iconContentLayout: MyIconContentLayout
                });

            myMap.geoObjects
                // .add(myPlacemark)
                .add(myPlacemarkWithContent);
        });
    }

});