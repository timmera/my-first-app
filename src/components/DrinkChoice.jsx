import './DrinkChoice.css';
export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <div className="drinkChoice">
        <p>You have selected:</p>
        <h2>{drink.name}</h2>
        <p>
          <img
            src={drink.imgUrl}
            width="100px"
            height="100px"
            alt={drink.alt}
          />
        </p>
        <p>Your drink will be ready in a few minutes!</p>
      </div>
    </>
  );
};
