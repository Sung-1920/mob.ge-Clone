const slides = document.querySelectorAll("#slider img");
const dots = document.querySelectorAll("#dots button");
let slide = 0;

if (slides.length) {
    function showSlide(index) {
        slides[slide].hidden = true;
        dots[slide].disabled = false;
        slide = (index + slides.length) % slides.length;
        slides[slide].hidden = false;
        dots[slide].disabled = true;
    }

    document.querySelector("#prev").onclick = () => showSlide(slide - 1);
    document.querySelector("#next").onclick = () => showSlide(slide + 1);
    dots.forEach((dot, index) => dot.onclick = () => showSlide(index));
}

const phones = [
    ["Apple iPhone Ultra", "A2890"],
    ["Apple iPhone 18 Pro Max", "A3464"],
    ["Apple iPad Air 13", "iPad16,10"],
    ["Apple iPad Air 11", "iPad16,8"],
    ["Samsung Galaxy Z Fold Wide", "SM-F956"],
    ["Samsung Galaxy A27", "SM-A276"],
    ["Samsung Galaxy M17e", "SM-M076"],
    ["Samsung Galaxy F70e", "SM-E076"],
    ["Honor X80 Pro Max", "LNA-NX3"],
    ["Honor 600e", "LAB-LX1"],
    ["Huawei nova 15 Ultra", "SLY-AL00"],
    ["Xiaomi Redmi K100 Pro", "25128PC17G"],
];

const phoneGrid = document.querySelector("#phones");

if (phoneGrid) {
    phoneGrid.innerHTML = phones.map(phone => `
        <div>
            <a href="/samsung_details.html">
                <img src="/public/samsung-galaxy-z-fold-8-wide-r.jpg" alt="${phone[0]}">
                <p>${phone[0]}</p>
                <span>${phone[1]}</span>
            </a>
            <button>შეადარე</button>
        </div>
    `).join("");
}