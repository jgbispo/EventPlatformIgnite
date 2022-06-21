import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4ony6it0m9r01z4ceqvacf3/master",
    cache: new InMemoryCache()
})