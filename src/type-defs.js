const {gql} = require('apollo-server');

const userTypes = require('./modules/user/user-types');

const queryTypes = `
  type Query {
    me: User
  }
`

module.exports = gql[
  userTypes,
  queryTypes,
];
