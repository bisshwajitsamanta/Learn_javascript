import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import LRUCache from "lru-cache";

// Define your type definitions and resolvers
const typeDefs = `#graphql
schema {
    query: Query
}
type Query {
    hello: String
    goodbye: String
}`;

const resolvers = {
    Query: {
        hello: () => 'Hello Bisshwajit!!',
        goodbye: () => 'Hey Bisshwajit Good Bye !!',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
    const info = await startStandaloneServer(server, { listen: { port: 9000 } });
    console.log(`Server is running at ${info.url}`);
})();
