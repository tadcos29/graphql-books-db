const { gql } = require('apollo-server-express');

const typeDefs = gql`
 type User {
  username: String!
  email: String!
  password: String!
  savedBooks: [Book!]!
  bookCount: Int!
}

type Book {
  authors: [String!]!
  description: String!
  bookId: String!
  image: String
  link: String
  title: String!
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
  me: User!
}


type Mutation {
  login(email: String!, password: String!): Auth!
  addUser(username: String!, email: String!, password: String!): Auth!
  saveBook(
    authors: [String],
    description: String!,
    title: String!,
    bookId: String!, 
    image: String, 
    link: String): User,
    removeBook(bookId: String!): User!
}
`;

module.exports = typeDefs;
