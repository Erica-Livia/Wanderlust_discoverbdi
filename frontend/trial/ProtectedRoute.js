// ProtectedRoute.js
import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ element, ...props }) => {
  const { authenticated } = useAuth();

  return authenticated ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
