import React from "react";

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 md:grid-rows-2">
      <div className="row-span-2">
        <iframe
          src="https://www.youtube.com/embed/AibFT730a5I"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-96 md:h-full"
        ></iframe>
      </div>
      <div className="">
        <iframe
          src="https://www.youtube.com/embed/l9roUNYUWuM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-96"
        ></iframe>
      </div>
      <div className="">
        <iframe
          src="https://www.youtube.com/embed/bJaczr1IvAY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-96"
        ></iframe>
      </div>
    </div>
  );
};

export default Gallery;
