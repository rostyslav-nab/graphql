import gql from "graphql-tag"


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

//
// export const restaurantFetch = gql`
//   query FetchRestaurants($first: Int, $after: String) {
//     restaurants(first: $first, after: $after) {
//       pageInfo {
//         endCursor
//         startCursor
//         hasPreviousPage
//         hasNextPage
//       }
//       nodes {
//         name
//         borough
//         cuisine
//         restaurant_id
//       }
//     }
//   }
// `
