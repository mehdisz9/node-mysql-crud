const express = require('express')
const router = express.Router()
const citationControlleur = require ('../controlleurs/citation.controlleur');

//Lister toutes les citations
router.get('/', citationControlleur.findAll);

//Ajouter une citation
router.post('/', citationControlleur.create);

//Modifier une citation
router.put('/:id', citationControlleur.update);

//Rechercher une citation par id
router.get('/:id', citationControlleur.findById);

//Supprimer une citation
router.delete('/:id', citationControlleur.delete);

module.exports = router;