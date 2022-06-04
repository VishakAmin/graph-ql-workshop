const { gql } = require("apollo-server");

// Scalar 
// String, Int, Float , Boolean   

exports.typeDefs = gql`
  type Query {
    hello: [Int]
    numberOfProducts: Int!
    products: [Product!]!
    product(id: ID!): Product
  }

  type Product {
    id: ID!
    title: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!  
    category: String!
  }

  type Mutation{
    addProduct(input: AddProductInput ): Boolean
  }

  input AddProductInput{
    title: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!  
    category: String!
  }
`;