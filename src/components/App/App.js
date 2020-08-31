import React from 'react';

import './app.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';
import ShopHeader from '../shop-header/shop-header';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';



const App = () => {  
  
  return (
    <main role='main' className='container'> 
    <ShopHeader numItems={5} total={210} /> 
      <Switch>
        <Route 
        path='/'
        component={HomePage}
        exact
        />
        <Route 
        path='/cart'
        component={CartPage}
        exact
        />
      </Switch>
      <ShoppingCartTable />
      </main>    
    )  
};

export default App;
