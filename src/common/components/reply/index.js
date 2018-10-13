import React from "react";
import Avatar from "../avatar";
import Grid from "../grid";
import TimeStamp from "../timeStamp";
import { ListedReply, ReplySpacer, ReplyBubble, MessageContent } from "./style";

class ChatReply extends React.Component {
  render() {
    const { body, user, createdAt } = this.props.item;
    return (
      <ListedReply>
        <ReplySpacer>
          <Grid template="3em auto" gap={"md"}>
            <Avatar item={user} />
            <ReplyBubble>
              <TimeStamp time={createdAt} user={user} />
              <MessageContent>{body}</MessageContent>
            </ReplyBubble>
          </Grid>
        </ReplySpacer>
      </ListedReply>
    );
  }
}

export default ChatReply;
