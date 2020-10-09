/*global $, document*/


// Fit Heading For Responsive Heading
$(function () {
    
    'use strict';
    
    $('.fit-head-1').fitText(1.1, {
        
        maxFontSize: "35px"
        
    });
});

$(function () {
    
    'use strict';
    
    $('.fit-head-2').fitText(1.1, {
        
        maxFontSize: "80px"
        
    });
});


// Smooth Scroll
$(function () {
    'use strict';
    
    $('.smooth-scroll').smoothScroll();
    
});

// Images Slider
$(document).ready(function () {
    'use strict';
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    
    $("#my-accordion").accordionjs();
});
