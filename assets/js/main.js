// Header Button
document.querySelectorAll('.za-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.za-btn.active').forEach(function (activeBtn) {
            activeBtn.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Header sticky
window.addEventListener("scroll", function () {
    let scroll = window.scrollY;
    let header = document.getElementById("za-header-sticky");

    if (scroll < 100) {
        header.classList.remove("za-header-sticky");
    } else {
        header.classList.add("za-header-sticky");
    }
});

// Header Mobile Menu 
let mobileMenu = document.querySelector('.za-mobile-menu-active > ul');
let zaMenuHTML = mobileMenu ? mobileMenu.cloneNode(true) : null;

let zaOffcanvasMenu = document.querySelector('.za-offcanvas-menu > nav');

if (zaMenuHTML && zaOffcanvasMenu) {
    zaOffcanvasMenu.appendChild(zaMenuHTML);
}

if (zaOffcanvasMenu && zaOffcanvasMenu.querySelectorAll('.za-sub-menu').length !== 0) {
    zaOffcanvasMenu.querySelectorAll('.za-sub-menu').forEach(function (subMenu) {
        let parent = subMenu.parentElement;

        let button = document.createElement('button');
        button.className = 'za-mobileMenu-close';
        button.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

        parent.appendChild(button);
    });
}

let zaSideMenuToggle = document.querySelectorAll('button.za-mobileMenu-close');

zaSideMenuToggle.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let subMenu = this.parentElement.querySelector('.za-sub-menu');

        if (subMenu) {
            if (subMenu.style.display === 'block') {
                subMenu.style.display = 'none';
            } else {
                subMenu.style.display = 'block';
            }
        }

        this.parentElement.classList.toggle('active');
    });
});

// offcanvas
document.querySelectorAll('.za-header-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
        document.querySelector('.za-offcanvas') ?.classList.add('open');
        document.querySelector('.za-offcanvas-overlay') ?.classList.add(
            'za-offcanvas-overlay-open');
    });
});

document.querySelectorAll('.za-offcanvas-close-button, .za-offcanvas-overlay').forEach(function (btn) {
    btn.addEventListener('click', function () {
        document.querySelector('.za-offcanvas') ?.classList.remove('open');
        document.querySelector('.za-offcanvas-overlay') ?.classList.remove(
            'za-offcanvas-overlay-open');
    });
});