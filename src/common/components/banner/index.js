import React from "react";
import Space from "../space";
import Wrap from "../wrap";
import { withRouter } from "react-router-dom";
import { AppBanner } from "./style";
import Grid from "../grid";
import IconButton from "../iconButton";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }
  handleBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <AppBanner>
        <Wrap>
          <Space>
            {!this.props.lite ? (
              <Grid cells={2} middle={1} template="auto auto">
                <Grid cells={2} middle={1} template="2em auto">
                  <IconButton route={"/"} icon="home" size={28} />
                  {this.props.children}
                </Grid>
                <IconButton right={1} icon="settings" size={28} />
              </Grid>
            ) : (
              <Grid cells={2} middle={1} template="auto auto">
                <Grid cells={2} middle={1} template="2em auto">
                  <IconButton
                    handleClick={this.handleBack}
                    icon="arrow_back"
                    size={28}
                  />
                  {this.props.children}
                </Grid>
              </Grid>
            )}
          </Space>
        </Wrap>
      </AppBanner>
    );
  }
}

export default withRouter(Banner);
