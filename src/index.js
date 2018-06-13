const {ApolloServer} = require('apollo-server');

const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
	typeDefs,
	resolvers,
	tracing: true
});

const opts = {
	http: {
		port: process.env.PORT || 3000
	}
};

server.listen(opts).then(({url}) => {
	console.log(`🚀  Server ready at ${url}`);
});
