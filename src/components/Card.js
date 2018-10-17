import React from 'react';
import reactStringReplace from 'react-string-replace';

const Card = (props) => {
     
    const new_title = reactStringReplace(props.book.title, props.highlight, (match, i) => (
        <span className="hl">{match}</span>
      ));

    const new_author = reactStringReplace(props.book.author, props.highlight, (match, i) => (
        <span className="hll">{match}</span>
    ));

    console.log("highlight is ", props.highlight);
    /// do logic for highlighting here ,not in the master compomenent. 
     //// take in orignal text and do string manipulation to apply highlights. 
    return (
        <div className="book">
            <div className="title">
                <span>{props.highlight ? new_title : props.book.title}</span>
            </div>
            <div className="author">
                <span>{props.highlight ? new_author : props.book.author}</span>
            </div>
            <div className="price">
                 <span>${props.book.price}</span>
            </div>
        </div>///// new text with highlights 
    );
}

export default Card;




        
