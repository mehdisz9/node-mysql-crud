'use strict';
const Citation = require('../models/citation.model');
//Lister toutes les citations
exports.findAll = function(req, res){
        Citation.ListeCitations(function(err,citation){
            console.log('Message sympa du controlleur!');
            if(err)
                res.send(err);
                console.log('res', citation);
                res.send(citation);
            
        });
};
//Ajouter une citation
exports.create = function(req, res) {
    const nv_citation = new Citation(req.body);
    //gérer l'erreur null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Merci de renseigner tous les champs!' });
    }else{
        Citation.ajouterCitation(nv_citation, function(err, citation) {
      if (err)
      res.send(err);
      res.json({error:false,message:"Houston, tous va bien!",data:citation});
    });
    }
    };
//Modifier une citation
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Merci de remplir tous les champs necéssaire!' });
    }else{
      Citation.modifierCitation(req.params.id, new Citation(req.body), function(err, citation) {
     if (err)
     res.send(err);
     res.json({ error:false, message: 'Jarvis à Tony, modification terminé' });
  });
  }
  };
//Rechercher par id
exports.findById = function(req, res) {
    Citation.rechercherParId(req.params.id, function(err, citation) {
      if (err)
      res.send(err);
      res.json(citation);
    });
    };  
 //Supprimer une citation
 exports.delete = function(req, res) {
    Citation.supprimerCitation( req.params.id, function(err, quote) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'QG ici 007, opération nettoyage terminé! ' });
    });
    }; 
