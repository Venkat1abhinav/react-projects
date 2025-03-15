import { useEffect, useRef, useState } from "react";
import IngredientsList from "./IngredientsList";
import { getAiPreparedRecipe } from "./GenerateRecipe";
import ResultantRecipe from "./ResultantRecipe";
const Main = () => {
  const [ingredients, setIngredient] = useState([]);

  const pageRef = useRef(null);
  const addData = (formData) => {
    const new_ingredient = formData.get("ingredient").trim();
    if (new_ingredient === "") {
      alert("Add something First !!!");
      return;
    }
    setIngredient((prev) => [...prev, new_ingredient]);
  };

  const deleteIngredients = (index) => {
    setIngredient((prev) =>
      prev.filter((_, indexOrginal) => indexOrginal !== index)
    );
  };




  const [loading, setLoading] = useState(false);

  const [recipe, setRecipe] = useState("");

  useEffect(() => {
    if(recipe !== "" && pageRef.current !== null){
      pageRef.current?.scrollIntoView({behavior:"smooth"});
    }
  }, [recipe])

  const generateRecipe = async () => {
    setLoading(true);
    const resultMardown = await getAiPreparedRecipe(ingredients);
    setLoading(false);
    setRecipe(resultMardown);
  };

  const ingredientsList = ingredients.map((ingredient, index) => (
    <div className="content-list" key={index}>
      <li>{ingredient}</li>{" "}
      <button onClick={() => deleteIngredients(index)}>Delete</button>
    </div>
  ));
  return (
    <main>
      <form action={addData}>
        <input
          type="text"
          placeholder="Add the ingridents ex:-garam masala"
          name="ingredient"
        />
        <button type="submit"> + Add the ingredient</button>
      </form>
      {ingredientsList.length > 0 ? (
        <IngredientsList ingredientsList={ingredientsList} />
      ) : null}

      {ingredientsList.length > 2 ? (
        <div className="get-recipie">
          <p>
            Get the Artifical Intelligence suggested recipe based on the given
            ingredients
          </p>
          <button onClick={generateRecipe} className={loading ? "loading" : ""} ref={pageRef}>
            {" "}
            {loading ? <span className="loader"></span> : "Generate Recipe"}
          </button>
        </div>
      ) : null}

      {recipe ? (
        <div>
          <ResultantRecipe recipe={recipe} />
        </div>
      ) : null}
    </main>
  );
};

export default Main;
