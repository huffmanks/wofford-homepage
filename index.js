const imageEls = Array.from(document.querySelectorAll('[data-news-image]'))
let images = imageEls.map((img) => img.src)
const prevButton = document.querySelector('.prev .arrow')
const nextButton = document.querySelector('.next .arrow')

function loadImages() {
    imageEls.forEach((img, i) => {
        // console.log('beg', i)
        img.src = images[i]
        // const test = setTimeout((img.src = images[i]), 5000)
        // console.log('inbet', i)
        // setTimeout(test, 5000)
        // console.log('end', i)
        // clearInterval(test)
    })
    // imageEls.map((img, i) => {
    //     console.log('beg')
    //     img.src = images[i]
    //     const test = setInterval((img.src = images[i]), [3000])
    //     console.log('end')
    //     clearInterval(test)
    // })
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

const mainImage = document.querySelector('#mainImage')

const observer = new MutationObserver((changes) => {
    changes.forEach((change) => {
        if (change.attributeName.includes('src')) {
            let s = mainImage.style
            s.opacity = 0
            ;(function fade() {
                ;(s.opacity -= 0.1) >= 1 ? (s.opacity = 1) : setTimeout(fade, 40)
            })()
        }
    })
})

observer.observe(mainImage, { attributes: true })
