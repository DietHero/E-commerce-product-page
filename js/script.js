const cartIcon = document.querySelector('.user__cart-container')
const cart = document.querySelector('.cart')
const buttonPlus = document.querySelector('.amount__button-plus')
const buttonMinus = document.querySelector('.amount__button-minus')
const amountContainer = document.querySelector('.amount__number')
const finalPrice = document.querySelector('.card__price-final')
const amountContainerCard = document.querySelector('.card__price-amount')
const addToCart = document.querySelector('.add__button')
const emptyCard = document.querySelector('.cart__empty')
const itemInCard = document.querySelector('.cart__item')
const buttonDelete = document.querySelector('.card__item-delete')
const thumbnailContainer1 = document.querySelector('.thumbnail__container-1')
const thumbnailContainer2 = document.querySelector('.thumbnail__container-2')
const thumbnailContainer3 = document.querySelector('.thumbnail__container-3')
const thumbnailContainer4 = document.querySelector('.thumbnail__container-4')
const thumbnail1 = document.querySelector('.thumbnail-1')
const thumbnail2 = document.querySelector('.thumbnail-2')
const thumbnail3 = document.querySelector('.thumbnail-3')
const thumbnail4 = document.querySelector('.thumbnail-4')
const photoMain = document.querySelector('.photo__main')

let amount = 0

const countFinalPrice = function () {
    let result = 125 * amount
    finalPrice.innerHTML = '$' + result
}

cartIcon.addEventListener(
    'click',
    () => {
        if (cart.style.display == 'none') {
            cart.style.display = 'block'
        } else {
            cart.style.display = 'none'

        }
    })

buttonPlus.addEventListener(
    'click',
    () => {
        let newAmount = amount + 1
        amount = newAmount
        amountContainer.innerText = amount
        amountContainerCard.innerText = amount

        if (amount === 0) {
            addToCart.disabled = true
        } else {
            addToCart.disabled = false
            countFinalPrice()
        }
    }
)

buttonMinus.addEventListener(
    'click',
    () => {
        if (amount === 0) {
            amount = 0
            amountContainer.innerText = amount
            addToCart.disabled = true
        } else {
            let newAmount = amount - 1
            amount = newAmount
            amountContainer.innerText = amount
            amountContainerCard.innerText = amount
            addToCart.disabled = false
            countFinalPrice()
        }
    }
)

addToCart.addEventListener(
    'click',
    () => {
        emptyCard.style.display = 'none'
        itemInCard.style.display = 'block'
        countFinalPrice()

    }

)


buttonDelete.addEventListener(
    'click',
    () => {
        emptyCard.style.display = 'block'
        itemInCard.style.display = 'none'
        amount = 0
        amountContainer.innerText = amount
        amountContainerCard.innerText = amount
        addToCart.disabled = true
    }
)
thumbnailContainer1.addEventListener(
    'click', 
    () => {
        thumbnailContainer1.classList.add("thumbnail__container-active")
        thumbnailContainer2.classList.remove("thumbnail__container-active")
        thumbnailContainer3.classList.remove("thumbnail__container-active")
        thumbnailContainer4.classList.remove("thumbnail__container-active")
        thumbnail1.classList.add("thumbnail__active")
        thumbnail2.classList.remove("thumbnail__active")
        thumbnail3.classList.remove("thumbnail__active")
        thumbnail4.classList.remove("thumbnail__active")
        photoMain.src = './images/image-product-1.jpg'
    }
)

thumbnailContainer2.addEventListener(
    'click', 
    () => {
        thumbnailContainer2.classList.add("thumbnail__container-active")
        thumbnailContainer1.classList.remove("thumbnail__container-active")
        thumbnailContainer3.classList.remove("thumbnail__container-active")
        thumbnailContainer4.classList.remove("thumbnail__container-active")
        thumbnail2.classList.add("thumbnail__active")
        thumbnail1.classList.remove("thumbnail__active")
        thumbnail3.classList.remove("thumbnail__active")
        thumbnail4.classList.remove("thumbnail__active")
        photoMain.src = './images/image-product-2.jpg'
    }
)

thumbnailContainer3.addEventListener(
    'click', 
    () => {
        thumbnailContainer3.classList.add("thumbnail__container-active")
        thumbnailContainer1.classList.remove("thumbnail__container-active")
        thumbnailContainer2.classList.remove("thumbnail__container-active")
        thumbnailContainer4.classList.remove("thumbnail__container-active")
        thumbnail3.classList.add("thumbnail__active")
        thumbnail2.classList.remove("thumbnail__active")
        thumbnail1.classList.remove("thumbnail__active")
        thumbnail4.classList.remove("thumbnail__active")
        photoMain.src = './images/image-product-3.jpg'
    }
)

thumbnailContainer4.addEventListener(
    'click', 
    () => {
        thumbnailContainer4.classList.add("thumbnail__container-active")
        thumbnailContainer1.classList.remove("thumbnail__container-active")
        thumbnailContainer3.classList.remove("thumbnail__container-active")
        thumbnailContainer2.classList.remove("thumbnail__container-active")
        thumbnail4.classList.add("thumbnail__active")
        thumbnail2.classList.remove("thumbnail__active")
        thumbnail3.classList.remove("thumbnail__active")
        thumbnail1.classList.remove("thumbnail__active")
        photoMain.src = './images/image-product-4.jpg'
    }
)