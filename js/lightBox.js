
const photoMainButton = document.querySelector('.photo__main-container')
const lightBox = document.querySelector('.lightBox')
const overlay = document.querySelector('.overlay')
const lightBoxExit = document.querySelector('.lightBox__exit')

photoMainButton.addEventListener(
    'click',
    () => {
        lightBox.style.display = 'block'
        overlay.style.display = 'block'

    }
)

lightBoxExit.addEventListener(
    'click',
    ()  => {
        lightBox.style.display = 'none'
        overlay.style.display = 'none'
    }
)

