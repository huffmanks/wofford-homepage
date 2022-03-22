// Modal
const modalEls = Array.from(document.querySelectorAll('[data-modal]'))
const closeModalBtns = Array.from(document.querySelectorAll('[data-close-modal]'))

// Search modal
const homeNavSearchBtn = document.querySelector('#home-nav-search')
const searchModal = document.querySelector('#search-modal')
const searchInput = document.querySelector('#search-input')
const searchIconClearBtn = document.querySelector('#search-icon-clear')

// Mobile menu
const homeMobileToggleMenu = document.querySelector('#home-mobile-toggle-menu')
const homeNavMenu = document.querySelector('#home-nav-menu')
const homeNavItems = Array.from(document.querySelectorAll('.home-nav-item'))

// News story images
const newsStoriesContainer = document.querySelector('.news-stories')
const newsStories = Array.from(document.querySelectorAll('.news-story'))
const prevButton = document.querySelector('.prev-arrow')
const nextButton = document.querySelector('.next-arrow')

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

// Modal
closeModalBtns.map((button) => {
    button.addEventListener('click', () => {
        document.body.classList.remove('modal-open')
        button.closest('.home-modal').classList.remove('open')
    })
})

modalEls.map((modal) => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.classList.remove('modal-open')
            modal.classList.remove('open')
        }
    })
})

// Search modal
homeNavSearchBtn.addEventListener('click', () => {
    document.body.classList.add('modal-open')
    searchModal.classList.add('open')
})

searchIconClearBtn.addEventListener('click', () => {
    searchInput.value = ''
})

// Mobile menu
homeMobileToggleMenu.addEventListener('click', () => {
    document.body.classList.toggle('modal-open')
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
let story = newsStories.map((story) => story)

const prevStory = () => {
    const [prev, main, next] = story
    story = [next, prev, main]

    newsStoriesContainer.append(...story)

    next.classList.replace('next', 'prev')
    prev.classList.replace('prev', 'current')
    main.classList.replace('current', 'next')
}

const nextStory = () => {
    const [prev, main, next] = story
    story = [main, next, prev]

    newsStoriesContainer.append(...story)

    next.classList.replace('next', 'current')
    prev.classList.replace('prev', 'next')
    main.classList.replace('current', 'prev')
}

prevButton.addEventListener('click', prevStory)
nextButton.addEventListener('click', nextStory)
