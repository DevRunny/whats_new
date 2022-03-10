import React from "react";
import arrow from "../../images/arrow.svg";

const Carousel = (props) => {
  return (
    <>
      <div className="main__reviews">
        <h2>
          “{ props.newFeedback[props.currentSlide] ? props.newFeedback[props.currentSlide].text : props.text }„
        </h2>
      </div>
      <div className="main__name-reviewer">

        <h3>
          <span>{ props.newFeedback[props.currentSlide] ? props.newFeedback[props.currentSlide].name : props.name },</span>
          <p>{ props.newFeedback[props.currentSlide] ? props.newFeedback[props.currentSlide].instagram_username : props.instagram_username }</p>
        </h3>
      </div>
      <button
        disabled={ props.currentSlide === 0 }
        onClick={ () => {
          props.changeCurrentSlide(props.currentSlide - 1);
        }
        }
        className="btn btn-prev-slide"
      ><img src={ arrow } alt={ "arrow" } /></button>
      <button
        disabled={ props.currentSlide === 7 }
        onClick={ () => {
          props.changeCurrentSlide(props.currentSlide + 1);
        }
        }
        className="btn btn-next-slide"
      ><img src={ arrow } alt={ "arrow" } /></button>
    </>
  );
};

export default Carousel;