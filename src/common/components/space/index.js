import React from "react";
import { Pad } from "./style";

class Space extends React.Component {
  render() {
    return <Pad>{this.props.children}</Pad>;
  }
}

export default Space;
