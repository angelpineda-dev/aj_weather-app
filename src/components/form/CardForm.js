import React from "react";
import { useDispatch } from "react-redux";
import { searchCity } from "../../actions/search";
import { useForm } from "../../hooks/useForm";

const CardForm = () => {
  const [formValues, handleInputChange, reset] = useForm({ name: "" });
  const { name } = formValues;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(searchCity(name));
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search city..."
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <button type="submit">Search </button>
    </form>
  );
};

export default CardForm;
