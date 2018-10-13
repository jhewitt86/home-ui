import ApolloClient from "apollo-client";
import { ApolloLink, split, concat } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("JWT");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      authorization: token ? token : ""
    }
  };
});

const httpLink = new HttpLink({
  uri: "http://192.168.1.102:8000/graphql"
});

const wsLink = new WebSocketLink({
  uri: `ws://192.168.1.102:8000/graphql`,
  options: {
    reconnect: true
  }
});

const terminatingLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const link = ApolloLink.from([terminatingLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(link),
  cache
});

export default client;
