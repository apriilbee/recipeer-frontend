import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateRecipe = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: '',
    calories: 0,
  });

  const onChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/recipes', recipe)
      .then((res) => {
        setRecipe({
          name: '',
          calories: 0,
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateRecipe!');
      });
  };

  return (
    <div className='CreateRecipe'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Recipe List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Recipe</h1>
            <p className='lead text-center'>Create new Recipe</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Recipe Name'
                  name='name'
                  className='form-control'
                  value={recipe.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Calorie Count'
                  name='calories'
                  className='form-control'
                  value={recipe.calories}
                  onChange={onChange}
                />
              </div>

             

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;