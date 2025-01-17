import React from "react";
import Carousel from "react-elastic-carousel";
import IMG1 from "./img-landing/img-car.png";
import IMG2 from "./img-landing/img-car2.png";
import IMG3 from "./img-landing/img-car3.png";
import video_landing from "./img-landing/EveryoneVideo.mp4";
import "./styles/landingPage.modules.css";

const Landing = () => {
  const breakPoints = [
    { width: 100, itemsToShow: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
    { width: 1500, itemsToShow: 1 },
  ];
  return (
    <div>
      <video className="video_landing234" autoPlay loop muted>
        <source className="video-pre" src={video_landing} type="video/mp4" />
      </video>
      <div className="container-carrusel">
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={2500}
          itemPadding={[10, 10]}
          focusOnSelect={false}
          verticalMode
        >
          <img className="img-carrousel" src={IMG1} alt="carousel1" />

          <img className="img-carrousel" src={IMG2} alt="carousel2" />

          <img className="img-carrousel" src={IMG3} alt="carousel3" />
        </Carousel>
      </div>
    </div>
  );
};

export default Landing;
