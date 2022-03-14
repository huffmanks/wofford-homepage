// News story images
const imageEls = Array.from(document.querySelectorAll('[data-news-image]'))
const prevButton = document.querySelector('.prev-arrow')
const nextButton = document.querySelector('.next-arrow')
let images = imageEls.map((img) => img.src)

function loadImages() {
    imageEls.forEach((img, i) => {
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

// Search modal
const homeNavSearchBtn = document.querySelector('#home-nav-search')
const searchModal = document.querySelector('#search-modal')
const closeModalBtn = document.querySelector('#close-modal')
const searchInput = document.querySelector('#search-input')
const searchIconClearBtn = document.querySelector('#search-icon-clear')

homeNavSearchBtn.addEventListener('click', () => {
    searchModal.classList.add('open')
})

closeModalBtn.addEventListener('click', () => {
    searchModal.classList.remove('open')
})

searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.classList.remove('open')
    }
})

searchIconClearBtn.addEventListener('click', () => {
    searchInput.value = ''
})
