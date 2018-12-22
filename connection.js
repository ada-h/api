const knex = require ('knex')

//Connecting to the database
const myDatabase = knex({
    client: 'mysql',
    connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'forever&aday'
    }
});

module.exports = myDatabase