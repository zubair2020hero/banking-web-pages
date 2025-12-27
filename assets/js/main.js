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

// Header sticky
window.addEventListener("scroll", function () {
    let scroll = window.scrollY;
    let header = document.getElementById("za-header-sticky");

    if (scroll < 100) {
        header.classList.remove("header-sticky");
    } else {
        header.classList.add("header-sticky");
    }
});

// Header Mobile Menu

/** // let mobileMenu = document.querySelector('.za-mobile-menu-active > ul');
// let zaMenuHTML = mobileMenu ? mobileMenu.cloneNode(true) : null;

// let zaOffcanvasMenu = document.querySelector('.za-offcanvas-menu > nav');

// if (zaMenuHTML && zaOffcanvasMenu) {
//     zaOffcanvasMenu.appendChild(zaMenuHTML);
// }

// if (zaOffcanvasMenu && zaOffcanvasMenu.querySelectorAll('.za-sub-menu').length !== 0) {
//     zaOffcanvasMenu.querySelectorAll('.za-sub-menu').forEach(function (subMenu) {
//         let parent = subMenu.parentElement;
//         let aTag = parent.querySelector('a');

//         if(aTag) {
//              aTag.insertAdjacentHTML(
//                 'afterend',
//                 '<i class="fa-solid fa-chevron-right"></i>'
//             );
//         }
//     });
// }

// let zaSideMenuToggle = document.querySelectorAll('i.fa-chevron-right');

// zaSideMenuToggle.forEach(function(icon){
//     icon.addEventListener('click', function(){
//         let subMenu = this.parentElement.querySelector('.za-sub-menu');

//         if (subMenu){
//             if (subMenu.style.display === 'block'){
//                 subMenu.style.display = 'none';
//             } else {
//                 subMenu.style.display = 'block';
//             }
//         }

//         this.parentElement.classList.toggle('active');
//     });
// }); **/
// --
// উপরের আমি Chat GPT থেকে বুঝে বুঝে নিজে করা চেষ্টা করছিলাম কিন্তু কাজ করছে না পরে আবার Chat GPT কে পুরো কোড লিখে দিলাম সে ভূল ধরিয়ে ঠি করে দিল।

// Clone mobile menu
const mobileMenu = document.querySelector('.za-mobile-menu-active > ul');
const zaOffcanvasMenu = document.querySelector('.za-offcanvas-menu > nav');

if (mobileMenu && zaOffcanvasMenu) {
    zaOffcanvasMenu.appendChild(mobileMenu.cloneNode(true));
}

// Add toggle icon only where submenu exists
if (zaOffcanvasMenu) {
    zaOffcanvasMenu.querySelectorAll('.za-sub-menu').forEach(subMenu => {
        const parentLi = subMenu.parentElement;
        const link = parentLi.querySelector(':scope > a');

        if (link && !parentLi.querySelector(':scope > i.fa-chevron-right')) {
            link.insertAdjacentHTML(
                'afterend',
                '<i class="fa-solid fa-chevron-right za-submenu-toggle"></i>'
            );
        }
    });

    // Event Delegation for submenu toggle
    zaOffcanvasMenu.addEventListener('click', function (e) {
        if (e.target.classList.contains('za-submenu-toggle')) {
            const parentLi = e.target.parentElement;
            const subMenu = parentLi.querySelector(':scope > .za-sub-menu');

            if (subMenu) {
                subMenu.classList.toggle('open');
                parentLi.classList.toggle('active');
            }
        }
    });
}
//------ Mobile End 

// offcanvas
document.querySelectorAll('.za-header-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
        document.querySelector('.za-offcanvas') ?.classList.add('za-offcanvas-open');
        document.querySelector('.za-offcanvas-overlay') ?.classList.add(
            'za-offcanvas-overlay-open');
    });
});

document.querySelectorAll('.za-offcanvas-close-button, .za-offcanvas-overlay').forEach(function (btn) {
    btn.addEventListener('click', function () {
        document.querySelector('.za-offcanvas') ?.classList.remove('za-offcanvas-open');
        document.querySelector('.za-offcanvas-overlay') ?.classList.remove(
            'za-offcanvas-overlay-open');
    });
});