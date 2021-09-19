const Sequelize = require('sequelize');

const sequelize = require('../match');

const Change = sequelize.define('change', {
    changeId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    changeLangto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    changeLangfrom:{
        type: Sequelize.STRING,
        allowNull: false
    },
    changetextContent: {
        type: Sequelize.STRING,
        allowNull: false
    },
    changeText: {
        type: Sequelize.STRING,
        allowNull: false
    },
    changetextcreatAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: new Date()
    },
    changetextupdate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: new Date()
    }
});

module.exports = Change;