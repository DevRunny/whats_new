import { getFeedBack } from "../../api/feedback";

const GET_FEEDBACK = "GET_FEEDBACK";

const getMorePostsActionCreator = (newFeedback) => {
  return {
    type: GET_FEEDBACK,
    payload: newFeedback,
  };
};

export const getFeedbackThunkCreator = (newFeedback) => {
  return (dispatch) => {
    getFeedBack(newFeedback).then((resp) => {
      dispatch(getMorePostsActionCreator(resp));
    });
  };
};

const initialState = {
  placeholder: [
    {
      id: 1,
      name: "Ben Johnson",
      instagram_username: "web-store owner",
      text: "I registered on the AidaForm website, having stumbled upon one of the form templates, which I really liked. My first form, which is still active by the way, was published 20 minutes after I found the AidaForm website and created an account!",
    },
  ],
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEEDBACK: {
      return { ...state, newFeedback: action.payload };
    }

    default:
      return state;
  }
};

export default feedbackReducer;
