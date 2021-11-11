import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkStorage } from "../actions/localStorage";
import CardSearch from "../components/Card/CardSearch";
import CardForm from "../components/form/CardForm";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { city } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(checkStorage());
  }, [dispatch]);

  return (
    <div>
      <CardForm />
      {city && <CardSearch city={city} />}
    </div>
  );
};

export default HomeScreen;
