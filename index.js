const { ApolloServer } = require("apollo-server");
const { products } = require("./db");
const { Mutation } = require("./resolvers/Mutation");
const { Query } = require("./resolvers/Query");
const { typeDefs } = require("./schema");


const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: {
    Query,
    Mutation
  },
  context: {
    products
  }
});

server.listen().then(({ url }) => {
  console.log("Server is running " + url);
});
