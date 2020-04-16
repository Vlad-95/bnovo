
$(document).ready(function () {

    /*фиксация хэдера*/

    $(window).scroll(function () {
        var $headerHeight = $('.header').outerHeight();

        if($(window).scrollTop() > $headerHeight) {
            $('.header').addClass('fixed');
        }
        else {
            $('.header').removeClass('fixed');
        }
    });







    /*проверка на дочерние элементы в меню*/
    $('.nav > li, .mobile-nav > li, .dropdown-0-level > li').each(function () {
        if($(this).children().length > 1 ) {
            $(this).addClass('dropdown-toggle');
        };
    });

    /*активный элемент ТАРИФЫ в меню*/
    $('.nav > li').mouseenter(function () {
        if($(this).hasClass('active')) {
            $('.nav > li.active').css('background','rgba(35, 98, 166,0.4)');

        }
        else {
            $('.nav > li.active').css('background','none');
        }
    });
    $('.nav > li').mouseleave(function () {
        if($(this).hasClass('active')) {
            $('.nav > li.active').css('background','rgba(35, 98, 166,0.4)');

        }
        else {
            $('.nav > li.active').css('background','rgba(35, 98, 166,0.4)');
        }
    });


    /*мобильное меню*/
    $('.burger').click(function () {
        $('.mobile-menu').toggleClass('active');
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
    });

    $('.mobile-nav > li.dropdown-toggle').click(function () {
        $(this).find('.dropdown-0-level').slideToggle();
        $(this).toggleClass('active');
        $('.mobile-nav > li.dropdown-toggle').not(this).find('.dropdown-0-level').slideUp();
        $('.mobile-nav > li.dropdown-toggle').not(this).removeClass('active');
    });


    if($('.main-page').length) {
        /*Слайдер во втором блоке*/
        $('.second-section-content').slick({
            arrows: false,
            dots: false,
            infinite: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 319,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '30px'
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 930,
                    settings: "unslick"
                }
            ]
        });


        /*Одинаковая высота заголовков в 3м блоке*/
        $('.second-section-content .item').matchHeight();
        $('.second-section-content .item span').matchHeight();

        $('.third-section-slider').slick({
            arrows: true,
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            prevArrow: '<div class="slick-prev"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M10 1L1.20479 9.79521L9.99924 18.5897" stroke="#3A74C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n' +
                '</div>',
            nextArrow: '<div class="slick-next"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M1 19.0002L9.79521 10.205L1.00076 1.41059" stroke="#3A74C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n' +
                '</div>',
            responsive: [
                {
                    breakpoint: 1230,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
            /*centerMode: true,
            variableWidth: true,
            draggable: true*/
        });




        /*СЛАЙДЕР ПЕРВОГО БЛОКА С АНИМАЦИЕЙ*/
        $('.fourth-section-slider').slick({
            arrows:true,
            dots:true,
            infinite:false,
            autoPlay: false,
            prevArrow : '<div class="slick-prev"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M9 0.5L1 8.5L9 16.5" stroke="#818181" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n' +
                '</div>',
            nextArrow: '<div class="slick-next"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M1 0.5L9 8.5L1 16.5" stroke="#818181" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n' +
                '</div>',
            responsive: [
                {
                    breakpoint: 680,
                    settings: {
                        arrows:false
                    }
                }
            ]
        });

        $('.fourth-section-slider')
            .on('beforeChange', function(event, slick, currentSlide, nextSlide){
                /*$('.slick-list .slide-img').addClass('do-transition');*/
                /*$('.fourth-section-slider .slide').removeClass('anim');*/

            })
            .on('afterChange', function(event, slick, currentSlide, nextSlide){
                /*$('.slick-list .slide-img').removeClass('do-transition');*/
                /*$('.slider-count .cur').html(currentSlide+1);
                $('.slick-list .slide .slide-text-white').addClass('show');*/
                $('.fourth-section-slider .slide.second').addClass('anim');


            });

        if($(".fourth-section-slider").length) {
            $(window).scroll(function () {
                var sliderHeight = $('.fourth-section-slider').offset().top - $(window).scrollTop();

                if (sliderHeight <= 400) {
                    $('.fourth-section-slider .slide.first').addClass('anim');
                }

            });
        };



        /*СЛАЙДЕР ВТОРОГО БЛОКА С АНИМАЦИЕЙ*/
        $('.fifth-section-slider').slick({
            arrows:true,
            dots:true,
            infinite:false,
            autoPlay: false,
            prevArrow : '<div class="slick-prev"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M9 0.5L1 8.5L9 16.5" stroke="#818181" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n' +
                '</div>',
            nextArrow: '<div class="slick-next"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M1 0.5L9 8.5L1 16.5" stroke="#818181" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n' +
                '</div>',
            responsive: [
                {
                    breakpoint: 680,
                    settings: {
                        arrows:false
                    }
                }
            ]

        });

        $('.fifth-section-slider')
            .on('beforeChange', function(event, slick, currentSlide, nextSlide){
                /*$('.slick-list .slide-img').addClass('do-transition');*/
                /*$('.fifth-section-slider .slide').removeClass('anim');*/

            })
            .on('afterChange', function(event, slick, currentSlide, nextSlide){
                /*$('.slick-list .slide-img').removeClass('do-transition');*/
                /*$('.slider-count .cur').html(currentSlide+1);
                $('.slick-list .slide .slide-text-white').addClass('show');*/
                $('.fifth-section-slider .slick-current .slide').addClass('anim');


            });

        if($(".fifth-section-slider").length) {
            $('.fifth-section-slider .slide.first .first-tooltip').click(function () {
                $(this).toggleClass('close');
                $('.fifth-section-slider .slide.first .first-tooltip-content').toggleClass('fade');
            });
            $('.fifth-section-slider .slide.first .second-tooltip').click(function () {
                $(this).toggleClass('close');
                $('.fifth-section-slider .slide.first .second-tooltip-content').toggleClass('fade');
            });

            $(window).scroll(function () {
                var sliderHeight = $('.fifth-section-slider').offset().top - $(window).scrollTop();

                if (sliderHeight <= 400) {
                    $('.fifth-section-slider .slide.first .first-tooltip').addClass('close');
                    $('.fifth-section-slider .slide.first .second-tooltip').addClass('close');
                    $('.fifth-section-slider .slick-slide:nth-of-type(1) .slide').addClass('anim');
                }

            });
        };




        $('.seven-section-slider').slick({
            arrows: true,
            dots: true,
            infinite: false,
            slidesToShow: 1,
            prevArrow : '<div class="slick-prev"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M9 0.5L1 8.5L9 16.5" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n' +
                '</div>',
            nextArrow: '<div class="slick-next"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M1 0.5L9 8.5L1 16.5" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n' +
                '</div>'
        });

        $('.seven-section-slider')
            .on('beforeChange', function(event, slick, currentSlide, nextSlide){
                /*$('.slick-list .slide-img').addClass('do-transition');*/
                /*$('.fifth-section-slider .slide').removeClass('anim');*/

            })
            .on('afterChange', function(event, slick, currentSlide, nextSlide){
                /*$('.slick-list .slide-img').removeClass('do-transition');*/
                /*$('.slider-count .cur').html(currentSlide+1);
                $('.slick-list .slide .slide-text-white').addClass('show');*/
                $('.seven-section-slider .slick-current .slide.graphic-slide').addClass('anim');


            });




        $('.eight-section-slider').slick({
            arrows: true,
            dots: true,
            infinite: false,
            slidesToShow: 1,
            prevArrow : '<div class="slick-prev"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M9 0.5L1 8.5L9 16.5" stroke="#818181" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n' +
                '</div>',
            nextArrow: '<div class="slick-next"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M1 0.5L9 8.5L1 16.5" stroke="#818181" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n' +
                '</div>',
            responsive: [
                {
                    breakpoint: 680,
                    settings: {
                        arrows:false
                    }
                }
            ]
        });

        $('.eight-section-slider')
            .on('beforeChange', function(event, slick, currentSlide, nextSlide){
                /*$('.slick-list .slide-img').addClass('do-transition');*/
                /*$('.fifth-section-slider .slide').removeClass('anim');*/

            })
            .on('afterChange', function(event, slick, currentSlide, nextSlide){
                /*$('.slick-list .slide-img').removeClass('do-transition');*/
                /*$('.slider-count .cur').html(currentSlide+1);
                $('.slick-list .slide .slide-text-white').addClass('show');*/
                $('.eight-section-slider .slick-current .slide.second').addClass('anim');


            });


        if($(".eight-section-slider").length) {
            $(window).scroll(function () {
                var sliderHeight = $('.eight-section-slider').offset().top - $(window).scrollTop();

                if (sliderHeight <= 400) {
                    $('.eight-section-slider .slide.first').addClass('anim');
                }

            });
        };



        /*появление смс*/
        if($(".ten-section-image").length) {
            $(window).scroll(function () {
                var phoneHeight = $('.ten-section-image').offset().top - $(window).scrollTop();

                if (phoneHeight <= 400) {
                    $('.ten-section-image .sms').css({opacity: '1'});
                }

            });
        };



        /*слайдер КАК ЭТО РАБОТАЕТ*/
        $('.twelve-section-content .items-row .item p').matchHeight();


        $('.twelve-section-content .items-row').slick({
            arrows: false,
            dots: false,
            infinite: false,
            mobileFirst: true,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 319,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '50px'
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 760,
                    settings: "unslick"
                }
            ]
        });


        /*слайдер клиентов*/
        $('.thirteen-section-slider').slick({
            arrows: true,
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,


            prevArrow: '<div class="slick-prev"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M10 1L1.20479 9.79521L9.99924 18.5897" stroke="#3A74C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n' +
                '</div>',
            nextArrow: '<div class="slick-next"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M1 19.0002L9.79521 10.205L1.00076 1.41059" stroke="#3A74C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n' +
                '</div>',
            responsive: [
                {
                    breakpoint: 930,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
            /*centerMode: true,
            variableWidth: true,
            draggable: true*/
        });

    }





    /*$('.main-slider')
    .on('beforeChange', function(event, slick, currentSlide, nextSlide){
        /!*$('.slick-list .slide-img').addClass('do-transition');*!/
        $('.slick-list .slide .slide-text-white').removeClass('show');

    })
    .on('afterChange', function(event, slick, currentSlide, nextSlide){
        /!*$('.slick-list .slide-img').removeClass('do-transition');*!/
        $('.slider-count .cur').html(currentSlide+1);
        $('.slick-list .slide .slide-text-white').addClass('show');


    });*/




    /*индексы слайдов*/
    /*var allSlides = $('.main-slider .slide').length,
        allSlidesVal = $('.slider-count .all');

    allSlidesVal.html(allSlides);*/




    /*Страница PMS*/
    if($('.pms-page')) {
        $('.pms-third-content .item').matchHeight();
        $('.pms-fourth-content .item').matchHeight();
    }



    /*Страница Channel*/
    if($('.channel-page')) {
        $('.channel-fifth-content .item').matchHeight();
    };
    /*Страница МОДУЛЬ*/
    if($('.module-page').length) {
        $('.module-second-content .right .img-slider').slick({
            arrows:true,
            dots:true,
            infinite:false,
            autoPlay: false,
            prevArrow : '<div class="slick-prev"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M9 0.5L1 8.5L9 16.5" stroke="#818181" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n' +
                '</div>',
            nextArrow: '<div class="slick-next"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M1 0.5L9 8.5L1 16.5" stroke="#818181" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>\n' +
                '</div>',
            responsive: [
                {
                    breakpoint: 680,
                    settings: {
                        arrows:false
                    }
                }
            ]

        });
    };


    /*GOOGLE PAGE QUESTION TOGGLE*/
    if($('.google-page').length) {
        $('.google-eight-content .item .toggle').click(function () {

            $('.google-eight-content .item .toggle').not(this).siblings('.text').slideUp();
            $('.google-eight-content .item .toggle').not(this).removeClass('active');
            $(this).siblings('.text').slideToggle();
            $(this).toggleClass('active');
        })
    }

});