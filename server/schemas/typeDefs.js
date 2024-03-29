// schema folder copied from module 21 activity 13, updated to follow criteria

const typeDefs = `
input BookInput {
  authors: [String!]!
  description: String!
  title: String!
  bookId: String!
  image: String
  link: String
}

type Book {
  bookId: String!
  authors: [String!]!
  description: String!
  title: String!
  image: String
  link: String
}

type User {
  _id: ID!
  username: String!
  email: String!
  bookCount: Int
  savedBooks: [Book]
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(userId: ID!, book: BookInput!): User
  removeBook(userId: ID!, bookId: String!): User
}

`;

module.exports = typeDefs;
