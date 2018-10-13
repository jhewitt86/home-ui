import React from "react";
import uuid from "uuid";
import gql from "graphql-tag";
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

class Thread extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount() {
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

    const items = comments.map((item, i) => {
      return <ChatReply i={i} item={item} key={uuid.v4()} />;
    });

    return <ReplyList>{items}</ReplyList>;
  }
}

export default Thread;
