const express = require('express');
const app = express();
const usuariosRoutes = require('./routes/usuarios');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/usuarios', usuariosRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

