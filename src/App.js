import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import ResultsList from './ResultsList/ResultsList';
import Filters from './Filters/Filters';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      printType: "all",
      bookType: "full",
      books: [],  
      error: null
    };
  }

  updateSearchTerm = (searchTerm) => {
    let formattedString = searchTerm.split(' ').join('+');
    this.setState({
      searchTerm: formattedString
    });
  }

  updatePrintType = (printType) => {
    this.setState({
      printType: printType
    });
  }
  
  updateBookType = (bookType) =>{
    this.setState({
      bookType: bookType
    })
  }
  
  handleBookSearch = (e) => {
    e.preventDefault();

    const query = this.state.searchTerm;
    const printType = encodeURIComponent(this.state.printType);
    const bookType = encodeURIComponent(this.state.bookType);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${printType}&filter=${bookType}&key=AIzaSyBxjoTL1iNMHXLk_NOzcF-lYij020wgI7Q`;
    
    console.log(url);
    console.log(url);
    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong. Please try again.')
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          books: data.items
        })
      })
      .catch(err =>{
        this.setState({
          error: err.message
        })
      })

  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchForm 
          handleSearch={this.handleBookSearch}
          updateSearchTerm={this.updateSearchTerm}
        />
        <Filters 
          updatePrintType={this.updatePrintType}
          updateBookType={this.updateBookType}/>
        <ResultsList 
          books={this.state.books}
          bookType={this.state.bookType} 
          printType={this.state.printType} />
      </main>
    );
  }


}

export default App;
