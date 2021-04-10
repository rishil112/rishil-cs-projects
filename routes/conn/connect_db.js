var mysql = require('mysql2');
const connection=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"password",
        database:"mall_management_system"
    }
)
module.exports = connection;
