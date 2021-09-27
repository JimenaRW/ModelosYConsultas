const db = require('../database/models');

module.exports = {
    list : (req,res) => {
        db.Pelicula.findAll()
            .then( genres => {
                return res.render('genresList', { 
                    genres 
                })
            })
            .catch(e => console.log(e))

    },
    
    detail : (req,res) => {
        db.Pelicula.FindByPk( req.params.id )
            .then( genre => {
                return res.render('genresDetail', {
                    genre
                })
            })
            .catch(e => console.log(e))

    }
}