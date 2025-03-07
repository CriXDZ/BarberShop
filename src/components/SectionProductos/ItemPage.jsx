import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

const Product = ({
  id,
  image,
  title,
  description,
  price,
  rating,
  isNew,
  discount,
  link,
}) => {
  const renderRating = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  };

  return (
    <Link to={link} className="featured-card" id={id}>
      <div className="featured-image-container">
        <img src={image} alt={title} className="featured-image" />
        {isNew && <div className="badge">New</div>}
        {discount && <div className="badge badge-sale">Sale</div>}
      </div>

      <div className="featured-card-content">
        <h3 className="featured-card-title">{title}</h3>
        <div className="featured-card-rating">{renderRating()}</div>
        <p className="featured-card-description">{description}</p>
        <p className="featured-card-price">
          ${price.toFixed(2)}
          {discount && (
            <span className="featured-card-price-discount">
              ${discount.toFixed(2)}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
};

export default Product;
