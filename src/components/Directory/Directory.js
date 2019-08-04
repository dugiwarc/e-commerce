import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import sections from "./directory.data";
import "./Directory.scss";

class Directory extends React.Component {
  render() {
    return (
      <div className="Directory">
        {sections.map(({ id, ...otherProps }) => {
          return <MenuItem key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
