import React from "react";
import { Container } from "@mui/material";
import PublicHeader from "../components/PublicHeader"; // Import your Header component
import Footer from "../components/Footer"; // Import your Footer component

const PublicLayout = ({ children }) => {
  return (
    <div>
      <PublicHeader />
      <Container style={{ marginTop: "20px" }}>{children}</Container>
      <Footer />
    </div>
  );
};

export default PublicLayout;
