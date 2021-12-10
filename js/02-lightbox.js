import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListRef = document.querySelector('.gallery');

createListImage();

function createListImage() {
  const imageMarkup = galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');

  galleryListRef.insertAdjacentHTML('beforeend', imageMarkup);
}

new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionPosition: 'bottom',
  captionDelay: 100,
  enableKeyboard: true,
  doubleTapZoom: 5,
});
