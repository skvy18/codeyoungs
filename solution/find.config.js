module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "123456789",
    DB: "change",
    dialect: "mysql",
    pool: {
        max:30,
        min:1,
        acquire: 40000,
        idle: 30000 
    }
};