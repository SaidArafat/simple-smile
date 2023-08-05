"use client";
import React from "react";

const Map = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md w-full md:w-2/4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714.844236602147!2d31.7941693823455!3d30.727157131817833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f824bc7f8cae43%3A0x72235fdd5a990cde!2zQWJ1IERoYWJpIElzbGFtaWMgQmFuayAtIEFESUIgRWd5cHQgLSDZhdi12LHZgSDYo9io2Ygg2LjYqNmKINin2YTYpdiz2YTYp9mF2Yo!5e0!3m2!1sen!2seg!4v1690749811726!5m2!1sen!2seg"
        className="w-full h-96"
      ></iframe>
    </div>
  );
};

export default Map;
