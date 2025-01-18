const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const { audiobooks } = require('./js/audiobooks.js');

// تقديم الملفات الثابتة من مجلد المشروع
app.use(express.static(path.join(__dirname)));

// API Routes
app.get('/books', (req, res) => {
    console.log('Audiobooks:', audiobooks); // تحقق من البيانات
    const search = req.query.search;
    const genre = req.query.genre;
    let filteredBooks = audiobooks;

    if (search) {
        filteredBooks = filteredBooks.filter(book =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (genre) {
        filteredBooks = filteredBooks.filter(book => book.genre === genre);
    }

    res.json(filteredBooks);
});

app.get('/books/:id', (req, res) => {
    const book = audiobooks.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for the details page
app.get('/details', (req, res) => {
    res.sendFile(path.join(__dirname, 'details.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});