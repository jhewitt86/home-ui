import React from "react";
import { MaterialIcon, Grid } from "common/components";
import { FieldWrap, SubmitIconWrap, SubmitButton } from "./style";

class FormSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.focusField = this.focusField.bind(this);
    this.blurField = this.blurField.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }
  focusField = () => {
    console.log("focus");
  };
  blurField = () => {
    console.log("blur");
  };
  changeValue = e => {
    console.log(e);
    this.props.setValue(e.currentTarget.value);
  };
  render() {
    const Icon = (
      <SubmitIconWrap>
        <MaterialIcon icon={this.props.icon || "check_circle"} size={16} />
      </SubmitIconWrap>
    );
    return (
      <FieldWrap noPadding={this.props.noPadding}>
        <SubmitButton
          onFocus={this.focus}
          onBlur={this.blur}
          onChange={this.changeValue}
          circle={this.props.circle}
        >
          {!this.props.hideLabel ? (
            <Grid template="1.5em auto" inline={1} gap="xs">
              {Icon}
              {this.props.label || "Submit"}
            </Grid>
          ) : (
            Icon
          )}
        </SubmitButton>
      </FieldWrap>
    );
  }
}

export default FormSubmit;
