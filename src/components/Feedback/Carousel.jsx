import React, {Component} from "react";
import CarouselFunc from "./CarouselFunc";

class Carousel extends Component {

  componentDidMount() {
    this.props.getFeedbackThunkCreator();
  }

  render() {
    return <CarouselFunc
        activeSlide={this.props.activeSlide}
        name={this.props.activeSlide.name}
        text={this.props.activeSlide.text}
        instagram_username={this.props.activeSlide.instagram_username}
        currentSlide={this.props.activeSlide.currentSlide}
        newFeedback={this.props.newFeedback}
        changeCurrentSlide={this.props.changeCurrentSlideActionCreator}
    />
  }
}

export default Carousel;
