const {
    DataTypes
} = require("sequelize");
const sequelize = require('../mysql/mysql')
const Log = sequelize.define("log", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ip: {
        type: DataTypes.STRING
    },


});

(async () => {
    await Log.sync();
    // 这里是代码
})();
module.exports = Log
