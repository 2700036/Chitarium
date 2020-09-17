import React from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart, decreaseItem, deleteItem } from '../../actions';
import './shopping-cart-table.css';


const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
  const renderRow = (item, idx) => {
    const {id, title, count, total} = item;
    return (
      <tr key={id}>
            <td>{idx+1}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td>${total}</td>
            <td>
              <button onClick={()=>onDelete(id)}
              className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
              </button>
              <button onClick={()=>onIncrease(id)}
              className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-plus-circle" />
              </button>
              <button onClick={()=>onDecrease(id)}
              className="btn btn-outline-warning btn-sm float-right">
                <i className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
    )   
  }

  return (
    <div className="shopping-cart-table">
      <h2>Корзина</h2>
      <table className="table">
        <thead>
          <tr>
          <th>#</th>
          <th>Наименование</th>
          <th>Кол-во</th>
          <th>Цена</th>
          <th></th>
          </tr>
        </thead>

        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
      </table>

      <div className="total">
        Сумма: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({orderTotal, cartItems}) => ({
  items: cartItems, 
  total: orderTotal
})

const mapDispatchToProps = {
    onIncrease: bookAddedToCart, 
    onDecrease: decreaseItem, 
    onDelete: deleteItem
}



export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
