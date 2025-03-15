const IngredientsList = (props) => {
  return (
    <div className="content">
      <h1>Ingredients on hand are</h1>
      <div className="content-list"> 
        <ul>{props.ingredientsList}</ul>
      </div>
    </div>
  );
};

export default IngredientsList;
