import React from "react";
import Avatar from "../avatar";
import Grid from "../grid";
import TimeStamp from "../timeStamp";
import uuid from "uuid";
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
    const owner = AuthUtils.user.id === parseInt(user.id);
    let gridTemplate = "3em auto";
    if (owner) {
      gridTemplate = "auto 3em";
    }

    const userAvatar = <Avatar key={uuid.v4()} item={user} />;
    const userComment = (
      <ReplyBubble key={uuid.v4()}>
        <MessageElement>
          <TimeStamp time={createdAt} user={user} />
        </MessageElement>
        <MessageElement>
          <MessageContent>{body}</MessageContent>
        </MessageElement>
        {owner && (
          <MessageToolbar>
            <InlineButton onClick={this.props.onDelete}>Delete</InlineButton>
          </MessageToolbar>
        )}
      </ReplyBubble>
    );

    const composedReply = [userComment];
    owner ? composedReply.push(userAvatar) : composedReply.unshift(userAvatar);

    return (
      <ListedReply>
        <ReplySpacer>
          <Grid template={gridTemplate} gap={"md"}>
            {composedReply}
          </Grid>
        </ReplySpacer>
      </ListedReply>
    );
  }
}

export default ChatReply;
