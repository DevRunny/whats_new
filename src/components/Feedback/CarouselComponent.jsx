import React, {Component} from "react";
import Carousel from "./Carousel";

class CarouselComponent extends Component {

  componentDidMount() {
    this.props.getFeedbackThunkCreator();
  }

  render() {
    return <Carousel
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

export default CarouselComponent;
