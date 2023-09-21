import React from "react";
import Gallery from "../components/gallery/Gallery";

const Contacts = () => {
  return (
    <div className="flex items-center justify-center p-4 md:p-10 w-screen h-auto lg:h-screen bg-gray-200">
      <div>
        <div className="text-center text-4xl font-bold text-rose-400">
          Image Gallery
        </div>
        <Gallery />
      </div>
    </div>
  );
};

export default Contacts;
