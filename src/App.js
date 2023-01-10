import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/forgotpassword/*" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
