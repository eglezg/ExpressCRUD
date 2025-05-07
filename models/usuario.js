const db = require('../db/conexion');

const Usuario = {
    /*getAll: (callback) => {
        db.all('SELECT * FROM usuarios', callback);
    },*/
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM usuarios', (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    },
    getById: (id, callback) => {
        db.get('SELECT * FROM usuarios WHERE id = ?', [id], callback);
    },
    create: (usuario, callback) => {
        db.run('INSERT INTO usuarios (nombre, email, edad) VALUES (?, ?, ?)',
        [usuario.nombre, usuario.email, usuario.edad], function(err) {
            callback(err, {id: this.lastID, ...usuario});
        });
    },
    update: (id, usuario, callback) => {
        db.run('UPDATE usuarios SET nombre = ?, email = ?, edad = ? WHERE id = ?',
            [usuario.nombre, usuario.email, usuario.edad, id], callback);
    },
    delete: (id, callback) => {
        db.run('DELETE FROM usuarios WHERE id = ?', [id], callback);
    }
};

module.exports = Usuario;