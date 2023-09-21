import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const GalleryImg = ({ image, name }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="image-card-containerh-48 border-2 my-4 text-center"
    >
      <img
        className="w-full h-full object-cover"
        src={image.imageUrl}
        alt={image.name}
      />
      <div className="image-tag">{name}</div>
    </div>
  );
};

export default GalleryImg;
