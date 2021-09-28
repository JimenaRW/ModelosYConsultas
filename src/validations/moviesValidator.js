const {check} = require('express-validator');

module.exports = [
    check('title')
    .notEmpty().withMessage('El título es obligatorio')
    .isLength({
        min : 2,
        max: 40
    }).withMessage('Debe tener entre 2 a 40 caracteres'),

    check('rating')
    .notEmpty().withMessage('Debes señalar el ranking de la película')
    .isDecimal().withMessage('Puede ser un número decimal'),

    check('awards')
    .notEmpty().withMessage('Debes ingresar los premios ganados')
    .isInt({ min : 0 }).withMessage('Debe tener aunque sea 0 premios'),

    check('release_date')
    .notEmpty().withMessage('Debes ingresar la fecha de estreno de la película')
    .isDate().withMessage('El formato debe ser: dd-mm-aaaa'),

    check('length')
    .notEmpty().withMessage('Debes ingresar la duración de la película')
    .isInt({
        min : 30,
        max : 400
    }).withMessage('Debe tener entre 30 a 400 minutos')
    
]