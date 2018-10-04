import React from "react";
import { Screen, Panel, Wrap, AppList, Space, Tip } from "common/components";
import { AppData } from "data";

class AppHome extends React.Component {
  render() {
    return (
      <Screen>
        <Tip msg="Join in a conversation to get started." />
        <Panel background={"secondary"}>
          <Wrap>
            <Space>
              <AppList data={AppData[0].children} />
            </Space>
            <Space />
          </Wrap>
        </Panel>
      </Screen>
    );
  }
}

export default AppHome;
