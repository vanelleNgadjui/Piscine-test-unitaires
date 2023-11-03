// Exercice 4: Créer une fonction pour ajouter un nombre de jours à une date
module.exports = function ajouterJours(date, jours) {
    const result = new Date(date);
    result.setDate(result.getDate() + jours);
    return result;
  };