import React from "react";
import Avatar from "../avatar";
import Grid from "../grid";
import TimeStamp from "../timeStamp";
import {
  ListedReply,
  ReplySpacer,
  ReplyBubble,
  MessageContent,
  MessageElement,
  MessageToolbar,
  InlineButton
} from "./style";
import AuthUtils from "utils/auth";

class ChatReply extends React.Component {
  render() {
    const { body, user, createdAt, id } = this.props.item;
    return (
      <ListedReply>
        <ReplySpacer>
          <Grid template="3em auto" gap={"md"}>
            <Avatar item={user} />
            <ReplyBubble>
              <MessageElement>
                <TimeStamp time={createdAt} user={user} />
              </MessageElement>
              <MessageElement>
                <MessageContent>{body}</MessageContent>
              </MessageElement>
              {AuthUtils.user.id === parseInt(user.id) && (
                <MessageToolbar>
                  <InlineButton onClick={this.props.onDelete}>
                    Delete
                  </InlineButton>
                </MessageToolbar>
              )}
            </ReplyBubble>
          </Grid>
        </ReplySpacer>
      </ListedReply>
    );
  }
}

export default ChatReply;
