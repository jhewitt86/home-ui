import React from "react";
import Formsy from "formsy-react";
import { Redirect } from "react-router-dom";
import { Grid } from "common/components";
import { FormInput, FormTextarea, FormSubmit } from "common/components/forms";
import { FormWrapper } from "./style";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const POST_COMMENT = gql`
  mutation createComment($messageId: String!, $body: String!) {
    createComment(messageId: $messageId, body: $body) {
      id
      body
      createdAt
      user {
        id
        username
        avatar
      }
    }
  }
`;

class FormNewComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageId: this.props.messageId,
      sent: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate(prevProps) {}
  handleSubmit = e => {
    this.setState({
      sent: true
    });
    this.commentForm.reset();
  };
  resetForm() {
    this.commentForm.reset();
  }
  render() {
    return (
      <FormWrapper>
        <Mutation mutation={POST_COMMENT}>
          {(createMessage, { data }) => (
            <Formsy
              ref={e => {
                this.commentForm = e;
              }}
              onSubmit={e => {
                if (e.Reply) {
                  createMessage({
                    variables: {
                      messageId: this.props.messageId,
                      body: e.Reply
                    }
                  })
                    .then(this.handleSubmit())
                    .catch(error => this.setState({ error }));
                } else {
                }
              }}
            >
              <Grid template="auto 2.5em" end>
                <FormTextarea
                  name="Reply"
                  label="Add reply"
                  expandOnFocus
                  noPadding
                  noBorder
                />
                <FormSubmit
                  noPadding
                  label="Post"
                  icon="add_comment"
                  hideLabel
                  circle
                />
              </Grid>
            </Formsy>
          )}
        </Mutation>
      </FormWrapper>
    );
  }
}

export default FormNewComment;
