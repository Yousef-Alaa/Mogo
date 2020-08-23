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

/*

<ul id="autoWidth" class="cs-hidden">
<li class="item-a">

*/
$(document).ready(function () {
    'use strict';
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});
