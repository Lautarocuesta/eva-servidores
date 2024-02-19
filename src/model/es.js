const mongoose = require("mongoose");

// Crear el Schema para los datos
const datosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"],
    },
    descripcion: {
        type: String,
        required: [true, "La descricion es requerida"],
    },
    precio: {
        type: Number,
        required: [true, "El precio es requerido"],
    },
    cantstock: { 
        type: Number,
        required: [true, "La cantstock es requerido"],    
    },
});

const datos = mongoose.model("datos", datosSchema);

module.exports = datos;
