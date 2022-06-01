import { Routes, Route } from "react-router-dom";
import { Login, Signup, Profile, Home } from "./pages";
import { Navbar, FollowerSuggestions } from "./components";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <FollowerSuggestions />
    </div>
  );
}

export default App;
