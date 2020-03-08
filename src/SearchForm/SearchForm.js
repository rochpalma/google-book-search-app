import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    render(){
        return (
            <form onSubmit={this.props.handleSearch}>
                <label htmlFor="search-term">Search: </label>
                <input 
                    type="text" 
                    name="search-term"
                    id="search-term"
                    onChange={e => this.props.updateSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default SearchForm;