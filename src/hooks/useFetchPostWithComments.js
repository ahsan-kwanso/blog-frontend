// src/hooks/useFetchPostWithComments.js
import { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";
import { useError } from "./useError";

const useFetchPostWithComments = (postId, refresh) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useError();

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 400));
        const response = await axiosInstance.get(`/post/${postId}/comments`);
        setPost(response.data);
        return response.data;
      } catch (err) {
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId, refresh, setError]);

  return { post, loading, error };
};

export default useFetchPostWithComments;
