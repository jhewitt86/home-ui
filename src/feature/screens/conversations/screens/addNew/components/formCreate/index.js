import React from "react";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import Formsy from "formsy-react";
import { Redirect } from "react-router-dom";
import { FormInput, FormTextarea, FormSubmit } from "common/components/forms";
import * as actions from "../../../../duck/actions";

class FormNewConversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate(prevProps) {
    console.log(prevProps);
    console.log(this.props);
  }
  handleSubmit = e => {
    this.props.actions.post(e);
    this.setState({
      sent: true
    });
  };
  render() {
    const redirect = <Redirect to="/conversations" />;
    return (
      <div>
        {this.state.sent && redirect}
        <Formsy onSubmit={this.handleSubmit}>
          <FormInput name="Headline" icon="label" autoFocus={1} />
          <FormTextarea name="Post" />
          <FormSubmit label="Post" />
        </Formsy>
      </div>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  return { conversations: store.conversations };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(FormNewConversation);
