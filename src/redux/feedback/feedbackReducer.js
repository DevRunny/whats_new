import { getFeedBack } from "../../api/feedback";

const GET_FEEDBACK = "GET_FEEDBACK";
const SET_ACTIVE_SLIDE = "SET_ACTIVE_SLIDE";
const CHANGE_CURRENT_SLIDE = "CHANGE_CURRENT_SLIDE";

const getFeedbackActionCreator = (newFeedback) => {
  return {
    type: GET_FEEDBACK,
    payload: newFeedback,
  };
};

export const newActiveSlideActionCreator = (newActiveSlide, currentSlide) => {
  return {
    type : SET_ACTIVE_SLIDE,
    payload: newActiveSlide,
    currentSlide: currentSlide
  }
}

export const changeCurrentSlideActionCreator = (currentSlide) => {
  return {
    type : CHANGE_CURRENT_SLIDE,
    payload: currentSlide
  }
}

export const getFeedbackThunkCreator = () => {
  return (dispatch) => {
    getFeedBack().then((resp) => resp).then(data => {
      dispatch(getFeedbackActionCreator(data))
      dispatch(newActiveSlideActionCreator(data[0], 0));
    });
  };
};

const initialState = {
  slides: {
    newFeedback: [],
    activeSlide: {
      name: "Ben Johnson",
      instagram_username: "web-store owner",
      text: "I registered on the AidaForm website, having stumbled upon one of the form templates, which I really liked. My first form, which is still active by the way, was published 20 minutes after I found the AidaForm website and created an account!",
    },
  },
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEEDBACK: {
      return { ...state, slides: {...state.slides, newFeedback: action.payload} };
    }
    case SET_ACTIVE_SLIDE: {
      return {...state, slides: {...state.slides, activeSlide: {...action.payload, currentSlide: action.currentSlide}}}
    }
    case CHANGE_CURRENT_SLIDE: {
      return {...state, slides: {...state.slides, activeSlide: {...state.slides.activeSlide, currentSlide: action.payload}}}
    }

    default:
      return state;
  }
};

export default feedbackReducer;
