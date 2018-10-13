import React from "react";
import {
  Avatar,
  Grid,
  Space,
  TimeStamp,
  Wrap,
  MaterialIcon
} from "common/components";
import { MessageWrapper, MessageText, Headline, CommentStatus } from "./style";

class Message extends React.Component {
  render() {
    const { user, title, body, createdAt, commentCount } = this.props.item;
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
                <Grid template="1.5em auto" middle>
                  <MaterialIcon icon="arrow_downward" size="20" />
                  {commentCount > 0
                    ? `${commentCount} ${
                        commentCount > 1 ? "replies" : "reply"
                      }`
                    : "No replies yet"}
                </Grid>
              </CommentStatus>
            </Space>
          </Space>
        </Wrap>
      </MessageWrapper>
    );
  }
}

export default Message;
