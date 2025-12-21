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