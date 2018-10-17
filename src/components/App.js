import React, { Component } from 'react';
import Cards from './Cards';
import SearchBar from './SearchBar';


class App extends Component {
  constructor() {
    super();

    this.state = {
      highlight:"",
      books: [],
      filterBooks: []
    }
  }

  async componentDidMount() {
    let result = await fetch("https://cors-anywhere.herokuapp.com/http://female-tax.surge.sh/books", 
    {
      headers: {
        "Origin": "123",
      }
    });
    let data = await result.json();
    this.setState({
      books: data,
      filterBooks: data,
    })
  }

  findMatches(wordToMatch, books) {
    return books.filter(book => {
      if (wordToMatch === '\\') {
        wordToMatch = "";
      }
      // here we need to figure out if the title or author matches what was searched
      const regex = new RegExp(wordToMatch, 'gi');
      return book.title.match(regex) || book.author.match(regex) || book.price.toString().match(regex);
    });
  }

  onChangeSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const books = this.state.books;
    const matchArray = this.findMatches(value, books);
    this.setState({ 
      filterBooks: matchArray,
      highlight: value
    })
  }

   deepCopy = (o) =>{
    var output, v, key;
      output = Array.isArray(o) ? [] : {};
      for (key in o) {
          v = o[key];
          output[key] = (typeof v === "object") ? this.deepCopy(v) : v;
      }
      return output;
    }

  onChangeByHighestPrice = (e, arr) => {
    e.preventDefault();
    let newArr = this.deepCopy(arr); 
     newArr.sort((a, b) => {
      return a.price - b.price;
    })
    this.setState({ 
      filterBooks: newArr
    })
  }

  onChangeByAscendingTitle = (e, arr) => {
    e.preventDefault();
    let newArr = this.deepCopy(arr); 
     newArr.sort((a, b) => {
      return a.price - b.price;
    })
    this.setState({ 
      filterBooks: newArr
    })
  }
  

  render() {

    return (
      <div className="App">
        <SearchBar
          onChangeSearch={this.onChangeSearch}
          onChangeByHighestPrice={this.onChangeByHighestPrice}
          books={this.state.filterBooks}
          />
         <div className="container-custom">
            <Cards 
              books={this.state.filterBooks} 
              highlight={this.state.highlight}
            />
         </div>
      </div>
    );
  }
}

export default App;
