import React from 'react';
import Card from './Card';

const Cards = (props) => {
    const books = props.books.map((book) => {
        return (
            <Card 
                book={book}
                highlight={props.highlight}
                key={book.id} />
        );
    });
    return (
        <div>
            { books }
        </div>
    );
}

export default Cards;
