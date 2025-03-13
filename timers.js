console.log('Hora Actual:', new Date().toLocaleTimeString());

const timeOut = setTimeout(() => {
  console.log('Este mensaje aparece después de 2 segundos');
  console.log('Hora Actual:', new Date().toLocaleTimeString());
}, 2000);

setImmediate(() => {
  console.log('Este mensaje aparece en la proxima iteración del bucle');
  console.log('Hora Actual:', new Date().toLocaleTimeString());
});

const intervalId = setInterval(() => {
  console.log(' Este mensaje aparece cada 3 segundos');
}, 3000);

setTimeout(() => {
  console.log('Cancelar el intervalo después de 10 segundos');
  clearInterval(intervalId);
}, 10000);

const timeOutId = setTimeout(() => {
  console.log('Este mensaje nunca aparecerá');
}, 10000);

clearTimeout(timeOutId);

console.log('Hora Final:', new Date().toLocaleTimeString());
