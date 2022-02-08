const thumbnailContainer1 = document.querySelector('.thumbnail__container-1')
const thumbnailContainer2 = document.querySelector('.thumbnail__container-2')
const thumbnailContainer3 = document.querySelector('.thumbnail__container-3')
const thumbnailContainer4 = document.querySelector('.thumbnail__container-4')
const thumbnail1 = document.querySelector('.thumbnail-1')
const thumbnail2 = document.querySelector('.thumbnail-2')
const thumbnail3 = document.querySelector('.thumbnail-3')
const thumbnail4 = document.querySelector('.thumbnail-4')
const photoMain = document.querySelector('.photo__main')


const reset = function () {
    thumbnail1.classList.remove("thumbnail__active")
    thumbnail2.classList.remove("thumbnail__active")
    thumbnail3.classList.remove("thumbnail__active")
    thumbnail4.classList.remove("thumbnail__active")
    thumbnailContainer1.classList.remove("thumbnail__container-active")
    thumbnailContainer2.classList.remove("thumbnail__container-active")
    thumbnailContainer3.classList.remove("thumbnail__container-active")
    thumbnailContainer4.classList.remove("thumbnail__container-active")

}
const addClass = function (thumbnail, thumbnailContainer) {
    thumbnail.classList.add("thumbnail__active")
    thumbnailContainer.classList.add("thumbnail__container-active")
}

thumbnailContainer1.addEventListener(
    'click',
    () => {
        photoMain.src = './images/image-product-1.jpg';
        reset();
        addClass(thumbnail1, thumbnailContainer1);
    }
)

thumbnailContainer2.addEventListener(
    'click',
    () => {
        photoMain.src = './images/image-product-2.jpg';
        reset();
        addClass(thumbnail2, thumbnailContainer2);

    }
)

thumbnailContainer3.addEventListener(
    'click',
    () => {
        photoMain.src = './images/image-product-3.jpg';
        reset();
        addClass(thumbnail3, thumbnailContainer3);
    }
)

thumbnailContainer4.addEventListener(
    'click',
    () => {
        photoMain.src = './images/image-product-4.jpg';
        reset();
        addClass(thumbnail4, thumbnailContainer4);

    }
)
