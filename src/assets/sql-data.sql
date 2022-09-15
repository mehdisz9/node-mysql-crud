-- Création de la base de données et de la table citations via un script SQL
CREATE DATABASE bd_nemjs;
CREATE  TABLE IF NOT EXISTS `citations` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `nom` VARCHAR(255) NOT NULL,
  `prenom` VARCHAR(255) NOT NULL,
  `citation` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- Insértion d'une ligne de données dans les champs via un script SQL
INSERT INTO `bd-nemjs`.`citations` (`nom`, `prenom`, `citation`)
VALUES ('Oscar', 'Wilde', 'Be yourself; everyone else is already taken.');

