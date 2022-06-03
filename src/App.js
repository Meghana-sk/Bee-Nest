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
import { RequiresAuth } from "./routes";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route
          path="/home"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequiresAuth>
              <Explore />
            </RequiresAuth>
          }
        />
        <Route
          path="/bookmark"
          element={
            <RequiresAuth>
              <BookMarks />
            </RequiresAuth>
          }
        />
      </Routes>
      {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/signup" && <FollowerSuggestions />}
    </div>
  );
}

export default App;
