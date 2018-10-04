import React from "react";
import { Icon } from "./style";

class MaterialIcon extends React.Component {
  render() {
    return (
      <Icon
        className="material-icons"
        style={{ fontSize: this.props.size, color: this.props.color }}
      >
        {this.props.icon}
      </Icon>
    );
  }
}
export default MaterialIcon;
