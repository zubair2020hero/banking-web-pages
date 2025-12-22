// Header Button
document.querySelectorAll('.za-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.za-btn.active').forEach(function (activeBtn) {
            activeBtn.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Header Menu
document.querySelectorAll('.za-menu').forEach(function (btn) {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.za-menu.active').forEach(function (activeBtn) {
            activeBtn.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// header sticky
window.addEventListener("scroll", function () {
    let scroll = window.scrollY;
    let header = document.getElementById("za-header-sticky");

    if (scroll < 100) {
        header.classList.remove("header-sticky");
    } else {
        header.classList.add("header-sticky");
    }
});