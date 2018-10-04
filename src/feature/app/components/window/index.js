import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Window } from "./style";

import {
  Home,
  People,
  Conversations,
  NewConversation,
  ErrorScreen
} from "feature/screens";

class AppWindow extends React.Component {
  render() {
    return (
      <Window>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/people" component={People} />
              <Route path="/conversations" component={Conversations} />
              <Route path="/newConversation" component={NewConversation} />
              <Route component={ErrorScreen} />
            </Switch>
          </div>
        </Router>
      </Window>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AppWindow);
