import React from "react";
import { withFormsy } from "formsy-react";
import { FieldWrap, TextareaField } from "./style";

class FormTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.focusField = this.focusField.bind(this);
    this.blurField = this.blurField.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }
  focusField = e => {
    // console.log("focus");
  };
  blurField = e => {
    // console.log("blur");
  };
  changeValue = e => {
    // console.log(e);
    this.props.setValue(e.currentTarget.value);
  };
  render() {
    return (
      <FieldWrap noPadding={this.props.noPadding}>
        <TextareaField
          name={this.props.name}
          placeholder={this.props.label || this.props.name}
          label="Headline"
          onFocus={this.focus}
          onBlur={this.blur}
          onChange={this.changeValue}
          value={this.props.getValue() || ""}
          expandOnFocus={this.props.expandOnFocus}
          noBorder={this.props.noBorder}
        />
      </FieldWrap>
    );
  }
}

export default withFormsy(FormTextarea);
