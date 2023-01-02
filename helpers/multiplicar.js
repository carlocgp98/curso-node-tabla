//importación de la librería FileSystemde NODEJS - REVISAR DOCS;
const fs = require ('fs');
const colors = require('colors');


const createFile = async( base = 5, listar = false, hasta) => {
    try {
        
        if(listar){
            console.log('=========================='.green);
            console.log('     Tabla del: '.green, colors.blue(base));
            console.log('=========================='.green);
        }
        

        let salida = '';
        
            for(let i= 1; i <= hasta; i++){
                salida += `${ base } * ${ i } = ${ base * i }\n`;
            }
        
        if(listar){
            console.log ( salida );
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt`;
        
        
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    createFile //exportamos un objeto con la propiedad del nombre de la función
}