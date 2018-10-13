import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Listing from "./listing";
// import Analyze from "api";

const GET_CONVERSATIONS = gql`
  query {
    messages {
      edges {
        id
        title
        body
        createdAt
        public
        user {
          id
          username
          avatar
        }
      }
    }
  }
`;

class ConversationList extends React.Component {
  render() {
    return (
      <Query query={GET_CONVERSATIONS}>
        {({ data, loading, subscribeToMore }) => {
          if (!data) {
            return null;
          }

          if (loading) {
            return <span>Loading ...</span>;
          }

          return (
            <Listing
              data={data.messages.edges}
              subscribeToMore={subscribeToMore}
            />
          );
        }}
      </Query>
    );
  }
}

export default ConversationList;
