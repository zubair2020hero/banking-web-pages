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


// Hero Money

const currencies = [
    {code:"USD", name:"United States Dollar", flag:"us"},
    {code:"BDT", name:"Bangladeshi Taka", flag:"bd"},
    {code:"INR", name:"Indian Rupee", flag:"in"},
    {code:"EUR", name:"Europe Euro", flag:"eu"}
];

let fromCurrency = "USD";
let toCurrency = "BDT";
let lastInput = "from";

document.querySelectorAll(".za--currency-dropdown").forEach(drop => {
    const list = drop.querySelector(".za--currency-list");

    currencies.forEach(cur => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="https://flagcdn.com/w40/${cur.flag}.png">
            <span>${cur.code}</span>
            <small>${cur.name}</small>
        `;

        li.addEventListener("click", e => {
            e.stopPropagation();

            drop.querySelector("img").src =
                `https://flagcdn.com/w40/${cur.flag}.png`;
            drop.querySelector("span").innerText = cur.code;
            drop.querySelector(".za--currency-name").innerText = cur.name;

            if(drop.dataset.type === "from"){
                fromCurrency = cur.code;
            }else{
                toCurrency = cur.code;
            }

            list.style.display = "none";
        });

        list.appendChild(li);
    });

    drop.addEventListener("click", () => {
        list.style.display = list.style.display === "block" ? "none" : "block";
    });
});

document.getElementById("fromAmount").addEventListener("input", () => {
    lastInput = "from";
});

document.getElementById("toAmount").addEventListener("input", () => {
    lastInput = "to";
});

document.getElementById("convert-btn").addEventListener("click", async () => {
    const fromAmount = document.getElementById("fromAmount");
    const toAmount = document.getElementById("toAmount");

    const res = await fetch(
        `https://open.er-api.com/v6/latest/${fromCurrency}`
    );
    const data = await res.json();
    const rate = data.rates[toCurrency];

    if(lastInput === "from"){
        toAmount.value = (fromAmount.value * rate).toFixed(2);
    }else{
        fromAmount.value = (toAmount.value / rate).toFixed(2);
    }
});