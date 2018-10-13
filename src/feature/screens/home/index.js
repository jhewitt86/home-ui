import React from "react";
import { Screen, Panel, Wrap, AppList, Space, Tip } from "common/components";
import { AppData } from "data";

class AppHome extends React.Component {
  render() {
    return (
      <Screen>
        <Tip msg="Join in a conversation to start making connections." />
        <Panel photo>
          <Wrap>
            <Space>
              <AppList jiggle={1} data={AppData[0].children} />
            </Space>
            <Space />
          </Wrap>
        </Panel>
      </Screen>
    );
  }
}

export default AppHome;
