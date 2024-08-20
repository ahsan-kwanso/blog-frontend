// src/pages/NotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { PAGE_URL } from "../utils/settings";

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(PAGE_URL.posts);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          sx={{ mt: "20px" }}
        >
          Go to Homepage
        </Button>
      </Box>
    </>
  );
};

export default NotFound;
