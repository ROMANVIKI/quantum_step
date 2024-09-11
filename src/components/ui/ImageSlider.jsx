import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = ({ images }) => {
  return (
    <div className="relative w-screen h-[95vh] overflow-hidden flex items-center justify-center">
      <SimpleImageSlider
        width={window.innerWidth}
        height={window.innerHeight} // Set height based on viewport height
        images={images}
        showBullets={false}
        slideDuration={1}
        showNavs={false}
        autoPlay={true}
        loop={true}
        className="w-screen h-full object-cover"
      />
    </div>
  );
};

export default ImageSlider;
