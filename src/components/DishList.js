// DishList.js
import React from 'react';

function DishList({ dishes }) {
  return (
    <div className="dish-list">
      {dishes.map(dish => (
        <div key={dish.id} className="dish">
          <img src={dish.img} alt={dish.title} />
          <div className="dish-info">
            <h2>{dish.title}</h2>
            <p>{dish.desc}</p>
            <p>Price: ${dish.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DishList;
