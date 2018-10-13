import React from "react";
import uuid from "uuid";
import gql from "graphql-tag";
import ListedChatItem from "./listedChat";
// import Analyze from "api";
import { ChatList } from "./style";

const CONVERSATIONS_SUBSCRIPTION = gql`
  subscription {
    messageCreated {
      message {
        id
        title
        body
        createdAt
        public
        user {
          id
          username
          avatar
        }
      }
    }
  }
`;

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msgs: []
    };
  }

  componentDidMount() {
    this.setState({
      msgs: this.props.data
    });

    this.props.subscribeToMore({
      document: CONVERSATIONS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const newMsg = subscriptionData.data.messageCreated.message;
        const updateData = [newMsg, ...this.state.msgs];

        this.setState({
          msgs: updateData
        });

        const updateMessages = {
          messages: {
            edges: updateData,
            __typename: "MessageConnection"
          }
        };
        return updateMessages;
      },
      onError: err => console.error("Error", err)
    });
  }

  render() {
    let { msgs } = this.state || [];

    const items = msgs.map((item, i) => {
      return <ListedChatItem i={i} item={item} key={uuid.v4()} />;
    });

    return <ChatList>{items}</ChatList>;
  }
}

export default Listing;
