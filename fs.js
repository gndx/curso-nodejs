const fs = require('fs');

const fileName = 'example.txt';

// CREAR
fs.writeFileSync(fileName, 'Hola, este es un archivo de ejemplo.');
console.log('Archivo creado correctamente');

// LEER
const content = fs.readFileSync(fileName, 'utf8');
console.log('File content:', content);

// ACTUALIZAR
fs.appendFileSync(fileName, '\n\nEsta es una nueva linea.\n');
console.log('Archivo actualizado correctamente');

// ELIMINAR
fs.unlinkSync(fileName);
console.log('Archivo eliminado correctamente');
