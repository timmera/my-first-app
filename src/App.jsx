import viteLogo from '/vite.svg';
import './App.css';
import { coffee, tea } from './utils/data.js';
import { DrinkButtons } from './components/DrinkButtons';
import { DrinkChoice } from './components/DrinkChoice';

export const App = () => {
  const greeting = 'Welcome to our cafe!';
  const userDrink = undefined;
  return (
    <>
      <div className="app">
        <div className="drinks shadow">
          {userDrink ? (
            <DrinkChoice drink={userDrink} />
          ) : (
            <>
              <h1>{greeting}</h1>
              <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
