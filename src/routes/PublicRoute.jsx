import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSnackbar } from "../contexts/SnackbarContext";
import { getToken } from "../utils/authUtils";
import PublicLayout from "../layouts/PublicLayout";

const PublicRoute = () => {
  const token = getToken();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (token) {
      showSnackbar("Already logged in!");
    }
  }, [token, showSnackbar]);

  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  );
};

export default PublicRoute;
