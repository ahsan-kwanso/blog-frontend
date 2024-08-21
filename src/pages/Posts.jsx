import React from "react";
import { useSearchParams } from "react-router-dom";
import {
  Container,
  Box,
  Pagination,
  Snackbar,
  Alert,
  Typography,
} from "@mui/material";
import PostList from "../components/PostList";
import useFetchPosts from "../hooks/useFetchPosts";
import useFetchSearchPosts from "../hooks/useFetchSearchPosts";
import { defaultPage, defaultLimit } from "../utils/pagination";
import SearchField from "../components/SearchField";
import CreatePostButton from "../components/CreatePostButton";
import Sidebar from "../components/Sidebar";

const Posts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || defaultPage;
  const limit = parseInt(searchParams.get("limit")) || defaultLimit;
  const searchQuery = searchParams.get("search") || "";
  const isMyPosts = searchParams.get("filter") === "my-posts";

  const {
    posts: postsSearch,
    total: totalSearch,
    isLoading: isLoadingSearch,
    error: errorSearch,
  } = useFetchSearchPosts(searchQuery, page, limit);
  const {
    posts: postsDefault,
    total: totalDefault,
    isLoading: isLoadingDefault,
    error: errorDefault,
  } = useFetchPosts(isMyPosts, page, limit);

  const posts = searchQuery ? postsSearch : postsDefault;
  const total = searchQuery ? totalSearch : totalDefault;
  const isLoading = searchQuery ? isLoadingSearch : isLoadingDefault;
  const error = searchQuery ? errorSearch : errorDefault;

  const handlePageChange = (event, value) => {
    const newParams = { page: value, limit };

    if (searchQuery) {
      newParams.search = searchQuery;
    }
    if (isMyPosts) {
      newParams.filter = "my-posts";
    }

    setSearchParams(newParams);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Container
        component="main"
        maxWidth="xl"
        sx={{ marginLeft: { xs: 7, sm: 10 }, flexGrow: 1 }}
      >
        <Box
          sx={{
            padding: { xs: 0, sm: 4 },
          }}
        >
          <Box
            sx={{
              top: 64,
              zIndex: 1,
              backgroundColor: "inherit",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
              mt: {
                xs: 10,
                sm: 5,
                md: 3,
              },
              ml: 2,
              mr: 2,
            }}
          >
            <SearchField />
            <CreatePostButton />
          </Box>
          {error && (
            <Snackbar open autoHideDuration={6000}>
              <Alert severity="error">{error}</Alert>
            </Snackbar>
          )}
          {posts.length === 0 && (
            <Typography variant="h6" align="center">
              No posts available.
            </Typography>
          )}
          <>
            <PostList
              posts={posts}
              isLoading={isLoading}
              showEdit={isMyPosts ? true : false}
              showDelete={isMyPosts ? true : false}
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
          </>
        </Box>
      </Container>
    </Box>
  );
};

export default Posts;
