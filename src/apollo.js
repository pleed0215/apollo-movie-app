import ApolloClient from "apollo-boost";

const client = ApolloClient({
  uri: "http://localhost:4000",
});
console.log(client);

export default client;
