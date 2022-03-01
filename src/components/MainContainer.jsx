import { connect } from "react-redux";
import Main from "./Main";
import { getPostsThunkCreator } from "../redux/posts/postsReducer";

import React from "react";

const mapStateToProps = (state) => {
  return {
    firstPosts: state.posts.firstPosts,
    posts: state.posts.newPosts,
  };
};

const MainContainer = connect(mapStateToProps, {
  getPostsThunkCreator
})(Main);

export default MainContainer;
