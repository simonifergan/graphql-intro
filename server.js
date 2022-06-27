const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {
  loadSchema,
  GraphQLFileLoader,
  loadTypedefs,
} = require("graphql-tools");
const { ApolloServer } = require("apollo-server");

const rootResolver = require("./rootResolver");
const itemResolvers = require("./resolvers/item.resolvers");

(async function main() {
  const server =
    process.argv[2] === "apollo" ? await _apollo() : await _express();

  server.listen(4000, () => {
    console.log(
      "Running an",
      process.argv[2] === "apollo" ? "Apollo" : "Express",
      "GraphQL API server at http://localhost:4000/graphql"
    );
  });
})().catch((e) => {
  console.error(e);
});

async function _express() {
  const schema = await loadSchema("./schema.graphql", {
    loaders: [new GraphQLFileLoader()],
  });

  const server = express();
  server.use(
    "/graphql",
    graphqlHTTP({
      schema,
      rootValue: rootResolver,
      graphiql: true,
    })
  );

  return server;
}

async function _apollo() {
  const typeDefs = await loadTypedefs("./schema.graphql", {
    loaders: [new GraphQLFileLoader()],
  });

  const server = new ApolloServer({
    typeDefs: typeDefs[0].document,
    resolvers: {
      Query: rootResolver,
      Item: itemResolvers,
    },
    playground: true,
  });

  return server;
}
