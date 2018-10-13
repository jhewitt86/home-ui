import React from "react";
import uuid from "uuid";
import MaterialIcon from "../materialIcon";
import Grid from "../grid";
import Space from "../space";
import {
  ListedApp,
  AppButton,
  AppButtonWrap,
  AppButtonIcon,
  AppButtonLabel
} from "./style";

class AppList extends React.Component {
  render() {
    const apps = this.props.data.map((item, i) => {
      let jiggle;
      if (i === 0) jiggle = 1;
      return (
        <ListedApp key={uuid.v4()}>
          <AppButton to={item.route} jiggle={jiggle}>
            <AppButtonWrap>
              <Space>
                <AppButtonIcon>
                  <MaterialIcon icon={item.icon} color="inherit" size={28} />
                </AppButtonIcon>
                <AppButtonLabel>{item.name}</AppButtonLabel>
              </Space>
            </AppButtonWrap>
          </AppButton>
        </ListedApp>
      );
    });
    return (
      <Grid cells={2} gap={"md"}>
        {apps}
      </Grid>
    );
  }
}

export default AppList;
