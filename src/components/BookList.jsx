import React, { useState } from 'react';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState([
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', image: './images/book1.jpg' },
    { title: '1984', author: 'George Orwell', image: './images/book2.jpg' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', image: './images/book3.jpg' }
  ]);
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchInput)
  );

  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      width: '80%',
      marginBottom: '20px',
      borderRadius: '5px',
      border: '1px solid #ccc'
    },
    bookList: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <input 
        type="text" 
        placeholder="Search books by title..." 
        onChange={handleChange} 
        value={searchInput} 
        style={styles.input}
      />
      <div style={styles.bookList}>
        {filteredBooks.map((book, index) => (
          <Book key={index} title={book.title} author={book.author} image={book.image} />
        ))}
      </div>
    </div>
  );
};

export default BookList;