import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = false; // later from context/JWT

  return isAuthenticated ? children : <Navigate to="/login" />;
}