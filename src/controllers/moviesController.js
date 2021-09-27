const db = require('../database/models');
const {Op} = require('sequelize');

module.exports = {
    list : (req,res) => {
        db.Pelicula.findAll()
            .then(movies => {
                return res.render('moviesList', {
                    movies
                })
            })
            .catch(e => console.log(e))
    },
    
    nueva : (req,res) => {
        db.Pelicula,findAll({
            order : [
                ['relase_date','DESC']
            ],
            limit : 5
        })
            .then(movies => res.render('newesMovires', {
                movies
            }))
            .catch(e=> console.log(e))
    },

    recommended : (req,res) => {
        db.Pelicula.FindAll({
            where : {
                awards : {
                    [Op.gte] : 8
                }
            }
        })
            .then( movies => res.render('recommendedMovies', {
                movies
            }))
            .catch(e => console.log(e))
    },

    detail : (req,res) => {
        db.Pelicula.findByPk(req.params.id)
            .then(movie => res.render('moviesDetail', {
                movie
            }))
            .catch(e => console.log(e))
    }

}