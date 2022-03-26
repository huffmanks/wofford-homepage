const videoEl = document.querySelector('video.home-media-item')

// Modal
const modalEls = Array.from(document.querySelectorAll('[data-modal]'))
const openModalBtns = Array.from(document.querySelectorAll('[data-modal-open]'))
const closeModalBtns = Array.from(document.querySelectorAll('[data-modal-close]'))

// Tab
const tabContainers = Array.from(document.querySelectorAll('[data-tab]'))

// Search input
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

    if (screenSize > 860) {
        homeMobileToggleMenu.classList.remove('open')
        homeNavMenu.classList.remove('show')
    }
}

window.addEventListener('load', getScreenSize)
window.addEventListener('resize', getScreenSize)

// Modal
openModalBtns.map((button) => {
    button.addEventListener('click', () => {
        if (button.nextElementSibling.matches('[data-modal]')) {
            document.body.classList.add('modal-open')
            button.nextElementSibling.classList.toggle('open')

            if (videoEl) {
                videoEl.pause()
            }
        }
    })
})

closeModalBtns.map((button) => {
    button.addEventListener('click', () => {
        document.body.classList.remove('modal-open')
        button.closest('[data-modal]').classList.remove('open')

        if (videoEl) {
            videoEl.play()
        }
    })
})

modalEls.map((modal) => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.classList.remove('modal-open')
            modal.classList.remove('open')

            if (videoEl) {
                videoEl.play()
            }
        }
    })
})

// Tab
tabContainers.map((tabs) => {
    const tabBtns = Array.from(tabs.querySelectorAll('[data-tab-button]'))
    const tabEls = Array.from(tabs.querySelectorAll('[data-tab-content]'))

    document.addEventListener('DOMContentLoaded', () => {
        tabBtnActive = tabs.querySelector('[data-tab-button="1"]')
        tabContentActive = tabs.querySelector('[data-tab-content="1"]')

        tabBtnActive.classList.add('active')
        tabContentActive.classList.add('show')
    })

    tabBtns.map((button) => {
        button.addEventListener('click', () => {
            const tabNumber = button.dataset.tabButton
            const tabContent = tabs.querySelector(`[data-tab-content="${tabNumber}"]`)

            const prevActiveBtn = tabBtns.filter((btn) => {
                return btn.classList.contains('active')
            })

            if (prevActiveBtn.length > 0 && prevActiveBtn[0] !== button) {
                prevActiveBtn[0].classList.remove('active')
            }

            const prevActiveTab = tabEls.filter((tab) => {
                return tab.classList.contains('show')
            })

            if (prevActiveTab.length > 0) {
                prevActiveTab[0].classList.remove('show')
            }

            button.classList.add('active')
            tabContent.classList.add('show')
        })
    })
})

// Search input
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
    item.addEventListener('click', () => {
        const prevActiveItem = homeNavItems.filter((i) => {
            return i.classList.contains('active')
        })

        if (prevActiveItem.length > 0 && prevActiveItem[0] !== item) {
            prevActiveItem[0].classList.remove('active')
            prevActiveItem[0].querySelector('[data-modal]').classList.remove('open')
        }

        item.classList.toggle('active')

        console.log(item.offsetTop)

        const offsetScroll = item.classList.contains('active') ? item.offsetTop - 20 : item.offsetTop

        homeNavMenu.scrollTo({ top: item.offsetTop - 30, behavior: 'smooth' })
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
