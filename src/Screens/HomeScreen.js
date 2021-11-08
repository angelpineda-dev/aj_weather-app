import React from "react";
import { useDispatch } from "react-redux";
import { searchCity } from "../actions/search";
import CardContainer from "../components/Card/CardContainer";
import { useForm } from "../hooks/useForm";

const HomeScreen = () => {
  const [formValues, handleInputChange, reset] = useForm({ city: "" });

  const { city } = formValues;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(searchCity(city));

    reset();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search city..."
          name="city"
          value={city}
          onChange={handleInputChange}
        />
      </form>
      <CardContainer />
    </div>
  );
};

export default HomeScreen;
