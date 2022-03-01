import {connect} from "react-redux";
import CarouselComponent from "./CarouselComponent";
import {changeCurrentSlideActionCreator, getFeedbackThunkCreator} from "../../redux/feedback/feedbackReducer";
import {newActiveSlideActionCreator} from "../../redux/feedback/feedbackReducer";

const mapStateToProps = (state) => {
  return {
    newFeedback: state.feedback.slides.newFeedback,
    activeSlide: state.feedback.slides.activeSlide
  }
}

const CarouselContainer = connect (mapStateToProps, {
  getFeedbackThunkCreator,
  newActiveSlideActionCreator,
  changeCurrentSlideActionCreator
}) (CarouselComponent)

export default CarouselContainer;