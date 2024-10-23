import Proptype from "prop-types";

const CurrentlyCooking = ({ cookingQueue,totalTime,totalCalories }) => {
  return (
    <div>
      <h1>Currently cooking : {cookingQueue.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {cookingQueue.map((recipe, index) => (
              <tr className="hover" key={index}>
                <td>{index + 1}</td>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} min</td>
                <td>{recipe.calories} cal</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td>Total time = {totalTime} min</td>
              <td>Total calories = {totalCalories} cal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

CurrentlyCooking.propTypes = {
  recipeQueue: Proptype.array.isRequired,
};

CurrentlyCooking.propTypes = {
  cookingQueue: Proptype.array.isRequired,
};

CurrentlyCooking.propTypes = {
  cookingQueue: Proptype.array.isRequired,
  totalTime: Proptype.number.isRequired,
  totalCalories: Proptype.number.isRequired,
};

export default CurrentlyCooking;
