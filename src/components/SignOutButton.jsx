import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ExitToApp from "@mui/icons-material/ExitToApp";
import { AuthContext } from "../contexts/AuthContext";
import { PAGE_URL } from "../utils/settings";
import useCustomNavigation from "../routes/useCustomNavigation";

const SignOutButton = () => {
  const { loginPage } = useCustomNavigation();
  const { signout } = useContext(AuthContext);
  const handleSignOut = () => {
    signout();
    loginPage(); // Redirect to sign-in page after signing out
  };

  return (
    <IconButton
      size="large"
      aria-label="sign out"
      onClick={handleSignOut}
      color="inherit"
    >
      <ExitToApp />
    </IconButton>
  );
};

export default SignOutButton;
