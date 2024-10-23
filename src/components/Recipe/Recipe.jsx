import Proptype from 'prop-types'

const Recipe = ({recipe,handleAddToCook}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = recipe
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border">
        <figure className='pt-4 px-4'>
          <img
          className='h-80 w-full rounded-lg'
            src={recipe_image}
            alt={recipe_name}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl text-center">{recipe_name}</h2>
          <p>{short_description}</p>
          <hr />
          <h3>Ingredients: {ingredients.length}</h3>
          <ul className='text-left'>
            {ingredients.map((ingredient, index) => (
              <li className='list-disc' key={index}>{ingredient}</li>
            ))}
          </ul>
          <hr />
          <div className='flex'>
            <p>Preparing Time: <br /> {preparing_time} minutes</p>
            <p>Calories: <br /> {calories} calories</p>
          </div>
          <div className="card-actions justify-center mt-4">
            <button onClick={()=>handleAddToCook(recipe)} className="btn text-black bg-[#0BE58A] rounded-full hover:bg-violet-500 hover:text-white">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: Proptype.object.isRequired,
  handleAddToCook: Proptype.func.isRequired,
};

export default Recipe;
