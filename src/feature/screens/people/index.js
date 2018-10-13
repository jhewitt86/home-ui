import React from "react";
import {
  Screen,
  Banner,
  Panel,
  Wrap,
  Space,
  AvatarList,
  Tip
} from "common/components";
import { People } from "data";

class AppPeople extends React.Component {
  render() {
    return (
      <Screen>
        <Banner>People</Banner>
        <Tip msg="Interact with people in conversations to add them here." />
        <Panel background={"white"}>
          <Wrap>
            <Space>
              <AvatarList data={People[0].children} />
            </Space>
            <Space />
          </Wrap>
        </Panel>
      </Screen>
    );
  }
}

export default AppPeople;
