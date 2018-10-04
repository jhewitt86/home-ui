import React from "react";
import { FlexibleGrid } from "./style";

class Grid extends React.Component {
  render() {
    return <FlexibleGrid {...this.props} />;
  }
}

export default Grid;
