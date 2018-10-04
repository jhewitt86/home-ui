import React from "react";
import uuid from "uuid";
import MaterialIcon from "../materialIcon";
import Space from "../space";
import Grid from "../grid";
import Avatar from "../avatar";
// import Analyze from "api";
import {
  ChatList,
  ListedChat,
  ChatLabel,
  ChatSummary,
  ChatDetail,
  PrivateDetail,
  TriggerDetail
} from "./style";
import { People } from "data";

class ConversationList extends React.Component {
  render() {
    const { data } = this.props;
    const items = data.map((item, i) => {
      /*
      let study = Analyze.Sentiment(`${item.name} ${item.summary}`);
      console.log(study.words.join(", "));
      study = Analyze.Topics(`${item.name} ${item.summary}`);
      console.log(study);
      */
      return (
        <ListedChat public={item.public} key={uuid.v4()}>
          <Space>
            <Grid cells={2} template="3em auto" gap="lg">
              <ChatList>
                <Avatar item={People[0].children[i]} label={0} />
              </ChatList>
              <div>
                <ChatLabel>{item.name}</ChatLabel>
                <ChatSummary>{item.summary}</ChatSummary>
              </div>
            </Grid>
          </Space>
          <Grid cells={5}>
            <ChatDetail>
              <MaterialIcon icon="forum" color="inherit" size={16} />
              {item.replies}
            </ChatDetail>
            <ChatDetail>
              <MaterialIcon icon="people" color="inherit" size={16} />
              {item.participants}
            </ChatDetail>
          </Grid>
          {!item.public && (
            <PrivateDetail>
              <MaterialIcon icon="lock_open" color="inherit" size={18} />
            </PrivateDetail>
          )}
          {item.trigger && (
            <TriggerDetail>
              <MaterialIcon icon="error" color="inherit" size={18} />
            </TriggerDetail>
          )}
        </ListedChat>
      );
    });

    return <ChatList>{items}</ChatList>;
  }
}

export default ConversationList;
