export function displayAudiobooks(books, containerId = 'audiobooksList') {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    if (!Array.isArray(books)) {
        console.error('Expected an array of books, but got:', books);
        return; // توقف إذا لم تكن books مصفوفة
    }

    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'audiobook-card';
        card.innerHTML = `
            <img src="${book.coverImageUrl}" alt="${book.title}" />
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <a href="details.html?id=${book.id}">Details</a>
        `;
        container.appendChild(card);
    });
}

export function displayBookDetails(book) {
    document.getElementById('bookTitle').textContent = book.title;
    document.getElementById('bookAuthor').textContent = book.author;
    document.getElementById('bookDescription').textContent = book.description;
    document.getElementById('bookDuration').textContent = `Duration: ${book.duration}`;
}