import React from "react";
import MaterialIcon from "../materialIcon";
import Space from "../space";
import Grid from "../grid";
import Avatar from "../avatar";
import { calendarStrings } from "../../../constants";
// import Analyze from "api";
import {
  ChatList,
  ListedChat,
  ChatLabel,
  ChatSummary,
  ChatDetail,
  PrivateDetail,
  TriggerDetail,
  TimeContainer,
  Time
} from "./style";
import { People } from "data";

class ListedChatItem extends React.Component {
  render() {
    const { item, i } = this.props;
    const trigger = null;
    const { title, body, user, replies, participants, createdAt } = item;
    const dateTime = new Date(parseInt(createdAt));

    console.log(calendarStrings);

    return (
      <ListedChat public={item.public}>
        <Space>
          <Grid cells={2} template="3em auto" gap="lg">
            <ChatList>
              <Avatar item={user} label={0} />
            </ChatList>
            <div>
              <ChatLabel>{title}</ChatLabel>
              <ChatSummary>{body}</ChatSummary>
            </div>
          </Grid>
        </Space>
        <Grid cells={5}>
          <ChatDetail>
            <MaterialIcon icon="forum" color="inherit" size={16} />
            {replies || 0}
          </ChatDetail>
          <ChatDetail>
            <MaterialIcon icon="people" color="inherit" size={16} />
            {participants || 1}
          </ChatDetail>
          <div />
          <TimeContainer>
            <Time calendar={calendarStrings}>{dateTime}</Time>
          </TimeContainer>
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
      </ListedChat>
    );
  }
}

export default ListedChatItem;
