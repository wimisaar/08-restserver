// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
// CADUCIDAD TOKEN
// ============================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============================
// SEED
// ============================
process.env.SEED = process.env.SEED || 'semilla-de-mi-local'; 



// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;