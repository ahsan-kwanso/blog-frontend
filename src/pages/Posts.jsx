// src/pages/Dashboard.jsx
import React from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Box, Pagination, Snackbar, Alert } from "@mui/material";
import PostList from "../components/PostList";
import useFetchMyPosts from "../hooks/useFetchMyPosts";
import useFetchSearchMyPosts from "../hooks/useFetchSearchMyPosts";
import { defaultPage } from "../utils/pagination";
import { defaultLimit } from "../utils/pagination";

const Posts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || defaultPage;
  const limit = parseInt(searchParams.get("limit")) || defaultLimit;
  const searchQuery = searchParams.get("search") || "";

  const {
    posts: postsSearch,
    total: totalSearch,
    isLoading: isLoadingSearch,
    error: errorSearch,
  } = useFetchSearchMyPosts(searchQuery, page, limit);
  const {
    posts: postsDefault,
    total: totalDefault,
    isLoading: isLoadingDefault,
    error: errorDefault,
  } = useFetchMyPosts(page, limit);

  const posts = searchQuery ? postsSearch : postsDefault;
  const total = searchQuery ? totalSearch : totalDefault;
  const isLoading = searchQuery ? isLoadingSearch : isLoadingDefault;
  const error = searchQuery ? errorSearch : errorDefault;
  const handlePageChange = (event, value) => {
    const newParams = { page: value, limit };

    // Only add searchQuery if it exists
    if (searchQuery) {
      newParams.search = searchQuery;
    }

    // Update the search params
    setSearchParams(newParams);
  };

  return (
    <>
      <Container component="main" maxWidth="xl">
        <Box
          sx={{
            padding: { xs: 0, sm: 4 }, // Zero padding on extra-small screens, padding 4 on small screens and above
          }}
        >
          {error && (
            <Snackbar open autoHideDuration={6000}>
              <Alert severity="error">{error}</Alert>
            </Snackbar>
          )}
          <PostList
            posts={posts}
            isLoading={isLoading}
            showEdit={true}
            showDelete={true}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 2,
              mb: 5,
            }}
          >
            <Pagination
              count={Math.ceil(total / limit)}
              page={page}
              onChange={handlePageChange}
              color="primary"
              sx={{ mb: { xs: 4, sm: 2 } }}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Posts;
