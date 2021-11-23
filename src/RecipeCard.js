function RecipeCard({ title, ingredients }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {ingredients.map((ingredient) => {
          return <li>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
}

export default RecipeCard;
