import CardContainer from "../components/Card/CardContainer";

const HomeScreen = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <input type="text" placeholder="Search city..." />
      <CardContainer />
    </div>
  );
};

export default HomeScreen;
