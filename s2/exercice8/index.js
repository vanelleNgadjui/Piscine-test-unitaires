// Exercice 8: Créer une fonction pour formater une durée en heures et minutes
module.exports = function formaterDuree(heures, minutes) {
    const heuresFormatees = heures < 10 ? `0${heures}` : `${heures}`;
    const minutesFormatees = minutes < 10 ? `0${minutes}` : `${minutes}`;
      return `${heuresFormatees}:${minutesFormatees}`;
  };