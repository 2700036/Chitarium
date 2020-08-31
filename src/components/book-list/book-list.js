import React, { useContext, useEffect } from 'react'
import './book-list.css';
import BookListItem from '../book-list-item/book-list-item';
import { connect } from 'react-redux';
import { BookStoreServiceContext } from '../bookstore-service-context/bookstore-service-context';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';



const BookList = ({books, booksLoaded, booksRequested, booksError, error, loading}) => {
  const bookStoreService = useContext(BookStoreServiceContext);
  
  useEffect(() => {
    
    bookStoreService.getBooks()
    .then(data=>booksLoaded(data))
    .catch(err=>{
      booksError(err)});
    return ()=>{
      booksRequested();
    }
  }, [bookStoreService, booksLoaded, booksRequested, booksError])
  
if(loading){
  return <Spinner/>
};
if(error){
  return <ErrorIndicator />
};
   return (
   <ul>
      {
        books.map(book => <BookListItem 
          key={book.id} 
          book={book}
          />)
      }      
    </ul>)
  
};

const mapStateToProps = ({books, loading, error}) => ({
  books,
  loading,
  error
})

const mapDispatchToProps = {
      booksLoaded,
      booksRequested,
      booksError
  }


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
