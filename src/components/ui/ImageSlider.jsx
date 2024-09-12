import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = ({ images }) => {
  return (
    <div className="relative w-screen max-sm:h-[30vh] h-[45vh] overflow-hidden flex items-center justify-center">
      <SimpleImageSlider
        width={window.innerWidth}
        height={window.innerHeight}
        images={images}
        showBullets={true}
        slideDuration={1}
        showNavs={true}
        autoPlay={true}
        loop={true}
        className="w-screen object-cover"
        navStyle={2}
        navSize={30}
        navMargin={20}
        navColor="#2596be" 
      />
    </div>
  );
};

export default ImageSlider;
