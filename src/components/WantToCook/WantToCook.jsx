import Proptype from "prop-types";

const WantToCook = ({ recipeQueue, handlePreparing,handleTotalTimeAndCalories }) => {
  return (
    <div className='border rounded-lg'>
      <h1 className='text-2xl font-semibold p-4'>Want to cook : {recipeQueue.length}</h1>
      <hr />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => (
              <tr className="hover" key={index}>
                <td>{index + 1}</td>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} min</td>
                <td>{recipe.calories} cal</td>
                <td>
                  <button
                    onClick={() => {
                      handleTotalTimeAndCalories(recipe);
                      handlePreparing(recipe);
                    }}
                    className="btn text-black bg-[#0BE58A] rounded-full hover:bg-violet-500 hover:text-white"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

WantToCook.propTypes = {
  recipeQueue: Proptype.array.isRequired,
};

WantToCook.propTypes = {
  handlePreparing: Proptype.func.isRequired,
};

WantToCook.propTypes = {
  handleTotalTimeAndCalories: Proptype.func.isRequired,
};

export default WantToCook;
