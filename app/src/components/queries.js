import { gql } from 'apollo-boost'


export const restaurantQuery = gql`
  query restaurantQuery {
    restaurants {
      name
      borough
      cuisine
      restaurant_id
    }
  }
`;
