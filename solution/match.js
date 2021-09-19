const findConfig = require('./find.config');

const sequelize = require("sequelize");

const sequelize = new Sequelize(findConfig.DB, findConfig.USER, findConfig.PASSWORD, {
    host: findConfig.host,
    dialect: findConfig.dialect,
    operatorsAliases :false,

    pool: {
        max: findConfig.pool.max,
        min: findConfig.pool.min,
        acciqure: findConfig.pool.acciqure,
        idle: findConfig.pool.idle
    }
});

module.exports = sequelize;