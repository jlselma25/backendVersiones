const { Router } = require('express');
const { obtenerVersiones,obtenerVersion,crearVersion,eliminarVersion} = require('../controllers/versiones');


const router = Router();


router.get('/', obtenerVersiones );
router.get('/:version', obtenerVersion );
router.post('/new', crearVersion);
router.delete('/borrar/:id', eliminarVersion);
//router.get('/:version/:id', obtenerVersion);


module.exports = router;