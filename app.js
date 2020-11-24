
const process = require('process')

let moduloTareas = require ('./tareas');

let comando = process.argv[2];

switch (comando) {
    case "listar":
        let tareas = moduloTareas.leerJSON()
        console.log("---------");
        console.log("Mi listado de tareas");
        console.log('---------');
        
        for (let i = 0; i < tareas.length; i++) {

            console.log("titulo de tarea:" + tareas[i].titulo + '- estado: ' + tareas[i].estado);
    }
        
        break;
    case 'agregar' :
        let titulo = process.argv[3];
        let estado = process.argv[4];
        
        moduloTareas.escribirJSON(titulo,estado)
        break;
    default:
        break;
}