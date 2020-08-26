import React, { useContext } from 'react';
import { BookStoreServiceContext } from '../bookstore-service-context/bookstore-service-context';
import './app.css';






const App = () => {  
  const bookStoreServiceContext = useContext(BookStoreServiceContext);
  return (   
      <div>App</div>     
    )  
};

export default App;
