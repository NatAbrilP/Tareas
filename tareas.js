let fs = require('fs');

module.exports = moduloTareas = {
    archivo : './tareas.json',
    leerJSON : function() {
        let listaTareas = fs.readFileSync(this.archivo, 'utf-8')
    return JSON.parse(listaTareas)
    },
    escribirJSON : function(titulo, estado){
        let nuevaTarea = {
            titulo : titulo,
            estado : estado
        }
        let tareasAnteriores = this.leerJSON();
        tareasAnteriores.push(nuevaTarea);
        
       this.guardarJSON(tareasAnteriores)
    },
    
    guardarJSON : function(info){
    let nuevoJSON = JSON.stringify(info);//convierte objeto en JSON
    fs.writeFileSync(this.archivo, nuevoJSON, 'utf-8')
    }

}