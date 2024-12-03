import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";

import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

import { fetchImages } from './js/pixabay-api.js';

const form = document.querySelector('#search-form');
const input = form.querySelector('input[name="searchQuery"]');
const gallery = document.querySelector('.gallery');
const btn = document.querySelector('.search-btn');

form.addEventListener('submit', async event => {
    event.preventDefault();

    const query = input.value.trim();

    if(!query) return;

    try {
        const data = await fetchImages(query);

        if(data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            return;
        }

        console.log(data.hits);
    } 

    catch(error) {
        iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
        });
    }
});


