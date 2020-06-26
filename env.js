const envLoader = require('@xpresser/env');
const env = envLoader(__dirname + '/.env', {
    required: [
        'UseMysqlSock',
        'MysqlClient',
        'MysqlDatabase',
        'MysqlHost',
        'MysqlUser',
        'MysqlPassword',
        // if MysqlClient=(sqlite|sqlite3) require `SqliteFilePath`
        (envs) => ['sqlite', 'sqlite3'].includes(envs['MysqlClient']) ? 'SqliteFilePath' : false,
        // if UseMysqlSock===true require `MysqlSocketPath`
        (envs) => envs['UseMysqlSock'] === true ? 'MysqlSocketPath' : false
    ]
})

// Export ENV variables
module.exports = env;