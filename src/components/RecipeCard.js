import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const RecipeCard = (props) => {
  const recipe = props.recipe;

  return (
    <div className='card-container'>
      <img
        src='https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=1060&t=st=1682688772~exp=1682689372~hmac=2b1f6c17f3cb5dbb80fcf77f8edff9c3be87c1cab2ead0e755254daa287294d7'
        alt='Recipes'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-recipe/${recipe._id}`}>{recipe.name}</Link>
        </h2>
        <h3>{recipe.calories}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;