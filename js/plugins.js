$(document).ready(function () {

    $('.fit-head-1').fitText(1.1, {maxFontSize: "35px"});
    $('.fit-head-2').fitText(1.1, {maxFontSize: "80px"});
    $('.smooth-scroll').smoothScroll();
    $("#my-accordion").accordionjs();

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
    
    
});
