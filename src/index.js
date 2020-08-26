import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookStoreServiceContext } from './components/bookstore-service-context/bookstore-service-context';
import App from './components/App/App';
import BookStoreService from './services/bookstore-service';
import ErrorBoundry from './components/error-boundry/error-boundry';

const bookStoreService = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookStoreServiceContext.Provider value={bookStoreService}>
        <Router>
          <App />
        </Router>
      </BookStoreServiceContext.Provider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
