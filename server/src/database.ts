import mysql from 'promise-mysql';

import keys from './keys';

const db = mysql.createPool(keys.database);

db.getConnection()
    .then(connection => {
        db.releaseConnection(connection);
        console.log('BANCO DE DADOS CONECTADO');
    })

export default db;