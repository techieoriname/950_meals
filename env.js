const envLoader = require('@xpresser/env');
const env = envLoader(__dirname + '/.env', {
    required: [
        'UseMysqlSock',
        'MysqlDatabase',
        'MysqlHost',
        'MysqlUser',
        'MysqlPassword',
        // if UseMysqlSock===true require `MysqlSocketPath`
        // (envs) => envs['UseMysqlSock'] === true ?  'MysqlSocketPath' : false
    ]
})

// Export ENV variables
module.exports = env;