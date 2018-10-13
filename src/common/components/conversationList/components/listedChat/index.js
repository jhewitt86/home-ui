import React from "react";
import MaterialIcon from "../../../materialIcon";
import Space from "../../../space";
import Grid from "../../../grid";
import Avatar from "../../../avatar";
import TimeStamp from "../../../timeStamp";
// import Analyze from "api";
import {
  ChatList,
  ListedChat,
  ChatLink,
  ChatLabel,
  ChatSummary,
  ChatOverlay,
  ChatDetail,
  PrivateDetail,
  TriggerDetail
} from "./style";

class ListedChatItem extends React.Component {
  render() {
    const { item } = this.props;
    const trigger = null;
    const { title, body, user, commentCount, participants, createdAt } = item;
    return (
      <ListedChat public={item.public}>
        <ChatLink to={`/chat/${item.id}`}>
          <Space>
            <Grid cells={2} template="4em auto" gap="md">
              <Avatar item={user} label={0} />
              <div>
                <TimeStamp time={createdAt} user={user} />
                <ChatLabel>{title}</ChatLabel>
                <ChatSummary>
                  {body}
                  <ChatOverlay />
                </ChatSummary>
              </div>
            </Grid>
          </Space>
          <Grid cells={5}>
            <ChatDetail>
              <MaterialIcon icon="forum" color="inherit" size={16} />
              {commentCount || 0}
            </ChatDetail>
            <ChatDetail>
              <MaterialIcon icon="people" color="inherit" size={16} />
              {participants || 1}
            </ChatDetail>
            <div />
          </Grid>
          {!item.public && (
            <PrivateDetail>
              <MaterialIcon icon="lock_open" color="inherit" size={18} />
            </PrivateDetail>
          )}
          {trigger && (
            <TriggerDetail>
              <MaterialIcon icon="error" color="inherit" size={18} />
            </TriggerDetail>
          )}
        </ChatLink>
      </ListedChat>
    );
  }
}

export default ListedChatItem;
