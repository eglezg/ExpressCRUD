const Usuario = require('../models/usuario');

/*exports.getUsuarios = (req, res) => {
    Usuario.getAll((err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};*/

exports.getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.getAll();
        res.json(usuarios);
    } catch (err) {
        res.status(500),json({ error: err.message });
    }
};

exports.getUsuario = (req, res) => {
    const id = req.params.id;
    Usuario.getById(id, (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: 'Usuario no encontrado'});
        res.json(row);
    });
};

exports.createUsuario = (req, res) => {
    const nuevo = req.body;
    Usuario.create(nuevo, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json(result);
    });
};

exports.updateUsuario = (req, res) => {
    const id = req.params.id;
    const datos = req.body;
    Usuario.update(id, datos, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: 'Usuario actualizado'});
    });
};

exports.deleteUsuario = (req, res) => {
    const id = req.params.id;
    Usuario.delete(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: 'Usuario eliminado'});
    });
};