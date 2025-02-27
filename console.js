// Métodos básicos de salida
// console.log('Hola Mundo');
// console.info('Console.info(): Similar .log() pero para mostrar información');
// console.warn('Console.warn(): Para Advertencias');
// console.error('Console.error(): Para Errores');

// Tablas

// const usuarios = [
//   { nombre: 'Ana', edad: 28, rol: 'Desarrollador' },
//   { nombre: 'Juan', edad: 34, rol: 'Diseñador' },
//   { nombre: 'María', edad: 41, rol: 'Gerente' }
// ];

// console.log(usuarios);
// console.table(usuarios, ['nombre', 'rol']);

// Time

console.time('Operación');
for (let i = 0; i < 1000000; i++) {
  // Operación que consume tiempo
}
console.timeEnd('Operación');
