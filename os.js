const os = require('os');

function showSystemInfo() {
  console.log(`Sistema Operativo: ${os.type()}`);
  console.log(`Plataforma: ${os.platform()}`);
  console.log(`Arquitectura: ${os.arch()} `);
  console.log(`Versión OS: ${os.release()}`);
  const uptime = os.uptime();
  console.log(`System Uptime: ${uptime} seconds`);
  const totalMem = os.totalmem();
  console.log(`Total Memory: ${totalMem / 1024 / 1024} MB`);
  const freeMem = os.freemem();
  console.log(`Free Memory: ${freeMem / 1024 / 1024} MB`);
  console.log('CPU Info:');
  const cpus = os.cpus();
  cpus.forEach((cpu, index) => {
    console.log(`  Core ${index + 1}: ${cpu.model} @ ${cpu.speed / 1000} GHz`);
  });
  console.log(`Home Directory: ${os.homedir()}`);
  console.log(`Hostname: ${os.hostname()}`);
}

showSystemInfo();
