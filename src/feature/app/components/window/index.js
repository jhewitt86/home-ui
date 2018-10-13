import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppLogin from "../../../screens/login";
import { Window } from "./style";
import AuthUtils from "utils/auth";

import {
  Home,
  People,
  Conversations,
  NewConversation,
  ErrorScreen
} from "feature/screens";
import ViewConversation from "feature/screens/conversations/screens/view";

class AppWindow extends React.Component {
  render() {
    return AuthUtils.logged_in ? (
      <Window>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/people" component={People} />
              <Route path="/chat/:chatId" component={ViewConversation} />
              <Route path="/conversations" component={Conversations} />
              <Route path="/newConversation" component={NewConversation} />
              <Route path="/login" component={AppLogin} />
              <Route component={ErrorScreen} />
            </Switch>
          </div>
        </Router>
      </Window>
    ) : (
      <Router>
        <div>
          <Route path="/" component={AppLogin} />
          <Route path="/register" component={AppLogin} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AppWindow);
