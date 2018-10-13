import React from "react";
import { Header, LogoContainer, Wrap } from "./style";
import { Grid, IconButton } from "common/components";
import AuthUtils from "utils/auth";

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: 1
    };
  }
  handleLogout = () => {
    AuthUtils.logout();
    localStorage.removeItem("JWT");
    this.setState({
      loggedIn: 0
    });
  };
  render() {
    return (
      <Header loggedOut={!AuthUtils.logged_in}>
        <Wrap>
          <Grid cells={3} middle={1}>
            <div>{AuthUtils.logged_in && <IconButton icon="menu" />}</div>
            <LogoContainer>famify</LogoContainer>
            <div>
              {AuthUtils.logged_in && (
                <IconButton
                  icon="person"
                  right={1}
                  handleClick={e => this.handleLogout()}
                />
              )}
            </div>
          </Grid>
        </Wrap>
      </Header>
    );
  }
}

export default AppHeader;
