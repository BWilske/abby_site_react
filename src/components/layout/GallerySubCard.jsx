import React from "react";
import PropTypes from "prop-types";

function GallerySubCard({ image, title }) {
  return (
    <div className=" w-96 bg-base-100 shadow-xl m-2">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title m-auto">{title}</h2>
      </div>
    </div>
  );
}

GallerySubCard.defaultProps = {
  image: "https://api.lorem.space/image/shoes?w=400&h=225",
  title: "weddings",
};

GallerySubCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default GallerySubCard;
