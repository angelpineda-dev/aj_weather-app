import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { searchCity } from "../../actions/search";
import { useForm } from "../../hooks/useForm";

const CardForm = () => {
  const [formValues, handleInputChange, reset] = useForm({ name: "" });
  const { name } = formValues;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 3) {
      return Swal.fire({
        icon: "error",
        title: "You need a city name",
        text: "You need more than 2 letters to search a city.",
      });
    }

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
