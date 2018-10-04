import React from "react";
import MaterialIcon from "../materialIcon";
import { ButtonWrap, Button, ButtonLink } from "./style";

class IconButton extends React.Component {
  render() {
    return (
      <ButtonWrap right={this.props.right}>
        {this.props.route ? (
          <ButtonLink to={this.props.route ? this.props.route : "#"}>
            <MaterialIcon
              icon={this.props.icon}
              color="inherit"
              size={this.props.size || 28}
            />
          </ButtonLink>
        ) : (
          <Button onClick={this.props.handleClick}>
            <MaterialIcon
              icon={this.props.icon}
              color="inherit"
              size={this.props.size || 28}
            />
          </Button>
        )}
      </ButtonWrap>
    );
  }
}

export default IconButton;
