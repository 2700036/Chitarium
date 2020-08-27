import React from 'react'
import './book-list.css';
import BookListItem from '../book-list-item/book-list-item';
import { connect } from 'react-redux';


const BookList = ({books}) => {
  return (
    <ul>
      {
        books.map(book => <BookListItem 
          key={book.id} 
          book={book}
          />)
      }      
    </ul>
  )
};

const mapStateToProps = ({books}) => ({
  books
})

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps)(BookList);
