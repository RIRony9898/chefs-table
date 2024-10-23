import { useState, useEffect } from 'react'
import Recipe from '../Recipe/Recipe';
import Proptype from 'prop-types'

const Recipes = ({handleAddToCook}) => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('./recipes.json')
           .then(response => response.json())
           .then(data => setRecipes(data))
    }, []);

    

    return (
        <div className='md:w-2/4 lg:w-2/3 order-2 md:order-1'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {
                recipes.map(recipe=><Recipe key={recipe.recipe_id} recipe={recipe} handleAddToCook={handleAddToCook}/>)
            }
            </div>
        </div>
    );
};

Recipes.propTypes = {
    handleAddToCook: Proptype.func.isRequired
}

export default Recipes;