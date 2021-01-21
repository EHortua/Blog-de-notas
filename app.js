  let notas = require('./funcionesDetareas');

  
  switch(lenguaje) {
    case 'listar':
        console.log(dbTareasArray);
      break;
    case undefined:
      console.log('Atención-Tienes que pasar una acción');
      break;
    default:
      console.log('No entiendo qué quieres hacer');
  }
