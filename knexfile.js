const env = require("./env");
const sqlClient = env['MysqlClient'];

let connection;
if (['sqlite', 'sqlite3'].includes(sqlClient)) {
    connection = {
        filename: __dirname + env['SqliteFilePath']
    };

    if (env['UseMysqlSock']) {
        connection.socketPath = env['MysqlSocketPath'];
    }
} else {
    connection = {
        host: env['MysqlHost'],
        user: env['MysqlUser'],
        password: env['MysqlPassword'],
        database: env['MysqlDatabase'],
    };
}

module.exports = {
    development: {
        client: sqlClient,
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
