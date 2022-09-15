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
//Ajouter une citation
    Citation.ajouterCitation = function (nCitation, result) {
        dbConnexion.query("INSERT INTO citations set ?", nCitation, function (err, res) {
            if(err) {
            console.log("erreur: ", err);
            result(err, null);
                 }
            else    {
            console.log(res.insertId);
            result(null, res.insertId);
                    }
            });
         };
    //Modifier une citation     
    Citation.modifierCitation = function(id, citation, result){
        dbConnexion.query("UPDATE citations SET nom=?,prenom=?,citation=? WHERE id = ?", [citation.nom,citation.prenom,citation.citation, id],
             function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }else{
              result(null, res);
            }
            });
            };
    //Rechercher citation par id
    Citation.rechercherParId = function (id, result) {
        dbConnexion.query("Select * from citations where id = ? ", id, function (err, res) {
        if(err) {
          console.log("erreur: ", err);
          result(err, null);
        }
        else{
          result(null, res);
        }
        });
        };        
    //Supprimer une citation
    Citation.supprimerCitation = function(id, result){
     dbConnexion.query("DELETE FROM citations WHERE id = ?", [id], function (err, res) {
            if(err) {
            console.log("error: ", err);
            result(null, err);
            }
            else{
            result(null, res);
            }
            });
            };

module.exports = Citation;