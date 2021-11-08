import Card from "./Card";

const CardContainer = () => {
  const favoriteCities = [
    { id: 1, name: "Mexico" },
    { id: 2, name: "Canada" },
    { id: 3, name: "New Zeland" },
  ];
  return (
    <div>
      <h2>Favorites</h2>
      {favoriteCities.map((city) => (
        <Card key={city.id} title={city.name} />
      ))}
    </div>
  );
};

export default CardContainer;
