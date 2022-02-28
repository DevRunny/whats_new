import React from "react";
import Carousel from "./Carousel";
import {changeCurrentSlideActionCreator, getFeedbackThunkCreator} from "../../redux/feedback/feedbackReducer";
import {connect} from "react-redux";
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
}) (Carousel)

export default CarouselContainer;