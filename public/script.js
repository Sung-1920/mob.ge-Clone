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
const samsungPhones = [
    ["Samsung Galaxy Z Fold Wide", "SM-F956", "7.6 inches", "200 MP", "4400 mAh"],
    ["Samsung Galaxy A27", "SM-A276", "6.7 inches", "50 MP", "5000 mAh"],
    ["Samsung Galaxy M17e", "SM-M076", "6.6 inches", "50 MP", "5000 mAh"],
    ["Samsung Galaxy F70e", "SM-E076", "6.7 inches", "64 MP", "6000 mAh"],
    ["Samsung Galaxy S26+", "SM-S947"],
    ["Samsung Galaxy S26", "SM-S942"],
    ["Samsung Galaxy A07", "SM-A075"],
    ["Samsung Galaxy A57", "SM-A576"],
    ["Samsung Galaxy A37", "SM-A376"],
    ["Samsung Galaxy S26 Ultra", "SM-S948"],
    ["Samsung Galaxy M17", "SM-M176"],
    ["Samsung Galaxy Z TriFold", "SM-D639"],
    ["Samsung Galaxy F07", "SM-E075"],
    ["Samsung Galaxy A17 4G", "SM-A175"],
    ["Samsung Galaxy F17", "SM-E176"],
    ["Samsung Galaxy M07", "SM-M075"],
    ["Samsung Galaxy A07 4G", "SM-A075F"],
    ["Samsung Galaxy Tab S10 Lite", "SM-X400"],
    ["Samsung Galaxy Tab S11", "SM-X730"],
    ["Samsung Galaxy Tab S11 Ultra", "SM-X930"],
];

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

const samsungList = document.querySelector("#samsung-list");

