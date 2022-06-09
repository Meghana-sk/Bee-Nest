import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        theme="colored"
        autoClose={3000}
        position="bottom-right"
        closeOnClick
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile/:username"
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
      {/* {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/signup" && } */}
    </div>
  );
}

export default App;
