import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import ForgotPassword from "./Pages/auth/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;