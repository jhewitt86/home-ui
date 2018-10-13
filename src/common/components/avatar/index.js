import React from "react";
import { MapItem, ItemBubble, AlertBubble, ItemLabel } from "./style";

class Avatar extends React.Component {
  render() {
    const { item } = this.props;

    const image = <ItemBubble background={item.avatar} />;
    return (
      <MapItem size={1}>
        {image}
        {this.props.label === 1 && (
          <ItemLabel alerts={item.alerts}>
            {item.name}
            {item.alerts > 0 && <AlertBubble />}
          </ItemLabel>
        )}
      </MapItem>
    );
  }
}

export default Avatar;
