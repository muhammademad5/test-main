export async function fetchAudiobooks(searchTerm = '') {
  try {
      const response = await fetch(`http://localhost:3000/books?search=${searchTerm}`);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.text(); // تحقق من النص أولاً
      console.log('Response:', data); // اطبع الاستجابة في الكونسول
      return JSON.parse(data); // حاول تحويل النص إلى JSON
  } catch (error) {
      console.error('Error fetching audiobooks:', error);
      return [];
  }
}

export async function fetchBookDetails(bookId) {
  try {
      const response = await fetch(`http://localhost:3000/books/${bookId}`);
      return await response.json();
  } catch (error) {
      console.error('Error fetching book details:', error);
      return null;
  }
}

export async function fetchRelatedBooks(genre) {
  try {
      const response = await fetch(`http://localhost:3000/books?genre=${genre}`);
      return await response.json();
  } catch (error) {
      console.error('Error fetching related books:', error);
      return [];
  }
}