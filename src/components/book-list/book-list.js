import React, { useContext, useEffect } from 'react'
import './book-list.css';
import BookListItem from '../book-list-item/book-list-item';
import { connect } from 'react-redux';
import { booksRequested, fetchBooks, bookAddedToCart } from '../../actions';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import withBookstoreService from '../hoc/with-bookstore-service';



const BookListContainer = ({books, booksRequested, error, loading, fetchBooks, onAddedToCart}) => { 
  
  useEffect(() => {
    fetchBooks();
    return () => {
      booksRequested();
    }
  }, [])
  
if(loading){
  return <Spinner/>
};
if(error){
  return <ErrorIndicator />
};
  return <BookList books={books} onAddedToCart={onAddedToCart} />
};

const BookList = ({books, onAddedToCart}) => {   
  return <ul>{
        books.map(book => <BookListItem 
          key={book.id} 
          book={book}
          onAddedToCart={()=>onAddedToCart(book.id)}
          />)
        }</ul>
      };



const mapStateToProps = ({books, loading, error}) => ({
  books,
  loading,
  error
})

const mapDispatchToProps = (dispatch, {bookStoreService}) => {  
  return {    
    fetchBooks: fetchBooks(dispatch, bookStoreService),
    onAddedToCart: (id)=>dispatch(bookAddedToCart(id)),
    booksRequested: ()=>dispatch(booksRequested())
    }
  }      
  


export default withBookstoreService(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));
