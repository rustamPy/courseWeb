(function ($) {

    $(document).ready(function () {
        $('body').addClass('js');
        var $menu = $('#menu'),
            $menulink = $('.menu-link');

        $menulink.click(function () {
            $menulink.toggleClass('active');
            $menu.toggleClass('active');
            return false;
        });
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            750: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })


    $("div.features-post").hover(
        function () {
            $(this).find("div.content-hide").slideToggle("medium");
        },
        function () {
            $(this).find("div.content-hide").slideToggle("medium");
        }
    );


    $("#tabs").tabs()

})(jQuery);

const blinkingDot = document.getElementById('blinkingDot');
const stream = document.getElementById('streamingText')

console.log(blinkingDot)
setInterval(function() {
    blinkingDot.style.opacity = (blinkingDot.style.opacity == 0) ? 1 : 0;
}, 500);