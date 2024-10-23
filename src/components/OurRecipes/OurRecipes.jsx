import Recipes from "../Recipres/Recipes";
import Sidebar from "../Sidebar/Sidebar";

const OurRecipes = () => {
  return (
    <div className='text-center my-10 space-y-4'>
      <h2 className="text-4xl font-semibold">Our Recipes</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.{" "}
      </p>
      <div className='flex justify-between'>
        <Recipes/>
        <Sidebar/>
      </div>
    </div>
  );
};

export default OurRecipes;
 