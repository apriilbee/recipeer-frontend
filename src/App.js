import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateRecipe from './components/CreateRecipe';
import ShowRecipeList from './components/ShowRecipeList';
import ShowRecipeDetails from './components/ShowRecipeDetails';
import UpdateRecipeInfo from './components/UpdateRecipeInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowRecipeList />} />
          <Route path='/create-recipe' element={<CreateRecipe />} />
          <Route path='/edit-recipe/:id' element={<UpdateRecipeInfo />} />
          <Route path='/show-recipe/:id' element={<ShowRecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;