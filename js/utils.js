export function likeBook(bookId) {
    const likes = JSON.parse(localStorage.getItem('likes')) || {};
    const dislikes = JSON.parse(localStorage.getItem('dislikes')) || {};

    if (likes[bookId]) {
        delete likes[bookId];
    } else {
        likes[bookId] = true;
        delete dislikes[bookId];
    }

    localStorage.setItem('likes', JSON.stringify(likes));
    localStorage.setItem('dislikes', JSON.stringify(dislikes));
    updateLikeDislikeButtons(bookId);
}

export function dislikeBook(bookId) {
    const likes = JSON.parse(localStorage.getItem('likes')) || {};
    const dislikes = JSON.parse(localStorage.getItem('dislikes')) || {};

    if (dislikes[bookId]) {
        delete dislikes[bookId];
    } else {
        dislikes[bookId] = true;
        delete likes[bookId];
    }

    localStorage.setItem('likes', JSON.stringify(likes));
    localStorage.setItem('dislikes', JSON.stringify(dislikes));
    updateLikeDislikeButtons(bookId);
}

export function updateLikeDislikeButtons(bookId) {
    const likes = JSON.parse(localStorage.getItem('likes')) || {};
    const dislikes = JSON.parse(localStorage.getItem('dislikes')) || {};
    const likeButton = document.getElementById('likeButton');
    const dislikeButton = document.getElementById('dislikeButton');

    if (likes[bookId]) {
        likeButton.style.backgroundColor = 'green';
        dislikeButton.style.backgroundColor = '#007bff';
    } else if (dislikes[bookId]) {
        dislikeButton.style.backgroundColor = 'red';
        likeButton.style.backgroundColor = '#007bff';
    } else {
        likeButton.style.backgroundColor = '#007bff';
        dislikeButton.style.backgroundColor = '#007bff';
    }
}

export function addComment(bookId, comment) {
    const comments = JSON.parse(localStorage.getItem('comments')) || {};
    if (!comments[bookId]) comments[bookId] = [];
    comments[bookId].push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

export function loadComments(bookId) {
    const comments = JSON.parse(localStorage.getItem('comments')) || {};
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';
    if (comments[bookId]) {
        comments[bookId].forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.textContent = comment;
            commentsList.appendChild(commentDiv);
        });
    }
}