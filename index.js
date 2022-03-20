// Window size
let screenSize

const getScreenSize = () => {
    screenSize = window.innerWidth

    if (screenSize > 861) {
        homeMobileToggleMenu.classList.remove('open')
        homeNavMenu.classList.remove('show')
    }
}

window.addEventListener('load', getScreenSize)
window.addEventListener('resize', getScreenSize)

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

// Mobile menu
const homeMobileToggleMenu = document.querySelector('#home-mobile-toggle-menu')
const homeNavMenu = document.querySelector('#home-nav-menu')
const homeNavItems = Array.from(document.querySelectorAll('.home-nav-item'))

homeMobileToggleMenu.addEventListener('click', () => {
    homeMobileToggleMenu.classList.toggle('open')
    homeNavMenu.classList.toggle('show')
})

homeNavItems.map((item) => {
    item.addEventListener('click', (e) => {
        if (screenSize < 861) {
            e.preventDefault()
        }

        const prevActive = homeNavItems.filter((i) => {
            return i.classList.contains('active')
        })

        if (prevActive.length > 0 && prevActive[0] !== item) {
            prevActive[0].classList.remove('active')
        }

        item.classList.toggle('active')
    })
})

// News story images
const newsStoriesContainer = document.querySelector('.news-stories')
const newsStories = Array.from(document.querySelectorAll('.news-story'))
const prevButton = document.querySelector('.prev-arrow')
const nextButton = document.querySelector('.next-arrow')

let story = newsStories.map((story) => story)

function prevStory() {
    const [prev, main, next] = story
    story = [next, prev, main]

    newsStoriesContainer.insertAdjacentElement('afterbegin', main)
    newsStoriesContainer.insertAdjacentElement('afterbegin', prev)
    newsStoriesContainer.insertAdjacentElement('afterbegin', next)

    next.classList.add('prev')
    next.classList.remove('next')

    prev.classList.add('current')
    prev.classList.remove('prev')

    main.classList.add('next')
    main.classList.remove('current')
}

function nextStory() {
    const [prev, main, next] = story
    story = [main, next, prev]

    newsStoriesContainer.insertAdjacentElement('afterbegin', prev)
    newsStoriesContainer.insertAdjacentElement('afterbegin', next)
    newsStoriesContainer.insertAdjacentElement('afterbegin', main)

    next.classList.add('current')
    next.classList.remove('next')

    prev.classList.add('next')
    prev.classList.remove('prev')

    main.classList.add('prev')
    main.classList.remove('current')
}

prevButton.addEventListener('click', prevStory)
nextButton.addEventListener('click', nextStory)
