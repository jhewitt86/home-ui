import React from "react";
import Grid from "../grid";
import { TimeDetail, UserName, TimeWrapper } from "./style";
import { calendarStrings } from "../../../constants";
import AuthUtils from "utils/auth";

class TimeStamp extends React.Component {
  render() {
    const { time, user } = this.props;
    const dateTime = new Date(parseInt(time));
    const timeDetail = (
      <TimeDetail calendar={calendarStrings}>{dateTime}</TimeDetail>
    );
    const owner = AuthUtils.user.id === parseInt(user.id);

    return user ? (
      <Grid cells={2}>
        <UserName>
          @{user.username}
          {owner && " (Me)"}
        </UserName>
        <TimeWrapper>{timeDetail}</TimeWrapper>
      </Grid>
    ) : null;
  }
}

export default TimeStamp;
