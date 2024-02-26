// schema folder copied from module 21 activity 13, changed profile and skills to users and books.

const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    // Query to retrieve all users
    users: async () => {
      return User.find();
    },

    // Query to retrieve a single user by ID
    user: async (parent, { userId }) => {
      return User.findById(userId);
    },
  },

  Mutation: {
    // Mutation to add a new user
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    // Mutation for user login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user || !user.isCorrectPassword(password)) {
        throw new AuthenticationError('Incorrect email or password');
      }

      const token = signToken(user);
      return { token, user };
    },

    // Mutation to save a book to a user's saved books
    saveBook: async (parent, { userId, book }) => {
      return User.findByIdAndUpdate(
        userId,
        { $addToSet: { savedBooks: book } },
        { new: true, runValidators: true }
      );
    },

    // Mutation to remove a user
    removeUser: async (parent, { userId }) => {
      return User.findByIdAndDelete(userId);
    },

    // Mutation to remove a book from a user's saved books
    deleteBook: async (parent, { userId, bookId }) => {
      return User.findByIdAndUpdate(
        userId,
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;

