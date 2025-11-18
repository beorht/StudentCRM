/**
 * Основные манипуляции с базой данных 
 * Student
 */

import db from "../database/db.js";
import { isValidName, isValidId } from "../utils/validate.js";

// Получение всего списка студентов
export async function getAllStudents( req, res ) {

    try {
        const result = await db.query( "SELECT * FROM students ORDER BY id" );
        res.json( { status: "ok", data: result.rows } );
    } catch (err) {
        console.error( err );
        res.status( 500 ).json( { status: "error", message: "DB error" } );
    }

}

// Создание данных об студенте
export async function createStudent( req, res ) {

    const { name, birth_date, group_name } = req.body;

    if ( !isValidName( name ) ) 
        return res.status( 400 ).json( {status: "error", message: "Invald name"} );

    try {
        const result = db.query(
            "INSERT INTO student (name, birth_date, group_name) VALUES ( $1, $2, $3 ) RETURNING *",
            [ name.trim(), birth_date || null, group_name || null ]
        );

        res.status( 201 ).json( {status: "ok", data: result.rows[0]} );
    } catch ( err ) {
        console.error( err );
        res.status( 500 ).json( {status: "error", message: "Error with create new student"} );
    }
} 