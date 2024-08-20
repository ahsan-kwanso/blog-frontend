export const backend_url = process.env.REACT_APP_BACKEND_URL;
export const API_URL = {
  post: `/posts`,
  comment: `/comments`,
  myPosts: `/posts/me`,
  myPostsSearch: `/posts/me/search`,
  searchPosts: `/posts/search`,
  me: `/users/me`,
  signup: `/auth/signup`,
  signin: `/auth/signin`,
};

export const PAGE_URL = {
  base: `/`,
  login: `/login`,
  signup: `/signup`,
  posts: `/posts`,
  myPosts: `/my-posts`,
  createPost: `/posts/create-post`,
  editPost: `/posts/edit-post/:postId`,
  profile: `/profile`,
  viewPost: `/posts/:postId`,
};
