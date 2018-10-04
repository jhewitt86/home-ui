import React from "react";
import { Link } from "react-router-dom";
import { Screen, Banner, Panel, Wrap, Space } from "common/components";

class AppError extends React.Component {
  render() {
    return (
      <Screen>
        <Banner lite={1}>Error</Banner>
        <Panel background={"white"}>
          <Wrap>
            <Space>
              Didn't find what you were looking for here, sorry. Please return{" "}
              <Link to="/">home</Link>.
            </Space>
            <Space />
          </Wrap>
        </Panel>
      </Screen>
    );
  }
}

export default AppError;
