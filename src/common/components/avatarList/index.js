import React from "react";
import uuid from "uuid";
import Avatar from "../avatar";
import { AvatarGrid } from "./style";

class AvatarList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }
  render() {
    const items = this.state.data.map(item => (
      <Avatar key={uuid.v4()} item={item} label={1} />
    ));

    return <AvatarGrid size={this.state.data.length}>{items}</AvatarGrid>;
  }
}

export default AvatarList;
