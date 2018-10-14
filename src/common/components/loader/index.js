import React from "react";
import { LoadingContainer, LoadingCircle, CircleInner } from "./style";
class Loader extends React.Component {
  render() {
    return (
      <LoadingContainer withContainer={this.props.withContainer}>
        <LoadingCircle>
          <CircleInner count={1} />
          <CircleInner count={2} />
          <CircleInner count={3} />
          <CircleInner count={4} />
          <CircleInner count={5} />
          <CircleInner count={6} />
          <CircleInner count={7} />
        </LoadingCircle>
      </LoadingContainer>
    );
  }
}

export default Loader;
