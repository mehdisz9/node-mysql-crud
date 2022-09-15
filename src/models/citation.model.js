'use strict';
var dbConnexion = require('./../config/db.config');

//L'objet Citation

var Citation = function(citation){
    this.nom = citation.nom;
    this.prenom = citation.prenom;
    this.citation = citation.citation;
};

//Retourne La liste de toutes les citations disponible
    Citation.ListeCitations = function (result) {
        dbConnexion.query("Select * from citations", function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
                }
            else {
                console.log('citations : ', res);
                result(null, res);
                }
            });
        };
module.exports = Citation;