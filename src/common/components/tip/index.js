import React from "react";
import MaterialIcon from "../materialIcon";
import { TipWrapper, TipContainer } from "./style";

class Tip extends React.Component {
  render() {
    return (
      <TipWrapper>
        <TipContainer>
          <MaterialIcon icon="info" color="inherit" size={28} />
          <div>{this.props.msg}</div>
        </TipContainer>
      </TipWrapper>
    );
  }
}

export default Tip;
