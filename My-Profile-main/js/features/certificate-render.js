window.onload = function () {

    const slider = document.getElementById("certificate-slider");

    let index = 0;

    // load images
    certificates.forEach(cert => {
        const img = document.createElement("img");
        img.src = cert.image;
        img.alt = cert.title;
        img.className = "w-full flex-shrink-0";

        slider.appendChild(img);
    });

    const slides = slider.children;

    function autoSlide() {
        index++;

        if (index >= slides.length) {
            index = 0;
        }

        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(autoSlide, 3000);
};