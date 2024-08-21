import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CreatePost from "../pages/CreatePost";
import Posts from "../pages/Posts";
import EditPost from "../pages/EditPost";
import Profile from "../pages/Profile";
import PostView from "../pages/PostView";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";
import { PAGE_URL } from "../utils/settings";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path={PAGE_URL.login} element={<Login />} />
          <Route path={PAGE_URL.signup} element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={PAGE_URL.createPost} element={<CreatePost />} />
          <Route path={PAGE_URL.editPost} element={<EditPost />} />
          <Route path={PAGE_URL.profile} element={<Profile />} />
          <Route path={PAGE_URL.posts} element={<Posts />} />
          <Route path={PAGE_URL.base} element={<Posts />} />
          <Route path={PAGE_URL.viewPost} element={<PostView />} />
          <Route path={PAGE_URL.base} element={<Dashboard />} />
        </Route>
        {/* Other routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
