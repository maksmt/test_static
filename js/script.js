let unlock = true;
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
    let menuBody = document.querySelector(".main__menu");
    iconMenu.addEventListener("click", function (e) {
        if (unlock) {
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
        }
    });
};
function menu_close() {
    let iconMenu = document.querySelector(".icon-menu");
    let menuBody = document.querySelector(".main__menu");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
}


let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for (i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
} else {
    body.classList.add('mouse');
}
$('.sellers').click(function () {
    document.querySelector('.sellers__click').classList.add('show');
    document.querySelector('.sellers').classList.add('hide');
    document.querySelector('.buyers').classList.remove('hide');
    document.querySelector('.renters').classList.remove('hide');
    document.querySelector('.buyers__click').classList.add('hide');
    document.querySelector('.renters__click').classList.add('hide');


});
$('.buyers').click(function () {
    document.querySelector('.buyers__click').classList.add('show');
    document.querySelector('.buyers').classList.toggle('hide');
    document.querySelector('.renters').classList.remove('hide');
    document.querySelector('.sellers').classList.remove('hide');
    document.querySelector('.renters__click').classList.add('hide');

});
$('.renters').click(function () {
    document.querySelector('.renters__click').classList.add('show');
    document.querySelector('.renters').classList.add('hide');
    document.querySelector('.sellers').classList.remove('hide');
    document.querySelector('.buyers').classList.remove('hide');

});


$(document).ready(function () {
    $('.agents__slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
            }
        }],

        slidesToShow: 4,
    });
});

$(document).ready(function () {
    $('.article__slider').slick({
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,

        responsive: [{
            breakpoint: 1440,
            settings: {
                slidesToShow: 1,
                fade: true
            }
        }
        ]
    });
});
$(".open-popup").click(function (event) {
    event.preventDefault();
    $(".popup-bg").fadeIn(600);
    $("html").addClass("no-scroll");
});
$(".close-popup").click(function () {
    $(".popup-bg").fadeOut(600);
    $("html").removeClass("no-scroll");
});

