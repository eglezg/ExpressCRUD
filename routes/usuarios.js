const express = require('express');
const router = express.Router();
const controlador = require('../controllers/usuariosController');

router.get('/', controlador.getUsuarios);
router.get('/:id', controlador.getUsuario);
router.post('/', controlador.createUsuario);
router.put('/:id', controlador.updateUsuario);
router.delete('/:id', controlador.deleteUsuario);

module.exports = router;
