const { ApolloServer } = require("apollo-server");
const { Query } = require("./resolvers/Query");
const { typeDefs } = require("./schema");


const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: {
    Query
  }
});

server.listen().then(({ url }) => {
  console.log("Server is running " + url);
});
