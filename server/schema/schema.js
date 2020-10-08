const graphql = require('graphql')
const Restaurant = require('../models/restaurant');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql

// const restaurants = [
//     {name: "Wilken'S Fine Food", cuisine: "Delicatessen", borough: "Brooklyn", restaurant_id: "40356018"},
//     {name: "Staten Island", cuisine: "Jewish/Kosher", borough: "Kosher Island", restaurant_id: "40356442"},
//     {name: "Wendy'S", cuisine: "Hamburgers", borough: "Brooklyn", restaurant_id: "30112340"},
//     {name: "Morris Park Bake Shop", cuisine: "Bakery", borough: "Bronx", restaurant_id: "30075445"},
//     {name: "Taste The Tropics Ice Cream", cuisine: "Ice Cream, Gelato, Yogurt, Ices", borough: "Brooklyn", restaurant_id: "40356731"}
// ]

const RestaurantType = new GraphQLObjectType({
    name: 'Restaurant',
    fields: () => ({
        name: { type: GraphQLString },
        borough: { type: GraphQLString },
        cuisine: { type: GraphQLString },
        restaurant_id: { type: GraphQLID },
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        restaurant: {
            type: RestaurantType,
            args: { restaurant_id: { type: GraphQLID } },
            resolve(parent, args) {
                return Restaurant.findById(args.restaurant_id)
            },
        },
        restaurants: {
            type: new GraphQLList(RestaurantType),
            resolve(parent, args) {
                return Restaurant.find({}).limit(10)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});