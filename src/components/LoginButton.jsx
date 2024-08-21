import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { AuthContext } from "../contexts/AuthContext";
import useCustomNavigation from "../routes/useCustomNavigation";
import { Tooltip, Typography } from "@mui/material";

const SignOutButton = ({ isSmallScreen }) => {
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
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "none", // Default background color
        borderRadius: "8px", // Rounded corners
        padding: "8px", // Padding inside the button
        "&:hover": {
          backgroundColor: "primary", // Darker blue on hover
          "& .MuiTypography-root": {
            color: (theme) => theme.palette.secondary.main, // Change text color to secondary color on hover
          },
          "& svg": {
            color: (theme) => theme.palette.secondary.main, // Change icon color to secondary color on hover
          },
        },
      }}
    >
      {isSmallScreen ? (
        <Tooltip title={"Log in"}>
          <VpnKeyIcon />
        </Tooltip>
      ) : (
        <Typography sx={{ ml: 2, mr: 2 }}>Log in</Typography>
      )}
    </IconButton>
  );
};

export default SignOutButton;
