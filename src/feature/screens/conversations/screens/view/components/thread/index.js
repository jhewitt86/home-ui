import React from "react";
import uuid from "uuid";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { ChatReply } from "common/components";
import { ReplyList } from "./style";

const COMMENT_SUBSCRIPTION = gql`
  subscription {
    commentCreated {
      comment {
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
  }
`;

const DELETE_COMMENT = gql`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id) {
      id
    }
  }
`;

class Thread extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentWillMount() {
    this.setState({
      comments: this.props.data || []
    });

    this.props.subscribeToMore({
      document: COMMENT_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const newComment = subscriptionData.data.commentCreated.comment;
        const updateData = [newComment, ...this.state.comments];

        this.setState({
          comments: updateData
        });

        const updateComments = {
          comments: {
            edges: updateData,
            __typename: "CommentConnection"
          }
        };
        return updateComments;
      },
      onError: err => console.error("Error", err)
    });
  }

  render() {
    let { comments } = this.state || [];

    return (
      <Mutation mutation={DELETE_COMMENT}>
        {(deleteComment, { data }) => (
          <ReplyList>
            {comments.map((item, i) => (
              <ChatReply
                onDelete={() => {
                  deleteComment({
                    variables: {
                      id: item.id
                    }
                  })
                    .then(response => {
                      comments = comments.filter(comment => comment != item);
                      this.setState({
                        comments: comments
                      });
                    })
                    .catch(error => console.log(error));
                }}
                i={i}
                item={item}
                key={uuid.v4()}
              />
            ))}
          </ReplyList>
        )}
      </Mutation>
    );
  }
}

export default Thread;
