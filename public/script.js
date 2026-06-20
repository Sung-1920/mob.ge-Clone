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