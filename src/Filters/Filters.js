import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
    render() {
        return (
          <div className="filters">
            <label htmlFor="print-type">Print Type: </label>
            <select 
              id="print-type" 
              name="print-type" 
              onChange={e => this.props.updatePrintType(e.target.value)}>
              <option value="all">All</option>
              <option value="books">Books</option>
              <option value="magazines">Magazines</option>
            </select>
            <label htmlFor="book-type">Book Type: </label>
            <select 
              id="book-type" 
              name="book-type"
              onChange={e => this.props.updateBookType(e.target.value)}>
              <option value="">No Filter</option>
              <option value="free-ebooks">Free Ebooks</option>
            </select>
          </div>
        )
    }
}

export default Filters;