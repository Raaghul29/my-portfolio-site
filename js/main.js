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

function donloadCV() {
    location.href = "https://drive.google.com/file/d/1M2sPKbFCYl9GEz9-83vbkfzGT0fpnEG3/view?usp=sharing";
}
$(document).ready(function () {
    $("#downloadCV").click(function () {
        window.open("https://drive.google.com/file/d/1M2sPKbFCYl9GEz9-83vbkfzGT0fpnEG3/view?usp=sharing", "_blank");
    });
});

$(".nav-item .nav-link").on("click", function () {
    $(".nav-link").find(".active").removeClass("active");
    $(this).addClass("active");
});