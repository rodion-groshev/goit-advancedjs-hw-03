import { searchingRequest } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.images-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let searchParam = {
  key: '45237174-16156409efac0dde2d7dc0545',
  q: null,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

const iziOptions = {
  message:
    'Sorry, there are no images matching your search query. Please try again!',
  color: 'red',
  position: 'topRight',
  progressBar: false,
};

form.addEventListener('submit', event => {
  event.preventDefault();

  searchParam.q = event.target.elements.search_key.value.trim();
  event.target.elements.search_key.value = '';

  if (searchParam.q === null || searchParam.q === '') {
    iziToast.show(iziOptions);
    return;
  }
  
  loader.style.display = 'block';
  searchingRequest(new URLSearchParams(searchParam))
    .then(imagesData => {
      if (imagesData.total === 0) {
        iziToast.show(iziOptions);
        loader.style.display = 'none';
        return;
      }

      renderImages(imagesData);

      loader.style.display = 'none';

      lightbox.on('show.simplelightbox', function () {});
      lightbox.refresh();
    })
    .catch(error => console.log(error));
});
