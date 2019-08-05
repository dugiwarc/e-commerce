import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";

export default class Shop extends Component {
  state = {
    collection: SHOP_DATA
  };

  render() {
    const { collection } = this.state;
    return (
      <div className="Shop">
        {collection.map(({ id, ...otherProps }) => (
          <PreviewCollection key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
