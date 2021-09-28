const db = require('../database/models');

const { validationResult } = require('express-validator');


module.exports = {

    add: (req, res) => {
        return res.render('moviesAdd')
    },

    create: (req, res) => {

        let errors = validationResult(req)

        if (errors.isEmpty()) {

            const { title } = req.body;

            db.Pelicula.create({
                ...req.body,
                title: title.trim()
            })
                .then(movie => {
                    console.log(movie)
                    res.redirect('/movies/detail/' + movie.id)
                })
                .catch(e => console.log(e))
        }
        else {
            return res.render('moviesAdd', {
                errores: errors.mapped(),
                old: req.body
            })
        }
        
        
    },

    edit: (req, res) => {
        db.Pelicula.findByPk(req.params.id)
        .then(Movie => {
            return res.send(Movie.release_date)
            res.render('moviesEdit', {
                Movie,
                release_date

            })
        }) 

    },

    update: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            const { title } = req.body;
            db.Pelicula.update(
                {
                    ...req.body,
                    title: title.trim()
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )

                .then(() => {
                    res.redirect('/movies/detail/' + req.params.id)
                })
                .catch(e => console.log(e))
        }
        else {
            db.Pelicula.findByPk(req.params.id)
            .then(Movie => res.render('moviesEdit', {
                Movie,
                errores: errors.mapped(),
                old: req.body
            }))
            .catch(e => console.log(e))
        }

    },

    remove: (req, res) => {
        db.Pelicula.findByPk(req.params.id)
            .then(Movie => res.render('moviesDelete', {
                Movie
            }))
            .catch(e => console.log(e))
    },

    destroy: (req, res) => {
        db.Pelicula.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        )
            .then(() => res.redirect('/movies'))
            .catch(e => console.log(e))
    }
}