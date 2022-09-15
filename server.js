const express = require('express');
const bodyParser = require('body-parser');
//Création du serveur via express
const app = express();
//Déclaration et choix du port 7000 si aucun trouvée dans le fichier .env
const port = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({ extended: true }))
// passe le contenu en json
app.use(bodyParser.json())

//Ajout du point d'entrée des routes de l'application
const citationRoutes = require('./src/routes/citations.routes');
app.use('/api/v1/citations', citationRoutes)

//Démarage et mise en stand by de l'application en attendant les requettes
app.listen(port,() => {
    console.log(`Le Serveur est actif, écoute le port ${port}`);
});