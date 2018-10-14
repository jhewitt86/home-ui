import React from "react";
import gql from "graphql-tag";
import {
  Avatar,
  Grid,
  Space,
  TimeStamp,
  Wrap,
  MaterialIcon,
  Loader
} from "common/components";
import FormNewComment from "../addComment";
import { MessageWrapper, MessageText, Headline, CommentStatus } from "./style";

const MESSAGE_UPDATED = gql`
  subscription {
    messageUpdated {
      message {
        id
        title
        body
        createdAt
        commentCount
        comments {
          id
          body
          createdAt
          user {
            id
            username
            avatar
          }
        }
        user {
          id
          username
          avatar
        }
      }
    }
  }
`;

class Message extends React.Component {
  componentWillMount() {
    this.setState({
      message: this.props.item
    });

    this.props.subscribeToMore({
      document: MESSAGE_UPDATED,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        console.log(prev);
        console.log(subscriptionData);
        const newMessage = subscriptionData.data.messageUpdated.message;
        const update = {
          message: newMessage,
          __typename: "MessageUpdated"
        };
        this.setState({
          message: newMessage
        });

        return update;
      },
      onError: err => console.error("Error", err)
    });
  }
  render() {
    const {
      user,
      title,
      body,
      createdAt,
      commentCount,
      id
    } = this.state.message;

    return (
      <MessageWrapper>
        <Wrap>
          <Space>
            <Grid template="4em auto" gap="md">
              <Avatar item={user} />
              <div>
                <TimeStamp time={createdAt} user={user} />
                <Headline>{title}</Headline>
              </div>
            </Grid>
            <MessageText>{body}</MessageText>
            <Space>
              <CommentStatus>
                <FormNewComment messageId={id} />
              </CommentStatus>
            </Space>
            <Grid template="1.5em auto" middle>
              <MaterialIcon icon="arrow_downward" size="20" />
              {commentCount > 0
                ? `${commentCount} ${commentCount > 1 ? "replies" : "reply"}`
                : "No replies yet"}
            </Grid>
          </Space>
        </Wrap>
      </MessageWrapper>
    );
  }
}

export default Message;
