(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        dotsData: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);



// ----------------------------------------------------------
// ✅ VIEW COUNTER (AWS LAMBDA + DYNAMODB)
// ----------------------------------------------------------

const functionUrl = "https://vnvxviefzimfukj4rimly4d2ta0ndtvh.lambda-url.us-east-1.on.aws/";  // <-- replace this

async function fetchViewCount() {
    try {
        console.log("Fetching view count from Lambda...");

        const response = await fetch(functionUrl);
        const result = await response.json();

        // Handle stringified JSON from Lambda
        const data = typeof result === "string" ? JSON.parse(result) : result;

        console.log("Lambda response:", data);

        document.getElementById("viewCount").innerText = data.views;

    } catch (error) {
        console.error("Error fetching view count:", error);
        document.getElementById("viewCount").innerText = "error";
    }
}

window.onload = fetchViewCount;
