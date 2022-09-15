const express = require('express');

//Création du serveur via express
const app = express();
//Déclaration et choix du port 7000 si aucun trouvée dans le fichier .env
const port = process.env.PORT || 7000;

//Démarage et mise en stand by de l'application en attendant les requettes
app.listen(port,() => {
    console.log(`Le Serveur est actif, écoute le port ${port}`);
});