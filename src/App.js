import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";

const recipes = [
  {
    title: "lasagna",
    ingredients: ["noodles", "sauce"],
  },
  {
    title: "pizza",
    ingredients: ["pepperoni", "crust"],
  },
];

function App() {
  return (
    <div className="App">
      <Main recipeData={recipes} />
    </div>
  );
}

export default App;
