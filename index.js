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
