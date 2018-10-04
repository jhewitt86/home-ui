import React from "react";
import { Header, LogoContainer, Wrap } from "./style";
import { Grid, IconButton } from "common/components";

class AppHeader extends React.Component {
  render() {
    return (
      <Header>
        <Wrap>
          <Grid cells={3} middle={1}>
            <IconButton icon="menu" />
            <LogoContainer>home</LogoContainer>
            <IconButton icon="person" right={1} />
          </Grid>
        </Wrap>
      </Header>
    );
  }
}

export default AppHeader;
