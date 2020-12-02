let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let backdrop = document.querySelector(".backdrop");

// Mobile Nav //
backdrop.addEventListener("click", function() {
    mobileNav.style.display = 'none';
    closeNav();
});

function closeNav() {
    backdrop.style.display = "none";
    mobileNav.style.display = "none";
}

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});


//Lightbox //
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})