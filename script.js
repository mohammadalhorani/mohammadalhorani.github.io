$(document).ready(function() {
    $(window).scroll(function() {
        // Sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll-up button click script
    $('.scroll-up-btn').click(function() {
        // Use 'body' and 'html' for broader browser compatibility
        $('html, body').animate({ scrollTop: 0 }, 'smooth', function() {
            // Callback function after animation completes
            // Set scrollBehavior back to smooth for subsequent user scrolls
            $('html').css("scrollBehavior", "smooth");
        });
        // Temporarily set to auto for the animation initiated by jQuery
        $('html').css("scrollBehavior", "auto");
    });

    // Navbar menu links click script
    $('.navbar .menu li a').click(function() {
        // Ensure smooth scroll for navbar links
        $('html').css("scrollBehavior", "smooth");
        // If your links are like <a href="#about">, ensure the default action is not prevented
        // if you want the browser's native smooth scroll, or handle it with animate.
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation script - Ensure Typed.js library is included
    // Consolidate Typed instances; you have duplicates. Choose one set of strings.
    if ($(".typing").length) { // Check if element exists
        var typed = new Typed(".typing", {
            strings: ["Full Stack Developer", "Laravel Expert", "Cloud Specialist", "API Builder", "Cyber Security Aware", "Problem Solver"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    if ($(".typing-2").length) { // Check if element exists
        var typed2 = new Typed(".typing-2", {
            strings: ["Full Stack Developer", "Analytical Thinker", "Cloud Enthusiast", "Performance Optimizer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }


    // Owl carousel script - Ensure Owl Carousel library and CSS are included
    if ($('.carousel').length && typeof $.fn.owlCarousel === 'function') { // Check if element exists and plugin is loaded
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000, // Corrected property name
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                }
            }
        });
    } else if (typeof $.fn.owlCarousel !== 'function') {
        console.error("Owl Carousel plugin is not loaded.");
    }


    // Set current year in footer
    if ($('#currentYear').length) { // Check if element exists
        $('#currentYear').text(new Date().getFullYear());
    }
});