{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}
// App.js
import React, { useState } from 'react';
import './App.css';
import { dishesData } from './data';
import DishList from './DishList';
import CategoryFilter from './CategoryFilter';

function App() {
  const [category, setCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const filteredDishes = category === 'all' ? dishesData : dishesData.filter(dish => dish.category === category);

  return (
    <div className="App">
      <h1>Delicious Dishes</h1>
      <CategoryFilter categories={['all', 'breakfast', 'lunch', 'shakes']} selectedCategory={category} onSelectCategory={handleCategoryChange} />
      <DishList dishes={filteredDishes} />
    </div>
  );
}

export default App;


