//  import {galleryItems} from "./gallery-items"
 import SimpleLightbox from "simplelightbox";
 import "simplelightbox/dist/simple-lightbox.min.css";

 // ==== створення галереї === //
  const galleryList = document.querySelector('.gallery');
  function galleryTemp(img) {
    return `<li class="gallery-item">
    <a class="gallery-link" href="${img.original}" >
      <img class="gallery-image" src="${img.preview}" alt="${img.description}"/></a></li>`
  }

  function renderGallery() {
    const markup = images.map(galleryTemp).join('');

    galleryList.insertAdjacentHTML('beforeend', markup);
  }

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionsDelay: 250,
    fadeSpeed: 250,

    captionPosition: "bottom",
    enableKeyboard: true,
    close: true,
    closeText: "x",
 });
   



//   galleryList.addEventListener('click', onGalleryItemClick);
//   event.preventDefault();