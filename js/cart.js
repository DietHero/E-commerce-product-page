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
