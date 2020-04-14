const jwt = require('jsonwebtoken');


// ==============================
// Verificar token
// ==============================

let verificaToken = function(req, res, next) {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED,  (err, decoded) => {
        if (err){
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            })
        }

        req.usuario = decoded.usuario;
        next();
    });
}


// ==============================
// Verificar rol administrador
// ==============================

let verificaAdmin = function(req, res, next) {

    let usuario = req.usuario;

    if (usuario.role !== 'ADMIN_ROLE' ){

        return res.status(401).json({
            ok: false,
            err: {
                message: 'No es un usuario administrador'
            }
        })
        
    }

    next();

}


module.exports = {
    verificaToken,
    verificaAdmin
}