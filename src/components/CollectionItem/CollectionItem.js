import React from "react";
import "./CollectionItem.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  const imageStyles = {
    backgroundImage: `url(${imageUrl})`
  };
  return (
    <div className="CollectionItem">
      <div className="image" style={imageStyles} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
