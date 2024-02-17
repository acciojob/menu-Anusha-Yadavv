// CategoryFilter.js
import React from 'react';

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
