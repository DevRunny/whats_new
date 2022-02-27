import { connect } from "react-redux";
import Main from "./Main";
import { getFeedbackThunkCreator } from "../redux/feedback/feedbackReducer";
import { getPostsThunkCreator } from "../redux/posts/postsReducer";

const mapStateToProps = (state) => {
  return {
    placeholder: state.feedback.placeholder,
    feedback: state.feedback.newFeedback,
    firstPosts: state.posts.firstPosts,
    posts: state.posts.newPosts,
  };
};

const MainContainer = connect(mapStateToProps, {
  getPostsThunkCreator,
  getFeedbackThunkCreator,
})(Main);

export default MainContainer;