if (samsungList) {
    samsungList.innerHTML = samsungPhones.map(phone => `
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

const phoneDetail = document.querySelector("#phone-detail");

if (phoneDetail) {
    const phone = samsungPhones[0];
    const specs = [
        ["ტექნიკური მახასიათებლები", ""],
        ["გამოშვება", ""],
        ["სტატუსი:", "სავარაუდო მონაცემები"],
        ["ქსელი", ""],
        ["SIM ტიპი:", "eSIM"],
        ["ინტერნეტი სიჩქარე:", "HSPA, LTE, 5G"],
        ["2G:", "GSM 850 / 900 / 1800 / 1900"],
        ["3G:", "HSDPA 850 / 900 / 1900 / 2100"],
        ["4G:", "LTE"],
        ["5G:", "SA/NSA/Sub6"],
        ["ეკრანი", ""],
        ["ტიპი:", "Foldable LTPO OLED, 120Hz, HDR10+"],
        ["ზომა:", phone[2]],
        ["რეზოლუცია:", "1920 x 2713 pixels"],
        ["კამერა", ""],
        ["მთავარი კამერა:", phone[3] + ", wide, ultrawide"],
        ["მთავარი კამერის ვიდეო:", "4K@24/30/60fps, 1080p"],
        ["წინა კამერა:", "10 MP"],
        ["პროცესორი", ""],
        ["ჩიპსეტი:", "3 nm"],
        ["მეხსიერება", ""],
        ["შიდა მეხსიერება:", "256GB 12GB RAM, 512GB 12GB RAM"],
        ["მეხსიერების ბარათი:", "No"],
        ["ოპერაციული სისტემა", ""],
        ["OS:", "Android"],
        ["კომუნიკაცია", ""],
        ["Wi-Fi:", "Wi-Fi 802.11 a/b/g/n/ac/6/7"],
        ["Bluetooth:", "5.3"],
        ["NFC:", "კი"],
        ["რადიო:", "No"],
        ["ხმა", ""],
        ["3.5მმ პორტი:", "No"],
        ["დამატებითი ფუნქციები", ""],
        ["სენსორები:", "თითის ანაბეჭდი, accelerometer, gyro, proximity"],
        ["ბატარეა:", phone[4]],
    ];

    phoneDetail.innerHTML = `
        <h2>${phone[0]}</h2>
        <img src="/public/samsung-galaxy-z-fold-8-wide-r.jpg" alt="${phone[0]}">
        <table>
            ${specs.map(row => row[1] ? `
                <tr>
                    <th>${row[0]}</th>
                    <td>${row[1]}</td>
                </tr>
            ` : `
                <tr>
                    <td colspan="2">${row[0]}</td>
                </tr>
            `).join("")}
        </table>
        <a href="/samsung.html">Samsung გვერდზე დაბრუნება</a>
    `;
}

const registerForm = document.querySelector("#register-form");

function isEnglishLetter(char) {
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function isNumber(char) {
    const code = char.charCodeAt(0);
    return code >= 48 && code <= 57;
}

function emailIsValid(value) {
    const at = value.indexOf("@");
    const dot = value.indexOf(".", at + 1);
    return at > 0 && dot > at + 1 && value.length - dot > 2;
}

function phoneIsValid(value) {
    let start = value[0] === "+" ? 1 : 0;
    let digits = 0;

    for (let i = start; i < value.length; i++) {
        if (!isNumber(value[i])) return false;
        digits++;
    }

    return digits >= 9 && digits <= 15;
}

function passwordStrength(value) {
    let hasLower = false;
    let hasUpper = false;
    let hasNumber = false;

    for (let char of value) {
        if (isNumber(char)) hasNumber = true;
        else if (isEnglishLetter(char)) {
            if (char === char.toUpperCase()) hasUpper = true;
            if (char === char.toLowerCase()) hasLower = true;
        } else {
            return "პაროლი უნდა შეიცავდეს მხოლოდ ინგლისურ ასოებს და რიცხვებს";
        }
    }

    if ((hasLower || hasUpper) && hasNumber && hasLower && hasUpper) return "ძლიერი სიმძლავრის პაროლი";
    if ((hasLower || hasUpper) && hasNumber) return "საშუალო სიმძლავრის პაროლი";
    if (hasLower || hasUpper) return "სუსტი სიმძლავრის პაროლი";

    return "პაროლი უნდა შეიცავდეს ინგლისურ ასოებს";
}

if (registerForm) {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");
    const message = document.querySelector("#register-message");
    const strength = document.querySelector("#password-strength");

    password.oninput = () => {
        strength.textContent = password.value ? passwordStrength(password.value) : "";
    };

    registerForm.onsubmit = event => {
        event.preventDefault();

        const errors = [];
        const date = document.querySelector("#register-date").value;
        const phone = document.querySelector("#phone").value.trim();

        registerForm.querySelectorAll("input").forEach(input => {
            if (!input.value.trim()) errors.push("ყველა ველი აუცილებელია.");
        });

        if (!emailIsValid(email.value)) errors.push("ელ. ფოსტა უნდა შეიცავდეს @ სიმბოლოს და მის შემდეგ წერტილს მინიმუმ 2 სიმბოლოთი.");
        if (password.value.length < 6) errors.push("პაროლი მინიმუმ 6 სიმბოლო უნდა იყოს.");
        if (password.value !== confirmPassword.value) errors.push("პაროლები არ ემთხვევა.");
        if (date && new Date(date) > new Date()) errors.push("რეგისტრაციის თარიღი არ უნდა იყოს მომავალი.");
        if (phone && !phoneIsValid(phone)) errors.push("მობილურის ნომერი უნდა შეიცავდეს 9-15 ციფრს.");
        if (password.value && passwordStrength(password.value).startsWith("პაროლი")) errors.push(passwordStrength(password.value));

        message.textContent = errors.length ? errors[0] : "რეგისტრაცია წარმატებულია.";
        message.style.color = errors.length ? "#d0021b" : "#009345";
    };
}

const loginForm = document.querySelector("#login-form");

if (loginForm) {
    const loginEmail = document.querySelector("#login-email");
    const loginPassword = document.querySelector("#login-password");
    const loginMessage = document.querySelector("#login-message");

    loginForm.onsubmit = event => {
        event.preventDefault();

        if (!loginEmail.value.trim() || !loginPassword.value.trim()) {
            loginMessage.textContent = "ყველა ველი აუცილებელია.";
            loginMessage.style.color = "#d0021b";
            return;
        }

        if (!emailIsValid(loginEmail.value)) {
            loginMessage.textContent = "ელ. ფოსტა არასწორია.";
            loginMessage.style.color = "#d0021b";
            return;
        }

        loginMessage.textContent = "შესვლა წარმატებულია.";
        loginMessage.style.color = "#009345";
    };
}