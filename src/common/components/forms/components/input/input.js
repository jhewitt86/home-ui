import React from "react";
import { withFormsy } from "formsy-react";
import { MaterialIcon } from "common/components";
import { FieldWrap, IconWrap, InputField } from "./style";

class FormInput extends React.Component {
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
    this.props.setValue(e.currentTarget.value);
  };
  render() {
    return (
      <FieldWrap noPadding={this.props.noPadding}>
        <InputField
          type={this.props.type || "text"}
          name={this.props.name}
          placeholder={this.props.name}
          label="Headline"
          onFocus={this.focus}
          onBlur={this.blur}
          onChange={this.changeValue}
          value={this.props.getValue() || this.props.defaultValue || ""}
          autoFocus={this.props.autoFocus}
          autoComplete={!this.props.autoComplete && "off"}
        />
        <IconWrap>
          <MaterialIcon icon={this.props.icon || "label"} size={18} />
        </IconWrap>
      </FieldWrap>
    );
  }
}

export default withFormsy(FormInput);
