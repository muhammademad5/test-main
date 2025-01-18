import { fetchBookDetails, fetchRelatedBooks } from './api.js';
import { displayBookDetails, displayAudiobooks } from './ui.js';
import { likeBook, dislikeBook, updateLikeDislikeButtons, addComment, loadComments } from './utils.js';

const urlParams = new URLSearchParams(window.location.search);
const bookId = parseInt(urlParams.get('id'));

async function init() {
    const book = await fetchBookDetails(bookId);
    if (book) {
        displayBookDetails(book);
        const relatedBooks = await fetchRelatedBooks(book.genre);
        displayAudiobooks(relatedBooks, 'relatedBooks');
        updateLikeDislikeButtons(bookId);
        loadComments(bookId);
    }
}
/********************************************** */
// function displayBookDetails(book) {
//     document.getElementById('bookTitle').textContent = book.title;
//     document.getElementById('bookAuthor').textContent = book.author;
//     document.getElementById('bookDescription').textContent = book.description;
//     document.getElementById('bookDuration').textContent = `Duration: ${book.duration}`;

//     // عرض الصورة
//     const bookCover = document.getElementById('bookCover');
//     bookCover.src = book.coverImageUrl;

//     // تحميل ملف الصوت
//     const audioPlayer = document.getElementById('audioPlayer');
//     const audioSource = document.getElementById('audioSource');
//     audioSource.src = book.audioUrl;
//     audioPlayer.load(); // إعادة تحميل مشغل الصوت
// }
/**************************************/ 
window.likeBook = () => likeBook(bookId);
window.dislikeBook = () => dislikeBook(bookId);
updateLikeDislikeButtons(bookId);
window.addComment = () => {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    if (commentText) {
        addComment(bookId, commentText);
        commentInput.value = '';
        loadComments(bookId);
    }
};

init();