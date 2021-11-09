import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import FavoritesScreen from "../Screens/FavoritesScreen";
import HomeScreen from "../Screens/HomeScreen";
import NotFoundScreen from "../Screens/NotFoundScreen";

const AppRouter = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
