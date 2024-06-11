import './DrinkChoice.css';
export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <div className="drinkChoice">
        <p>{drink.name}</p>
        <img src={drink.imgUrl} width="100px" height="100px" alt={drink.alt} />
        <p>Your drink will be ready in a few minutes!</p>
      </div>
    </>
  );
};
