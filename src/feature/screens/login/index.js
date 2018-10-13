import React from "react";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import Formsy from "formsy-react";
import { Screen, Panel, Wrap, Space, Grid } from "common/components";
import { FormInput, FormSubmit } from "common/components/forms";
import { LoginFormWrapper, LoginError, Toolbar, Hyperlink } from "./style";
import * as actions from "./duck/actions";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

class AppLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      error: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate(prevProps) {}

  handleSubmit = e => {
    /*
    this.props.actions.login(e);
    this.setState({
      loggedIn: true
    });
    */
  };
  render() {
    const SIGN_IN = gql`
      mutation signIn($login: String!, $password: String!) {
        signIn(login: $login, password: $password) {
          token
        }
      }
    `;
    return this.state.loggedIn ? null : (
      <Screen noAnimation>
        <Mutation mutation={SIGN_IN}>
          {(signIn, { data }) => (
            <Panel fixed background="secondary" photo middle>
              <LoginFormWrapper>
                {this.state.error && (
                  <LoginError>
                    {this.state.error.graphQLErrors[0].message}
                  </LoginError>
                )}
                <Formsy
                  onSubmit={e =>
                    signIn({
                      variables: {
                        login: e.Username,
                        password: e.Password
                      }
                    })
                      .then(response =>
                        this.props.actions.login(response.data.signIn.token)
                      )
                      .catch(error => this.setState({ error }))
                  }
                >
                  <FormInput
                    white
                    type="text"
                    name="Username"
                    icon="person"
                    autoFocus={1}
                    defaultValue=""
                  />
                  <FormInput
                    white
                    type="password"
                    name="Password"
                    icon="lock"
                    defaultValue=""
                  />
                  <Space />
                  <FormSubmit label="Sign in" icon="arrow_forward" noPadding />
                </Formsy>
                <Space />
                Don't have an account yet?{" "}
                <Hyperlink to="/register">Register</Hyperlink>
              </LoginFormWrapper>
              <Toolbar>
                <Space>
                  <Wrap>
                    <Grid cells={3} middle>
                      <Hyperlink block to="/about">
                        About
                      </Hyperlink>
                      <Hyperlink block to="/about">
                        How this works
                      </Hyperlink>
                      <Hyperlink block to="/about">
                        Register
                      </Hyperlink>
                    </Grid>
                  </Wrap>
                </Space>
              </Toolbar>
            </Panel>
          )}
        </Mutation>
      </Screen>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  return { conversations: store.conversations };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(AppLogin);
