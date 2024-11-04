const { response } = require('express');
const Version = require('../models/version');
const { executeQuery } = require('../database/operations');



const versiones = [
    new Version(1, "Versión Inicial"),
    new Version(2, "Versión Beta"),
    new Version(3, "Versión Estable")
];


obtenerVersiones = async(req, res = response ) => {

  //  res.send('¡Adios, mundoooooooo!');
  const query = 'SELECT * FROM versiones';
  const data = await executeQuery(query);
    res.json(data);
}

obtenerVersion = async(req, res = response ) => {

  //  res.send('¡Adios, mundoooooooo!');
  const { version} = req.params;
  
  const query = 'SELECT * FROM versiones WHERE id =' + version;
  const data = await executeQuery(query);
    res.json(data);
}

crearVersion = async (req, res = response) => {
  const { version, cambios, fecha,android, csharp } = req.body; // Obtener los datos del cuerpo de la solicitud

//   // Verificar que ambos parámetros estén presentes
  if (!version || !cambios) {
      return res.status(400).json({ error: 'Número y nombre son obligatorios' });
  }
  const query = "INSERT INTO versiones (version,cambios,fecha,android,csharp) VALUES ('" + version +  "','" + cambios + "','" + fecha + "','" + android + "','" + csharp +  "')";
 
 
 await executeQuery(query);
 res.send('OK');
}


eliminarVersion = async(req, res = response ) => {

  //  res.send('¡Adios, mundoooooooo!');
  const { id } = req.params;
  
  const query = 'DELETE FROM versiones WHERE id =' + id;
  const data = await executeQuery(query);
  res.send('Version eliminada correctamente');
}


module.exports = {
   obtenerVersiones,
   obtenerVersion,
   crearVersion,
   eliminarVersion
}