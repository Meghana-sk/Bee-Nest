import { Routes, Route, useLocation } from "react-router-dom";
import {
  Login,
  Signup,
  Profile,
  Home,
  LandingPage,
  Explore,
  BookMarks,
} from "./pages";
import { Navbar, FollowerSuggestions } from "./components";
import { Container } from "@chakra-ui/react";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<BookMarks />} />
      </Routes>
      {location.pathname !== "/" && <FollowerSuggestions />}
    </div>
  );
}

export default App;
