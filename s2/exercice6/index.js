// Exercice 6: Créer une fonction pour obtenir le premier jour du mois d'une date donnée
module.exports = function premierJourDuMois(date) {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1, 12));
  };