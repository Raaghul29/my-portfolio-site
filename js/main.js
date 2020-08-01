const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// jQuery(document).ready(function ($) {
//     var alterClass = function () {
//         var ww = document.body.clientWidth;
//         if (ww > 991) {
//             $('.navbar-collapse').removeClass('show');
//             menuBtn.classList.remove('open');
//             menuOpen = false;
//         }
//     };
//     $(window).resize(function () {
//         alterClass();
//     });
//     //Fire it when the page first loads:
//     alterClass();
// });

$(".nav-item .nav-link").on("click", function () {
    $(".nav-link").find(".active").removeClass("active");
    $(this).addClass("active");
});