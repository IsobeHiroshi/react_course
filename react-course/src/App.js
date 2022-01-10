import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/NewMeetups";
import NewMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllMeetupsPage />} />
      <Route path="/new-meetup" element={<NewMeetupsPage />} />
      <Route path="/favorites" element={<FavoritesPage />}/>
    </Routes>
  );
}

export default App;
