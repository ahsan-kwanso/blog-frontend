import React, { useState } from "react";
import { Box, Tabs, Tab, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Person } from "@mui/icons-material";
import SignOutButton from "../components/SignOutButton";

const Sidebar = () => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const navigate = useNavigate();

  // State to manage the selected tab
  const [selectedTab, setSelectedTab] = useState(0);

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    if (newValue === 0) {
      navigate("/posts");
    } else if (newValue === 1) {
      navigate("/my-posts");
    }
  };

  return (
    <Box
      sx={{
        width: isSmallScreen ? 80 : 170,
        height: "100vh",
        position: { xs: "fixed", sm: "fixed" },
        top: 0,
        left: 0,
        backgroundColor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
        padding: 2,
        boxShadow: 2,
      }}
    >
      <Tabs
        orientation="vertical"
        aria-label="Sidebar tabs"
        value={selectedTab}
        onChange={handleTabChange}
        sx={{
          flexGrow: 1,
          mt: 7,
          "& .MuiTab-root": {
            // Adjust padding and margin for small screens
            px: isSmallScreen ? 1 : 2,
            py: isSmallScreen ? 1 : 2,
            "& svg": {
              // Adjust margin for icons
              mr: isSmallScreen ? 5 : 1,
            },
          },
        }}
      >
        <Tab label={isSmallScreen ? <Home /> : "All Posts"} />
        <Tab label={isSmallScreen ? <Person /> : "My Posts"} />
      </Tabs>
      <Box sx={{ marginTop: "auto", mb: 7, ml: isSmallScreen ? 0 : 2 }}>
        <SignOutButton isSmallScreen={isSmallScreen} />
      </Box>
    </Box>
  );
};

export default Sidebar;
