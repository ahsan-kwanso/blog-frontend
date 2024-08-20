import React from "react";
import { Container } from "@mui/material";
import PrivateHeader from "../components/PrivateHeader";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const PrivateLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <PrivateHeader />
        <Container style={{ marginTop: "20px" }}>{children}</Container>
        <Footer />
      </div>
    </div>
  );
};

export default PrivateLayout;
