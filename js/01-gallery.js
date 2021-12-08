import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListRef = document.querySelector('.gallery');
galleryListRef.addEventListener('click', onLargeImageClick);

createListImage();

function createListImage() {
  const imageMarkup = galleryItems
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('');

  galleryListRef.insertAdjacentHTML('beforeend', imageMarkup);
}

function onLargeImageClick(event) {
  event.preventDefault();

  const isImgEl = event.target.classList.contains('gallery__image');
  if (!isImgEl) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}
