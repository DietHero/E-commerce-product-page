const thumbnailContainer1 = document.querySelectorAll('.thumbnail__container-1')
const thumbnailContainer2 = document.querySelectorAll('.thumbnail__container-2')
const thumbnailContainer3 = document.querySelectorAll('.thumbnail__container-3')
const thumbnailContainer4 = document.querySelectorAll('.thumbnail__container-4')
const thumbnail1 = document.querySelectorAll('.thumbnail-1')
const thumbnail2 = document.querySelectorAll('.thumbnail-2')
const thumbnail3 = document.querySelectorAll('.thumbnail-3')
const thumbnail4 = document.querySelectorAll('.thumbnail-4')
const photoMain = document.querySelectorAll('.photo__main')


const reset = function () {
    thumbnail1.forEach((element) => element.classList.remove("thumbnail__active"))
    thumbnail2.forEach((element) => element.classList.remove("thumbnail__active"))
    thumbnail3.forEach((element) => element.classList.remove("thumbnail__active"))
    thumbnail4.forEach((element) => element.classList.remove("thumbnail__active"))
    thumbnailContainer1.forEach((element) => element.classList.remove("thumbnail__container-active"))
    thumbnailContainer2.forEach((element) => element.classList.remove("thumbnail__container-active"))
    thumbnailContainer3.forEach((element) => element.classList.remove("thumbnail__container-active"))
    thumbnailContainer4.forEach((element) => element.classList.remove("thumbnail__container-active"))

}
const addClass = function (thumbnail, thumbnailContainer) {
    thumbnail.forEach((element) => element.classList.add("thumbnail__active"))
    thumbnailContainer.forEach((element) => element.classList.add("thumbnail__container-active"))
}

thumbnailContainer1.forEach((button) => button.addEventListener(
    'click',
    () => {
        photoMain.forEach((element) =>element.src = './images/image-product-1.jpg');
        reset();
        addClass(thumbnail1, thumbnailContainer1);
    }
)) 

thumbnailContainer2.forEach((button) => button.addEventListener(
    'click',
    () => {
        photoMain.forEach((element) =>element.src = './images/image-product-2.jpg');
        reset();
        addClass(thumbnail2, thumbnailContainer2);

    }
))

thumbnailContainer3.forEach((button) => button.addEventListener(
    'click',
    () => {
        photoMain.forEach((element) =>element.src = './images/image-product-3.jpg');
        reset();
        addClass(thumbnail3, thumbnailContainer3);
    }
))

thumbnailContainer4.forEach((button) => button.addEventListener(
    'click',
    () => {
        photoMain.forEach((element) =>element.src = './images/image-product-4.jpg');
        reset();
        addClass(thumbnail4, thumbnailContainer4);

    }
))
