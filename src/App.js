import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route exact path="/sammeurice.github.io" element={<HomePage />} />
      <Route
        path="/sammeurice.github.io/forgotpassword/*"
        element={<ForgotPassword />}
      />
    </Routes>
  );
}

export default App;
