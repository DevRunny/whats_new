import { connect } from "react-redux";
import Main from "./Main";
import { getPostsThunkCreator } from "../redux/posts/postsReducer";

const mapStateToProps = (state) => {
    return {
        firstPosts: state.firstPosts,
        posts: state.newPosts
    };

};

const MainContainer = connect(mapStateToProps, {
    getPostsThunkCreator,
})(Main);

export default MainContainer;