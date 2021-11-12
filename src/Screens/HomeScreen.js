import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkStorage } from "../actions/localStorage";
import CardSearch from "../components/Card/CardSearch";
import CardForm from "../components/form/CardForm";
import Loader from "../components/ui/Loader";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { city } = useSelector((state) => state.search);
  const { loading } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(checkStorage());
  }, [dispatch]);

  return (
    <div>
      <CardForm />
      {loading && <Loader />}
      {city && !loading && <CardSearch city={city} />}
    </div>
  );
};

export default HomeScreen;
