console.log(`ID Del proceso (PID): ${process.pid}`);
console.log(`Directorio Actual: ${process.cwd()}`);
console.log(`Versión de Node.js: ${process.version}`);
console.log(`Plataforma: ${process.platform}`);
console.log(`Arquitectura: ${process.arch}`);
console.log(`Tiempo de ejecución: ${process.uptime()} segundos\n`);

console.log(process.env);
console.log(`Path: ${process.env.PATH}`);
console.log(`User Profile: ${process.env.HOME || process.env.USERPROFILE}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV || 'No definido'}`);

const memoryUsage = process.memoryUsage();
console.log(memoryUsage);

process.on('exit', code => {
  console.log('El proceso esta terminado', code);
});

process.on('SIGINT', () => {
  console.log('Se recibió la señal de Interrupción (Ctrl+C');
  process.exit(0);
});

console.log('Escribe algo y presiona enter o Ctrl+C para salir');
process.stdin.on('data', data => {
  const input = data.toString().trim();
  if (input.toLowerCase() === 'salir') {
    console.log('Comando de salida recibido');
    process.exit(0);
  } else {
    console.log(`Mensaje: ${input}`);
    console.log('Escribe "Salir" para terminar o escribe algo más.');
  }
});
