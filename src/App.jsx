import viteLogo from '/vite.svg';
import './App.css';
import { DrinkButtons } from './components/DrinkButtons';

export const App = () => {
  const greeting = 'Welcome to our cafe!';

  return (
    <>
      <div className="App">
        <h1>{greeting}</h1>
        <DrinkButtons />
      </div>
    </>
  );
};

export default App;
