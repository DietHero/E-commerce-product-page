const cartIcon = document.querySelector('.user__cart-container')
const cart = document.querySelector('.cart')
const buttonPlus = document.querySelector('.amount__button-plus')
const buttonMinus = document.querySelector('.amount__button-minus')
const amountContainer = document.querySelector('.amount__number')

let amount = 0

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
    }
)

buttonMinus.addEventListener(
    'click',
    () => {
        if (amount === 0) {
            amount = 0
            amountContainer.innerText = amount
        } else {
            let newAmount = amount - 1
            amount = newAmount
            amountContainer.innerText = amount
        }
    }
)