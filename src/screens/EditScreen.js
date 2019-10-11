import React, { useContext } from "react";

import BlogpostForm from "../components/BlogPostForm";
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id"),
    { state, editBlogToPost } = useContext(BlogContext),
    blogpost = state.find(blog => blog.id === id),
    { title, content } = blogpost,
    { navigate } = navigation;
  return (
    <BlogpostForm
      header="Edit a blog"
      button="Save Blog"
      initialValue={{ title, content }}
      onSubmit={(title, content) => {
        editBlogToPost(id, title, content, () => navigate("Index"));
      }}
    />
  );
};

export default EditScreen;
