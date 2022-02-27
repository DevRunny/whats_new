import React, {useState} from "react";

function Carousel() {
  const [currSlide, setCurrSlide] = useState();

  return (
      <>
        <div className="main__reviews">
          <h2>
            “
            {
              "I registered on the AidaForm website, having stumbled upon one of the form templates, which I really liked. My first form, which is still active by the way, was published 20 minutes after I found the AidaForm website and created an account!"
            }
            ”
          </h2>
        </div>
        <div className="main__name-reviewer">
          <h3>
            <b>{"Ben Johnson"},</b> {"web-store owner"}
          </h3>
        </div>
        <button
            className="btn btn-prev-slide"
            onClick={() => {
              currSlide > 0 && setCurrSlide(currSlide - 1);
            }}
        />
        <button
            className="btn btn-next-slide"
            onClick={() => {
              setCurrSlide(currSlide + 1);
            }}
        />
      </>
  );
}

export default Carousel;
