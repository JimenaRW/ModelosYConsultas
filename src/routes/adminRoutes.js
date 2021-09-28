const express = require('express');
const router = express.Router();
const { add, create, edit, update, remove, destroy } = require('../controllers/adminController');

/* Validations */
const moviesValidator = require('../validations/moviesValidator');

/* routing de /admin*/
router
    .get('/create', add)
    .post('/create', moviesValidator, create)
    .get('/edit/:id', edit)
    .put('/update/:id', moviesValidator, update)
    .get('/destroy/:id', remove)
    .delete('/delete/:id', destroy)

module.exports = router;