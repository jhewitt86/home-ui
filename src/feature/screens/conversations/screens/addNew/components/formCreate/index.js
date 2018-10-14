import React from "react";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import Formsy from "formsy-react";
import { Redirect } from "react-router-dom";
import { Loader } from "common/components";
import { FormInput, FormTextarea, FormSubmit } from "common/components/forms";
import * as actions from "../../../../duck/actions";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const POST_CONVERSATION = gql`
  mutation createMessage($title: String!, $body: String!, $public: Boolean!) {
    createMessage(title: $title, body: $body, public: $public) {
      id
      title
      body
      createdAt
      public
      user {
        id
        username
      }
    }
  }
`;

class FormNewConversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      sending: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate(prevProps) {}
  handleSubmit = result => {
    // this.props.actions.post(e);
    console.log(result);
    this.setState({
      sent: true,
      sending: false,
      createdId: result.data.createMessage.id
    });
  };
  render() {
    const redirect = <Redirect to={`/chat/${this.state.createdId}`} />;

    return (
      <div>
        {this.state.sent && redirect}
        <Mutation mutation={POST_CONVERSATION}>
          {(createMessage, { data }) => (
            <Formsy
              onSubmit={e =>
                this.setState(
                  {
                    seding: true
                  },
                  () => {
                    createMessage({
                      variables: {
                        title: e.Headline,
                        body: e.Post,
                        public: true
                      }
                    })
                      .then(result => this.handleSubmit(result))
                      .catch(error => this.setState({ error }));
                  }
                )
              }
            >
              <FormInput name="Headline" icon="label" autoFocus={1} />
              <FormTextarea name="Post" />
              <FormSubmit label="Post" />
            </Formsy>
          )}
        </Mutation>
        {this.state.sending && <Loader withContainer />}
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
