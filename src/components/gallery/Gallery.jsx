import React, { useState } from "react";
import GalleryImg from "./GalleryImg";
import { data } from "../data";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { BiSearch } from "react-icons/bi";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState(data);
  const [searchTerm, setSearchTerm] = useState([]);
  const [term, setTerm] = useState("");

  const onDragEnd = (event) => {
    console.log("onDragEnd called:", event);
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setImageUrls((imageUrls) => {
      const oldIndex = imageUrls.findIndex((data) => data.id === active.id);
      const newIndex = imageUrls.findIndex((data) => data.id === over.id);
      return arrayMove(imageUrls, oldIndex, newIndex);
    });
  };

  const searchImages = (searchTerm) => {
    const searchedImages = imageUrls.filter((data) => {
      return data.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchTerm(searchedImages);
    console.log("happened");
    console.log(searchedImages);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchImages(term);
    // setTerm("");
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="mt-12 py-4 w-full flex justify-center items-center">
      <div className="w-full">
        <div className="">
          <form
            className="search flex items-center my-4 justify-center w-full"
            onSubmit={handleSubmit}
          >
            <input
              value={term}
              onChange={handleChange}
              type="text"
              className="relative border-2 border-solid rounded-lg px-2 md:px-6 py-1 md:py-3 w-1/2 text-xs md:text-base"
              placeholder="Search by Image name"
            />
            <button className="relative">
              <BiSearch className="absolute w-3 md:w-6 h-3 md:h-6 -top-1 md:-top-2 right-2" />
            </button>
          </form>
        </div>
        {term === "" ? (
          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={onDragEnd}
            >
              <SortableContext
                items={imageUrls}
                strategy={verticalListSortingStrategy}
              >
                {imageUrls.map((img) => (
                  <GalleryImg image={img} key={img.id} name={img.name} />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        ) : (
          <div className="container w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={onDragEnd}
            >
              <SortableContext
                items={imageUrls}
                strategy={verticalListSortingStrategy}
              >
                {searchTerm.map((img) => (
                  <GalleryImg image={img} key={img.id} name={img.name} />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
