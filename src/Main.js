import RecipeCard from "./RecipeCard";

function Main({ recipeData }) {
  return (
    <main>
      {recipeData.map((recipe) => {
        return (
          <RecipeCard title={recipe.title} ingredients={recipe.ingredients} />
        );
      })}
    </main>
  );
}

export default Main;
