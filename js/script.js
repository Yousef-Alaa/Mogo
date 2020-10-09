/*global document, window, setTimeout, localStorage*/

var i, x,
    
    snake = document.getElementById("snake"),
    
    menuHidden = document.getElementById('menu-hid'),
    
    menuShow = document.getElementById('menu-show'),
    
    settingDiv = document.getElementById("setting-div"),
    
    settingBtn1 = document.getElementById("setting-btn-1"),
    
    settingBtn2 = document.getElementById("setting-btn-2"),
    
    darkMode = document.getElementById("dark"),
    
    themeConatainer = document.getElementById('ptc'),
    
    themeButtons = document.getElementsByClassName('theme-buttons'),
    
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

// Auto Open Dark Mode With Local Storage
if (localStorage.getItem("darkMode") === 'dark-mode-on') {
    document.body.classList.add('dark-mode');
    darkMode.checked = true;
}

// Manual Open Dark Mode
darkMode.onclick = function () {
    
    'use strict';
    
    if (this.checked === true) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", 'dark-mode-on');
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", 'dark-mode-off');
    }
};

// To Top Button Function
window.onscroll = function () {
    'use strict';
    
    if (window.pageYOffset >= 600) {
        topButton.style.bottom = "25px";
    } else {
        topButton.style.bottom = "-50px";
    }
};

// Change Theme Color
themeConatainer.classList.add(localStorage.getItem("pageTheme") || 'theme-defualt');

var themeFun = function () {
    'use strict';
    themeConatainer.className = "";
    themeConatainer.classList.add(this.getAttribute('data-color'));
    localStorage.setItem("pageTheme", this.getAttribute('data-color'));
};

for (x = 0; x < themeButtons.length; x = x + 1) {
    themeButtons[x].onclick = themeFun;
}

// Slider Show
var sliderShowFun = function () {
        'use strict';
        document.getElementsByClassName('slider-container')[0].style.display = 'block';
    };

for (i = 0; i < sliderShow.length; i = i + 1) {
    sliderShow[i].onclick = sliderShowFun;
}

// Slider Hidden By Button
sliderHid.onclick = function () {
    'use strict';
    document.getElementsByClassName('slider-container')[0].style.display = 'none';
};

var WOW = new WOW().init();