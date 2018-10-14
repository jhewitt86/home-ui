import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Screen, Banner, Panel, Wrap, Space, Loader } from "common/components";
import Message from "./components/message";
import Thread from "./components/thread";

const GET_CONVERSATION = gql`
  query($id: ID!) {
    message(id: $id) {
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
`;

class ViewConversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatId: null
    };
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.setState({
      chatId: params.chatId
    });
  }

  render() {
    const id = this.state.chatId;

    return id ? (
      <Screen>
        <Banner lite={1}>Conversation</Banner>
        <div>
          <Query query={GET_CONVERSATION} variables={{ id }}>
            {({ data, loading, subscribeToMore }) => {
              if (!data) {
                return null;
              }

              if (loading) {
                return (
                  <Panel background="white">
                    <Wrap>
                      <Loader withContainer />
                    </Wrap>
                  </Panel>
                );
              }
              return (
                <div>
                  <Message
                    item={data.message}
                    subscribeToMore={subscribeToMore}
                  />
                  <Panel photo>
                    <Wrap>
                      <Space>
                        <Thread
                          data={data.message.comments}
                          subscribeToMore={subscribeToMore}
                        />
                      </Space>
                    </Wrap>
                  </Panel>
                </div>
              );
            }}
          </Query>
        </div>
      </Screen>
    ) : null;
  }
}

export default ViewConversation;
