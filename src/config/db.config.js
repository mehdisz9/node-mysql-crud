'use strict';
const mysql = require('mysql');

//Connexion MySQL locale, ex: via Xammp Wampp...
const dbConnexion = mysql.createConnection({
    
    // => IMPORTANT!!
    // Pour le user et password ce sont les identifiants et mots de passe par defaut pour acceder à PhpMyAdmin
    // Penser bien à mettre les vôtres 
    
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db-nemj'
});
dbConnexion.connect(function(err) {
  if (err) throw err;
  console.log("La Connexion à la base de données est établie!");
});
module.exports = dbConnexion;