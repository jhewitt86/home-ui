import React from "react";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import {
  Screen,
  Banner,
  Panel,
  Wrap,
  Space,
  IconButton,
  ConversationList
} from "common/components";
// import FormNewConversation from "./screens/addNew";
import { AddNewWrapper, AddNewButton } from "./style";
import * as actions from "./duck/actions";

class AppConversations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msgs: {
        all: [],
        me: []
      }
    };
  }
  componentDidMount() {
    this.props.actions.fetch();
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        msgs: this.props.conversations.msgs
      });
    }
  }
  render() {
    return (
      <div>
        <Screen>
          <Banner>Conversations</Banner>
          <Panel background={"white"}>
            <Wrap>
              <Space>
                <ConversationList data={this.state.msgs.all} />
              </Space>
              <Space />
              <Space />
            </Wrap>
          </Panel>
        </Screen>

        <AddNewWrapper>
          <AddNewButton>
            <IconButton route="newConversation" icon="add_circle_outline" />
          </AddNewButton>
        </AddNewWrapper>
      </div>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  return { conversations: store.conversations };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(AppConversations);
