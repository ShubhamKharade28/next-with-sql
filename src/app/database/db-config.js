import mysql from 'mysql2/promise';

import { dbHost, dbUser, dbPassword, dbName } from './db-info';

const db = mysql.createPool({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName,
});

db.getConnection((err,connection) => {
    if(err){
        console.log("Error connecting to MySql database: ", err);
    }else{
        console.log("Successfully connected to MySql database");
        connection.release();
    }
});

export default db;