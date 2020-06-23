module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: '950meals',
      socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/development",
    },
    // debug: true,
  },
};
