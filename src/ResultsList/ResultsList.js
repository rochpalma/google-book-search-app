import React, { Component } from 'react';
import Book from '../Book/Book';

class ResultsList extends Component {
    render() {
        const booksList = this.props.books.map((book, index) => {
            const author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : "";        
            return (
                <Book
                    index={index}
                    title={book.volumeInfo.title}
                    author={author}
                    price={book.volumeInfo.price}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.smallThumbnail}
                    link={book.volumeInfo.infoLink}
                />
            )
        });
        
        return (
            <div>
                <ul>
                    {booksList}
                </ul>
            </div>
        );
    }
}

export default ResultsList;