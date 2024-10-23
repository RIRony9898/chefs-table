import { useState, useEffect } from 'react'
import Recipe from '../Recipe/Recipe';

const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('./recipes.json')
           .then(response => response.json())
           .then(data => setRecipes(data))
    }, []);

    

    return (
        <div className='w-2/3 border-2 border-red-500'>
            <h1>Recipes</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {
                recipes.map(recipe=><Recipe key={recipe.recipe_id} recipe={recipe}/>)
            }
            </div>
        </div>
    );
};

export default Recipes;