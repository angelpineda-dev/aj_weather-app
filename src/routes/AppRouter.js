import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import SearchScreen from "../Screens/SearchScreen";
import HomeScreen from "../Screens/HomeScreen";
import NotFoundScreen from "../Screens/NotFoundScreen";

const AppRouter = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
