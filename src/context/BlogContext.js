// import React, { useState } from "react";
// import React, { useReducer } from "react";
import CreateDataContext from "./CreateDataContext";

const blogReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`
        }
      ];
    case "delete_blogpost":
      return state.filter(blogPost => blogPost.id != payload);
    default:
      return state;
  }
};
const addBlogToPost = dispatch => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};
const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { addBlogToPost, deleteBlogPost },
  []
);

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
