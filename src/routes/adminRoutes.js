const express = require('express');
const router = express.Router();
const { add, create, edit, update, remove, destroy } = require('../controllers/adminController');


/* routing de /admin*/
router
    .get('/create', add)
    .post('/create', create)
    .get('/edit/:id', edit)
    .put('/update/:id', update)
    .get('/destroy/:id', remove)
    .delete('/delete/:id', destroy)

module.exports = router;