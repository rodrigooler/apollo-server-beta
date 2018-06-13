const {gql} = require('apollo-server');

const userTypes = require('./modules/user/user-types');

const queryTypes = gql`
  type Query {
    me: User
  }
`;

module.exports = [
	userTypes,
	queryTypes
];
