import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import {restaurantQuery} from "./queries"
import {useQuery} from "@apollo/client"

const RestaurantList = (props) => {

    const { loading, error, data } = useQuery(restaurantQuery)
    console.log(data)



    const uploadNextRestaurants = () => {
        console.log('Upload New DAta')
    }

    if (loading) return <h1>'Loading...'</h1>
    if (error) return `Error! ${error.message}`
    return (
        <InfiniteScroll
            dataLength={data.restaurants.length}
            next={uploadNextRestaurants}
            hasMore={true}
            loader={<h4>Please wait...</h4>}
        >
            {data.restaurants.map((rest) => (
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