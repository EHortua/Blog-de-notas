const fs = require('fs');

let dbTareas = fs.readFileSync('./tareas.json', 'utf-8')

let dbTareasArray = JSON.parse(dbTareas);

let lenguaje = process.argv[2];

module.exports = new dbTareasArray();
module.exports = new lenguaje();