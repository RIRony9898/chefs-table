import Proptype from "prop-types";
import WantToCook from "../WantToCook/WantToCook";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

const Sidebar = ({ recipeQueue, handlePreparing,cookingQueue }) => {
  return (
    <div className="md:w-1/3 order-1 md:order-2 border-2 border-blue-500">
      <WantToCook recipeQueue={recipeQueue} handlePreparing={handlePreparing} />

      <CurrentlyCooking recipeQueue={recipeQueue} cookingQueue={cookingQueue} />
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

export default Sidebar;
