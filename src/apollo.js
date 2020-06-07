import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql.herokuapp.com/",
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

export default client;
