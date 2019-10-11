import React, { useContext } from "react";

import BlogpostForm from "../components/BlogPostForm";

import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogToPost } = useContext(BlogContext),
    { navigate } = navigation;
  return (
    <BlogpostForm
      header="Create a new blog"
      button="Add Blog"
      onSubmit={(title, content) =>
        addBlogToPost(title, content, () => navigate("Index"))
      }
    />
  );
};

export default CreateScreen;
