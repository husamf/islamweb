window.addEventListener("load", function() {
    var load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
    $("html").css({ 'overflow': 'auto' });
});
$(document).ready(function() {
    $(".btn-view-overlay").click(function() {
        $(".overlay-pop").addClass("display-block");
        $(".search-box").slideDown(200);
        $("html").css({
            'overflow': 'hidden'
        });
        $("body").addClass("border-body")

    });
});
$(document).ready(function() {
    $(".overlay-pop").click(function() {
        $(".overlay-pop").removeClass("display-block");
        $(".search-box").slideUp(200);
        $("html").css({
            'overflow': 'auto'
        });
        $("body").removeClass("border-body")
    });
});
$(document).keyup(function(e) {
    if (e.key === "Escape") {
        $(".overlay-pop").removeClass("display-block");
        $(".search-box").slideUp(200);
        $("html").css({
            'overflow': 'auto'
        });
        $("body").removeClass("border-body")
    }
});

$(document).ready(function() {
    $(".collapse-mobile").click(function() {
        $(".navbar-toggler-icon-border-1").toggleClass("navbar-toggler-icon-border-1-1");
        $(".navbar-toggler-icon-border-2").toggleClass("navbar-toggler-icon-border-1-2");

    });
});
$(document).ready(function() {
    $(".collapse-mobile").dblclick(function() {
        $(".navbar-toggler-icon-border-1").toggleClass("navbar-toggler-icon-border-1-1");
        $(".navbar-toggler-icon-border-2").toggleClass("navbar-toggler-icon-border-1-2");

    });
});
$(".owl-carousel-for-4").owlCarousel({
    rtl: true,
    loop: true,
    dots: false,
    margin: 30,
    autoplay: true,
    nav: true,
    responsiveClass: true,
    responsive: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 4,
        }

    }

});
$(".owl-carousel-for-1-1").owlCarousel({
    rtl: true,
    loop: true,
    dots: false,
    autoplay: false,
    nav: true,
    responsiveClass: true,
    responsive: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 1,
        }

    }

});
$(".owl-carousel-for-1-2").owlCarousel({
    rtl: true,
    loop: true,
    dots: true,
    autoplay: true,
    nav: false,
    responsiveClass: true,
    responsive: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 1,
        }

    }

});
$(".owl-carousel-for-3").owlCarousel({
    rtl: true,
    loop: true,
    dots: false,
    dots: true,
    margin: 30,
    stagePadding: 14,
    // autoplay: true,
    nav: true,
    responsiveClass: true,
    responsive: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 3,
        }

    }

});
$(".owl-carousel-for-5").owlCarousel({
    rtl: true,
    loop: true,
    dots: false,
    dots: true,
    margin: 30,
    // autoplay: true,
    nav: true,
    responsiveClass: true,
    responsive: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 5,
        }

    }

});