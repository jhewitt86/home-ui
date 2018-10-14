import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Loader } from "common/components";
import Listing from "./components/listing";
// import Analyze from "api";

const GET_CONVERSATIONS = gql`
  query {
    messages {
      pageInfo {
        total
      }
      edges {
        id
        title
        body
        commentCount
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
            return <Loader withContainer />;
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
