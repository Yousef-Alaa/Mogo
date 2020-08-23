/*global document, window, setTimeout*/

var i,

    snake = document.getElementById("snake"),
    
    menuHidden = document.getElementById('menu-hid'),
    
    menuShow = document.getElementById('menu-show'),
    
    settingDiv = document.getElementById("setting-div"),
    
    settingBtn1 = document.getElementById("setting-btn-1"),
    
    settingBtn2 = document.getElementById("setting-btn-2"),
    
    darkMode = document.getElementById("dark"),
    
    themeConatainer = document.getElementById('ptc'),
    
    themeBtnDef = document.getElementById('theme-defualt'),
    
    themeBtnBlue = document.getElementById('theme-blue'),
    
    themeBtnPink = document.getElementById('theme-pink'),
    
    themeBtnYellow = document.getElementById('theme-yellow'),
    
    sliderShow = document.getElementsByClassName('gallery-img'),
    
    sliderHid = document.getElementById('x-btn'),
    
    topButton = document.getElementById("top-button");

/* Loading Function */
function load() {
    
    'use strict';
    
    snake.style.display = "none";
}

window.onload = setTimeout(load, 4000);

/* Responsive Menu Function */
menuShow.onclick = function () {
    'use strict';
    document.querySelectorAll('ul')[0].style.right = "0";
};

menuHidden.onclick = function () {
    'use strict';
    document.querySelectorAll('ul')[0].style.right = "-100%";
};

/* Show Setting Bar */
settingBtn1.onclick = function () {
    
    'use strict';
    
    settingBtn2.style.left = "200px";
    
    settingDiv.style.left = "0";
    
};

/* Hidden Setting Bar */
settingBtn2.onclick = function () {
    
    'use strict';
        
    settingBtn2.style.left = "0";
    settingDiv.style.left = "-200px";
};

/* On/Off Dark Mode */
darkMode.onclick = function () {
    
    'use strict';
    
    document.body.classList.toggle("dark-mode");
};

/* To Top Button Function */
window.onscroll = function () {
    'use strict';
    
    if (window.pageYOffset >= 600) {
        topButton.style.bottom = "25px";
    } else {
        topButton.style.bottom = "-50px";
    }
};

/* Change Theme Color */
themeBtnDef.onclick = function () {
    'use strict';
    
    themeConatainer.classList.remove('theme-blue', 'theme-pink', 'theme-yellow');
};

themeBtnBlue.onclick = function () {
    'use strict';
    
    themeConatainer.classList.remove('theme-pink', 'theme-yellow');
    themeConatainer.classList.add('theme-blue');
};

themeBtnPink.onclick = function () {
    'use strict';
    
    themeConatainer.classList.remove('theme-blue', 'theme-yellow');
    themeConatainer.classList.add('theme-pink');
};

themeBtnYellow.onclick = function () {
    'use strict';
    
    themeConatainer.classList.remove('theme-blue', 'theme-pink');
    themeConatainer.classList.add('theme-yellow');
};

// Slider Show
var sliderShowFun = function () {
        'use strict';
        document.getElementsByClassName('slider')[0].style.display = 'block';
    };

for (i = 0; i < sliderShow.length; i = i + 1) {
    sliderShow[i].onclick = sliderShowFun;
}

//  Slider Hidden On Load (To Fix Slider Errors)

var autoHidSlider = function () {
    'use strict';
    document.getElementsByClassName('slider')[0].style.display = 'none';
};

setTimeout(autoHidSlider, 3000);


// Slider Hidden By Button

sliderHid.onclick = function () {
    'use strict';
    document.getElementsByClassName('slider')[0].style.display = 'none';
};