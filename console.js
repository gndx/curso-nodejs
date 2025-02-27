// Métodos básicos de salida
console.log('Hola Mundo');
console.info('Console.info(): Similar .log() pero para mostrar información');
console.warn('Console.warn(): Para Advertencias');
console.error('Console.error(): Para Errores');

// Tablas

const usuarios = [
  { nombre: 'Ana', edad: 28, rol: 'Desarrollador' },
  { nombre: 'Juan', edad: 34, rol: 'Diseñador' },
  { nombre: 'María', edad: 41, rol: 'Gerente' }
];

console.log(usuarios);
console.table(usuarios, ['nombre', 'rol']);

// Time

console.time('Operación');
for (let i = 0; i < 1000000; i++) {
  // Operación que consume tiempo
}
console.timeEnd('Operación');

// Count
console.count('contador');
console.count('contador');
console.count('contador');
console.count('contador');
console.count('contador');
console.countReset('contador');
console.count('contador');

// Agrupación

console.group('Grupo Principal');
console.log('Información 1');
console.group('Subgrupo');
console.log('Información subgrupo 1');
console.groupEnd();
console.group('Subgrupo 2');
console.log('Información subgrupo 2');
console.groupEnd();
console.log('final');
console.groupEnd();

// Afirmaciones

console.assert(1 === 1, 'Esto no se muestra');
console.assert(1 === 2, 'Esto si se mostrará');

// clear
// console.clear();

console.trace('Mostrar la pila de llamadas actual');
