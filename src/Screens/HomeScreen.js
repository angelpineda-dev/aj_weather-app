import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCity } from "../actions/search";
import CardSearch from "../components/Card/CardSearch";
import { useForm } from "../hooks/useForm";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { city } = useSelector((state) => state.search);

  const [formValues, handleInputChange, reset] = useForm({ name: "" });

  const { name } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(searchCity(name));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search city..."
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </form>
      {city && <CardSearch city={city} />}
    </div>
  );
};

export default HomeScreen;
