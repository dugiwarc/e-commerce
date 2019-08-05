import React from "react";
import "./PreviewCollection.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="PreviewCollection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
