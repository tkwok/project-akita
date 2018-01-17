/* Tony Kwok */
/* TODO Please refactor me to JavaScript */
/*globals $:false document:false location:false*/

"use strict";

(function () {
    $(document).ready(function () {
        $('.js--section-intro').waypoint(function (direction) {
            if (direction === 'down') {
                /* apply sticky class */
                $('nav').addClass('sticky');
                $('#move-to-top').fadeIn(500);
            } else {
                /* remove sticky class */
                $('nav').removeClass('sticky');
                $('#move-to-top').fadeOut(500);
            }
        });

        /* scroll buttons */
        $('.js--scroll-to-plan').click(function () {
            $('html, body').animate({
                scrollTop: $('.js--section-intro').offset().top
            }, 1000);
        });

        $('.js--scroll-to-start').click(function () {
            $('html, body').animate({
                scrollTop: $('.js--section-features').offset().top
            }, 1000);
        });

        /* navigation scroll */
        $(function () {
            $('a[href*=\\#]:not([href=\\#])').click(function () {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') ||
                    location.hostname === this.hostname) {

                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });

        /* animation on scroll */
        $('.js--wp-1').waypoint(function () {
            $('.js--wp-1').addClass('animated fadeIn');
        }, {
            offset: '50%'
        });

        /* animation on scroll */
        $('.js--wp-2').waypoint(function () {
            $('.js--wp-2').addClass('animated fadeInUp');
        }, {
            offset: '50%'
        });

        /* animation on scroll */
        $('.js--wp-3').waypoint(function () {
            $('.js--wp-3').addClass('animated fadeIn');
        }, {
            offset: '50%'
        });

        /* animation on scroll */
        $('.js--wp-4').waypoint(function () {
            $('.js--wp-4').addClass('animated pulse');
        }, {
            offset: '50%'
        });
        
        $('.js--nav-icon').click(function () {
            $('.header-row').toggleClass('menu-expanded');
            $('.js--main-nav').slideToggle(300);
            $('.js--nav-icon i').toggleClass('ion-navicon-round ion-close-round');
        });

    });
})();