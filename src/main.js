import { searchingRequest } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchField = document.querySelector('.search-field');
const submitBtn = document.querySelector('.search-btn');
const loader = document.querySelector('.loader');

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

searchField.addEventListener('input', event => {
  searchParam.q = event.target.value.trim();
});

submitBtn.addEventListener('click', event => {
  event.preventDefault();
  searchField.value = '';

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
      const lightbox = new SimpleLightbox('.images-list a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
      lightbox.on('show.simplelightbox', function () {});
    })
    .catch(error => console.log(error));
});
