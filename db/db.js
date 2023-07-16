const knex = require('knex');
const knexfile = require('./knexfile');

const db = knex(knexfile.development);

db.raw("SELECT 1").then(() => {
    console.log('Database Connected...');
})
.catch((e) => {
    console.log('Database Not Connect...');
    console.error(e);
});

module.exports = db;