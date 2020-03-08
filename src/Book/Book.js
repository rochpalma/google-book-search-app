import React, { Component } from 'react';

class Book extends Component {
    render() {        
        return (
            <div>
                <a href={this.props.link} target="_blank">
                    <h2>{this.props.title}</h2>
                </a>
                <div>
                    <img src={this.props.image} alt={`book cover for ${this.props.title} by ${this.props.author}`} />
                </div>
                <div>
                    <p>Author: {this.props.author}</p>
                    <p>Price: {this.props.price}</p>
                    <p>{this.props.description}</p>
                </div>   
            </div>
        );
    }
}

export default Book;