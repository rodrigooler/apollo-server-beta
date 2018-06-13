const userResolvers = require('./modules/user/user-resolvers');
const orderResolvers = require('./modules/order/order-resolvers');

module.exports = {
	Query: {
		me: userResolvers.me,
		orders: orderResolvers.orders
	}
};
