import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {LRUCache} from "lru-cache";
export = LRUCache

// Define your type definitions and resolvers
const typeDefs = `#graphql
type Query {
    hello: String
}`;

const resolvers = {
    Query: {
        hello: () => 'Hello World',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
    const info = await startStandaloneServer(server, { listen: { port: 9000 } });
    console.log(`Server is running at ${info.url}`);
})();
