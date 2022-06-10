import createServer from './server';

createServer().listen(3000,()=>{
  console.log('Servidor corriendo en el puerto 3000');
})