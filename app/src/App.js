import React from 'react'
import './App.css'

import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import RestaurantList from "./components/RestaurantList"
import {ApolloProvider as ApolloHooksProvider} from '@apollo/react-hooks'

const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql',
});

function App() {
    return (
        <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
                <RestaurantList/>
            </ApolloHooksProvider>
        </ApolloProvider>
    );
}

export default App
