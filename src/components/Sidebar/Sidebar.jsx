import Proptype from "prop-types";
import WantToCook from "../WantToCook/WantToCook";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

const Sidebar = ({ recipeQueue, handlePreparing,cookingQueue,handleTotalTimeAndCalories,totalTime,totalCalories }) => {
  return (
    <div className="md:w-2/4 lg:w-1/3 order-1 md:order-2 flex flex-col gap-6">
      <WantToCook recipeQueue={recipeQueue} handlePreparing={handlePreparing} handleTotalTimeAndCalories={handleTotalTimeAndCalories} />

      <CurrentlyCooking recipeQueue={recipeQueue} cookingQueue={cookingQueue} totalTime={totalTime}
          totalCalories={totalCalories} />
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: Proptype.arrayOf(Proptype.object).isRequired,
};

Sidebar.propTypes = {
  handlePreparing: Proptype.func.isRequired,
};

Sidebar.propTypes = {
  cookingQueue: Proptype.arrayOf(Proptype.object).isRequired,
};

Sidebar.propTypes = {
  handleTotalTimeAndCalories: Proptype.func.isRequired,
};

Sidebar.propTypes = {
  totalTime: Proptype.number.isRequired,
};

Sidebar.propTypes = {
  totalCalories: Proptype.number.isRequired,
};

export default Sidebar;
