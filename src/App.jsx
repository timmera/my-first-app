import viteLogo from '/vite.svg';
import './App.css';
import { coffee, tea } from './utils/data.js';
import { DrinkButtons } from './components/DrinkButtons';
import { DrinkChoice } from './components/DrinkChoice';

export const App = () => {
  const greeting = 'Welcome to our cafe!';
  const userDrink = tea;
  return (
    <>
      <div className="App">
        <h1>{greeting}</h1>
        <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
        <DrinkChoice drink={userDrink} />
      </div>
    </>
  );
};

export default App;
