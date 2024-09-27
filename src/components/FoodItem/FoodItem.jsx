import React, { useContext } from 'react';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';
import Button from './Button.jsx';


const FoodItem = ({ id, name, description, image, price }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext); // Destructure correctly

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
        {/* {!cartItems[id]
          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
          : <div className='food-item-counter'>
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add" />
            </div>
        } */}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          {/* <img src={assets.rating_starts} alt="Rating" /> */}
          <Button/>
        </div>
        <p className="food-item-desc">
          {description}
        </p>
        <p className="today-price inline">Today's Price:&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="food-item-price inline">
          &#8377;{price}
        </p>
      </div>
    </div>
  );
}

export default FoodItem;
