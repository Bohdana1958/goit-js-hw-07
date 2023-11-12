import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')


function galleryMarkup(items) {
    return items.map(({ preview, original, description }) =>
        `
    <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    ).join('');

};
gallery.insertAdjacentHTML('beforeend', galleryMarkup(galleryItems));

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
    if (event.currentTarget === event.target) {
        return
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`,

        {
            onShow: function () {
                document.addEventListener('keydown', handleClose);
            },
            onClose: function () {
                document.removeEventListener('keydown', handleClose);
            }
        }
    );
    instance.show();
    function handleClose(event) {
        if (event.key === "Escape") {
            instance.close()

        }

    }
};
