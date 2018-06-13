const userResolvers = require('./modules/user/user-resolvers');

module.exports = {
	Query: {
		me: userResolvers.me
	}
};
