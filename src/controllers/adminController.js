const db = require('../database/models');


module.exports = {

    add: (req, res) => {
        return res.render('moviesAdd')
    },

    create: (req, res) => {
        const { title } = req.body;

        db.Pelicula.create({
            ...req.body,
            title: title.trim()
        })
            .then(movie => {
                console.log(movie)
                res.redirect('/movies/detail/' + movie.id)
            })
    },

    edit: (req, res) => {
        db.Pelicula.findByPk(req.params.id)
            .then(Movie => res.render('moviesEdit', {
                Movie
            }))

    },

    update: (req, res) => {
        db.Pelicula.update(
            {
                ...req.body
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