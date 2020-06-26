const env = require("./env");

// const connection = {
//     host: env['MysqlHost'],
//     user: env['MysqlUser'],
//     password: env['MysqlPassword'],
//     database: env['MysqlDatabase'],
// };

const connection = {
    filename: __dirname + "/db/database.sqlite"
};

// if (env['UseMysqlSock']) {
//     connection.socketPath = env['MysqlSocketPath'];
// }

module.exports = {
    development: {
        client: "sqlite3",
        connection,
        migrations: {
            directory: __dirname + "/db/migrations",
        },
        seeds: {
            directory: __dirname + "/db/seeds/development",
        },
        // debug: true,
        useNullAsDefault: true
    },
};
