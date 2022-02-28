import React from "react";

const CarouselFunc = (props) => {
  return (
      <>
        <div className="main__reviews">
          <h2>
            “{props.newFeedback[props.currentSlide] ? props.newFeedback[props.currentSlide].text : props.text}„
          </h2>
        </div>
        <div className="main__name-reviewer">
          <h3>
            <b>{props.newFeedback[props.currentSlide] ? props.newFeedback[props.currentSlide].name : props.name},</b> {props.newFeedback[props.currentSlide] ? props.newFeedback[props.currentSlide].instagram_username : props.instagram_username}
          </h3>
        </div>
        <button
            disabled={props.currentSlide === 0}
            onClick={() => {
              props.changeCurrentSlide(props.currentSlide - 1)
            }
            }
            className="btn btn-prev-slide"
        />
        <button
            disabled={props.currentSlide === 7}
            onClick={() => {
              props.changeCurrentSlide(props.currentSlide + 1)
            }
            }
            className="btn btn-next-slide"
        />
      </>
  );
}

export default CarouselFunc;