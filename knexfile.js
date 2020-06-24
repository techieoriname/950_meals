const env = require("./env");

const connection = {
    host: env['MysqlHost'],
    user: env['MysqlUser'],
    password: env['MysqlPassword'],
    database: env['MysqlDatabase'],
};

if (env['UseMysqlSock']) {
    connection.socketPath = env['MysqlSocketPath'];
}

module.exports = {
    development: {
        client: "mysql",
        connection,
        migrations: {
            directory: __dirname + "/db/migrations",
        },
        seeds: {
            directory: __dirname + "/db/seeds/development",
        },
        // debug: true,
    },
};
