import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateRecipeInfo(props) {
  const [recipe, setRecipe] = useState({
    name: '',
    calories: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/recipes/${id}`)
      .then((res) => {
        setRecipe({
          name: res.data.name,
          calories: res.data.calories,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateRecipeInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: recipe.title,
      calories: recipe.calories,
    
    };

    axios
      .put(`http://localhost:8082/api/recipes/${id}`, data)
      .then((res) => {
        navigate(`/show-recipe/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateRecipeInfo!');
      });
  };

  return (
    <div className='UpdateRecipeInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Recipe List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Recipe</h1>
            <p className='lead text-center'>Update Recipe's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Name</label>
              <input
                type='text'
                placeholder='Name'
                name='name'
                className='form-control'
                value={recipe.name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='isbn'>Calorie Count</label>
              <input
                type='text'
                placeholder='Calories'
                name='calories'
                className='form-control'
                value={recipe.calories}
                onChange={onChange}
              />
            </div>
            <br />


            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateRecipeInfo;