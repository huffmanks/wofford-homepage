const imageEls = Array.from(document.querySelectorAll('[data-news-image]'))
let images = imageEls.map((img) => img.src)
const prevButton = document.querySelector('.prev .arrow')
const nextButton = document.querySelector('.next .arrow')

function loadImages() {
    imageEls.map((img, i) => {
        img.src = images[i]
    })
}

function prevImage() {
    const [prev, main, next] = images
    images = [next, prev, main]

    loadImages()
}

function nextImage() {
    const [prev, main, next] = images
    images = [next, prev, main]

    loadImages()
}

prevButton.addEventListener('click', prevImage)
nextButton.addEventListener('click', nextImage)
