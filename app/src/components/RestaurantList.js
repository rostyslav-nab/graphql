import React from "react"
//import InfiniteScroll from "react-infinite-scroll-component"
import InfiniteScroll from 'react-infinite-scroller'
import {restaurantQuery} from "./queries"
import {useQuery} from "@apollo/client"

const RestaurantList = (props) => {
    const {loading, error, data} = useQuery(restaurantQuery)
    if (loading) return <p>Loading...</p>;

    const handleLoadMore = () => {
        // fetchMore({
        //     variables: {
        //         after: pageInfo.endCursor,
        //         first: DEFAULT_PAGE_SIZE,
        //     },
        //     updateQuery(previousResult, { fetchMoreResult }) {
        //         const connection = fetchMoreResult.restaurants;
        //
        //         return {
        //             restaurants: {
        //                 pageInfo: connection.pageInfo,
        //                 nodes: [...previousResult.restaurants.nodes, ...connection.nodes],
        //                 __typename: previousResult.restaurants.__typename,
        //             },
        //         };
        //     },
        // });
    }


    return (

        <InfiniteScroll
            dataLength={data.restaurants.length}
            next={handleLoadMore}
            hasMore={true}
            loader={<h4>Please wait...</h4>}
        >
            {data.restaurants &&
            data.restaurants.map((rest) => (
                <div key={rest.restaurant_id}>
                    <div>
                        <p>{rest.name}</p>
                        <p>{rest.borough}</p>
                        <p>{rest.cuisine}</p>
                        <hr/>
                    </div>
                </div>
            ))}
        </InfiniteScroll>
    )
}

export default RestaurantList