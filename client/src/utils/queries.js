// used module 21 activity 13 for reference
// Important for useQuery: We bring in gql from the @apollo/client library to allow us to parse queries (and mutations) as template literals
import { gql } from '@apollo/client';

// Define the GET_ME query to fetch the currently logged-in user
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
