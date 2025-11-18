/* 
 * Проведение валидации данных для записи 
 * к базе данных
*/

// Провека имя пользователя 
export function isValidName( name ) {
    return typeof name === "string" && name.trim().length >= 2;
}

// Провека оценки
export function isValidGrade( value ) {
    const num = Number( value );
    return !Number.isNaN( num ) && num >= 1 && num <= 5;
}

// Проверка на ID пользователя
export function isValidId( id ) {
    const n = Number( id );
    return Number.isInteger( n ) && n > 0;
}