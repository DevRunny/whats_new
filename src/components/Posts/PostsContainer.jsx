import { connect } from "react-redux";
import PostsComponent from "./PostsComponent";
import { getPostsThunkCreator } from "../../redux/posts/postsReducer";

const mapStateToProps = (state) => {
  return {
    posts: state.posts.newPosts,
  };
};

const PostsContainer = connect(mapStateToProps, {
  getPostsThunkCreator
})(PostsComponent);

export default PostsContainer;