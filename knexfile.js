module.exports = {
  development: {
    client: 'pg',
    connection: 'postgress://admin:test@localhost/community-forum'
  },
  produciton: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
