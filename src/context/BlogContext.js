// import React, { useState } from "react";
// import React, { useReducer } from "react";
import CreateDataContext from "./CreateDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "get_blogposts":
      return payload;
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: payload.title,
          content: payload.content
        }
      ];
    case "edit_blogpost":
      return state.map(blogPost =>
        blogPost.id === payload.id ? payload : blogPost
      );
    case "delete_blogpost":
      return state.filter(blogPost => blogPost.id != payload);
    default:
      return state;
  }
};

const getBlogPost = dispatch => {
  return async () => {
    const { data } = await jsonServer.get("/blogPosts");
    dispatch({ type: "get_blogposts", payload: data });
  };
};

const addBlogToPost = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogPosts", { title, content });
    // dispatch({ type: "add_blogpost", payload: { title, content } });
    callback();
  };
};
const deleteBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogPosts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
const editBlogToPost = dispatch => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogPosts/${id}`, { title, content });
    // dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    callback();
  };
};
export const { Context, Provider } = CreateDataContext(blogReducer, {
  getBlogPost,
  addBlogToPost,
  editBlogToPost,
  deleteBlogPost
});

// const BlogContext = React.createContext();

// const blogReducer = (state, action) => {
//   const { type } = action;
//   switch (type) {
//     case "add_blogpost":
//       return [...state, { title: `Blog Post #${state.length + 1}` }];
//     default:
//       return state;
//   }
// };

// export const BlogProvider = ({ children }) => {
//   // const [blogPosts, setBlogPost] = useState([]);
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);
//   // const addBlogToPost = () => {
//   //   setBlogPost([
//   //     ...blogPosts,
//   //     { title: `Blog Post #${blogPosts.length + 1}` }
//   //   ]);
//   // };
//   const addBlogToPost = () => {
//     dispatch({ type: "add_blogpost" });
//   };
//   return (
//     <BlogContext.Provider value={{ blogPosts, addBlogToPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;
