import React, { useState } from "react";
import "./Gallery.css";
import images from "../data/images";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Gallery() {
  const [items, setItems] = useState(images);
  const [lightBox, setLightBox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter Images
  const filterItem = (category) => {
    if (category === "All") {
      setItems(images);
      return;
    }

    const newItems = images.filter((item) => item.category === category);
    setItems(newItems);
  };

  // Open Lightbox
  const openLightBox = (index) => {
    setCurrentIndex(index);
    setLightBox(true);
  };

  // Close Lightbox
  const closeLightBox = () => {
    setLightBox(false);
  };

  // Next Image
  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  };

  // Previous Image
  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  return (
    <div className="gallery-container">

      <h1>React Image Gallery</h1>

      <p className="subtitle">
        HTML • CSS • React • Responsive • Lightbox
      </p>

      {/* Filter Buttons */}

      <div className="buttons">

        <button onClick={() => filterItem("All")}>All</button>

        <button onClick={() => filterItem("Nature")}>Nature</button>

        <button onClick={() => filterItem("City")}>City</button>

        <button onClick={() => filterItem("Animals")}>Animals</button>

      </div>

      {/* Image Grid */}

      <div className="gallery">

        {items.map((item, index) => (

          <div
            className="card"
            key={item.id}
            onClick={() => openLightBox(index)}
          >

            <img src={item.image} alt={item.title} />

            <div className="overlay">

              <h3>{item.title}</h3>

              <p>{item.category}</p>

            </div>

          </div>

        ))}

      </div>

      {/* LightBox */}

      {lightBox && (

        <div className="lightbox">

          <button className="close" onClick={closeLightBox}>
            <FaTimes />
          </button>

          <button className="prev" onClick={prevImage}>
            <FaChevronLeft />
          </button>

          <img
            src={items[currentIndex].image}
            alt={items[currentIndex].title}
          />

          <button className="next" onClick={nextImage}>
            <FaChevronRight />
          </button>

          <div className="caption">

            <h2>{items[currentIndex].title}</h2>

            <p>{items[currentIndex].category}</p>

          </div>

        </div>

      )}

    </div>
  );
}

export default Gallery;