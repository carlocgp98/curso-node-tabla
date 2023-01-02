
//desestructuramos el objeto .exports de multiplicar.js y yargs.js
const { createFile } = require('./helpers/multiplicar'); 
const  argv  = require('./config/yargs')
const colors = require('colors');

console.clear();

//const base = 3;
createFile( argv.b, argv.l, argv.h )
.then( nombreArchivo => console.log ( nombreArchivo.rainbow,'creado' ) )
.catch( err => console.log ( err ) )

