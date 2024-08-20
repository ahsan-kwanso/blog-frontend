// src/components/CreatePostButton.jsx
import React from "react";
import { Button } from "@mui/material";
import useCustomNavigation from "../routes/useCustomNavigation";

const CreatePostButton = () => {
  const { createPostPage } = useCustomNavigation();

  const handleCreatePost = () => {
    createPostPage(); // route to create post
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleCreatePost}
      sx={{ marginLeft: 2 }}
    >
      Create Post
    </Button>
  );
};

export default CreatePostButton;
