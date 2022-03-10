import { getPosts } from "../../api/posts";

const GET_MORE_POSTS = "GET_MORE_POSTS";

const getMorePostsActionCreator = (newPosts) => {
  return {
    type: GET_MORE_POSTS,
    payload: newPosts
  };
};

export const getPostsThunkCreator = () => {
  return (dispatch) => {
    getPosts()
      .then((resp) => {
        dispatch(getMorePostsActionCreator(resp));
      });
  };
};

const initialState = {
  firstPosts: [
    {
      id: 1,
      src: require("../../static/image/desktop/img1.png"),
      title: "Instagram FAQ — All You Need To Know",
      url: "https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b",
      date: Date.now()
    },
    {
      id: 2,
      src: require("../../static/image/desktop/img2.png"),
      title: "DMEXCO 2019 — Meet Combin in Cologne",
      url: "https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63",
      date: Date.now()
    },
    {
      id: 3,
      src: require("../../static/image/desktop/img3.png"),
      title: "Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1",
      url: "https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7",
      date: Date.now()
    },
  ],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MORE_POSTS: {
      return { ...state, newPosts: action.payload };
    }

    default:
      return state;

  }
};

export default postsReducer;