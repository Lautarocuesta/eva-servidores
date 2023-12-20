const mongoose = require("mongoose");

// Crear el Schema para el libro
const libroSchema = new mongoose.Schema({
    Titulo: {
        type: String,
        required: [true, "El título  es requerido"],
    },
    Autor: {
        type: String,
        required: [true, "El autor del libro es requerido"],
    },
    Genero: {
        type: String,
        required: [true, "El género del libro es requerido"],
    },
    CantPaginas: { 
        type: Number,
        required: [true, "La cantidad de páginas del libro es requerida"],    
    },
    AnioPublicacion: {
        type: Number,
        required: [true, "El año de publicación del libro es requerido"],
    },
});

const Libro = mongoose.model("Libro", libroSchema);

module.exports = Libro;
