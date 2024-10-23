import Recipes from "../Recipes/Recipes";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const OurRecipes = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [cookingQueue, setCookingQueue] = useState([]);

  

  const handleAddToCook = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("This recipe is already in your queue");
    }
  };

  const handlePreparing = (recipe) => {
    // remove item from want to cook section
    const deletedRecipe = recipeQueue.find((deletedRecipe) => deletedRecipe.recipe_id === recipe.recipe_id);
    // add item in currently cook section
    const updatedRecipeQueue = recipeQueue.filter((updatedRecipe) => updatedRecipe.recipe_id !== recipe.recipe_id);
    setRecipeQueue(updatedRecipeQueue);
    setCookingQueue([...cookingQueue, deletedRecipe]);
    // don't duplicate item in currently cook section
    // const isExistInCookingQueue = cookingQueue.find(
    //   (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    // );
    // if (!isExistInCookingQueue) {
    //   setCookingQueue([...cookingQueue, recipe]);
    // } else {
    //   alert("This recipe is already in cooking section");
    // }
  };

  return (
    <div className="text-center my-10 space-y-4">
      <h2 className="text-4xl font-semibold">Our Recipes</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.{" "}
      </p>
      <div className="flex flex-col md:flex-row justify-between">
        <Recipes handleAddToCook={handleAddToCook} />

        <Sidebar
          recipeQueue={recipeQueue}
          handlePreparing={handlePreparing}
          cookingQueue={cookingQueue}
        />
      </div>
    </div>
  );
};

export default OurRecipes;
