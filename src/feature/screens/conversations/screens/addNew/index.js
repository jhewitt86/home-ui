import React from "react";
import { Screen, Banner, Panel, Wrap, Space } from "common/components";
import FormNewConversation from "./components/formCreate";

class AddNewConversation extends React.Component {
  render() {
    return (
      <Screen>
        <Banner lite={1}>New conversation</Banner>
        <Panel background={"white"}>
          <Wrap>
            <Space>
              <FormNewConversation />
            </Space>
            <Space />
            <Space />
          </Wrap>
        </Panel>
      </Screen>
    );
  }
}

export default AddNewConversation;
