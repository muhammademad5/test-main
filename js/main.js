import { fetchAudiobooks } from './api.js';
import { displayAudiobooks } from './ui.js';

const searchBar = document.getElementById('searchBar');

async function init() {
    const books = await fetchAudiobooks();
    console.log('Books:', books); // تحقق من البيانات
    displayAudiobooks(books);

    searchBar.addEventListener('input', async (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredBooks = await fetchAudiobooks(searchTerm);
        console.log('Filtered Books:', filteredBooks); // تحقق من البيانات
        displayAudiobooks(filteredBooks);
    });
}

init();