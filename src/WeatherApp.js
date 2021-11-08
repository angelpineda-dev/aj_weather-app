import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import { store } from "./store/store";

function WeatherApp() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default WeatherApp;
