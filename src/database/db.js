/*
 * Подключение к базе данных 
*/

import pg from "pg";
import dotenv from "dotenv";

// Получение данных из конфига файла
dotenv.config()

// Получения объекта Pool из "pg"
const { Pool } = pg;

// Создаем константу pool
// Подключение к базе данных
const pool = new Pool( 
    host     = proccess.env.DBHOST,
    port     = proccess.env.DBPORT,
    database = proccess.env.DBNAME,
    user     = proccess.env.DBUSER,
    password = proccess.env.DBPASSWORD,
);

// Провека события ошибки
pool.on( "error", (err) => {
    console.log("Error message:", err);
    procces.exit(-1);
});

// 
export default {
    query: ( text, params ) => pool.query( text, params ), pool
}