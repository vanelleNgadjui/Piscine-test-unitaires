const express = require('express');
const app = express();
const addition = require('./s1/exercice1')
const soustraction = require('./s1/exercice2')
const multiplication = require('./s1/exercice3')
const division = require('./s1/exercice4')
const factorielle = require('./s1/exercice5')
const estPairOuImpair = require('./s1/exercice6')
const celsiusEnFahrenheit = require('./s1/exercice7')
const aireCercle = require('./s1/exercice8')
const estPalindrome = require('./s1/exercice9')
const pgcd = require('./s1/exercice10')

const dateIlYADixAns = require('./s2/exercice1')
const formaterDate = require('./s2/exercice2')
const differenceEnJours = require('./s2/exercice3')
const ajouterJours = require('./s2/exercice4')
const estAnneeBissextile = require('./s2/exercice5')
const premierJourDuMois = require('./s2/exercice6')
const dernierJourDuMois = require('./s2/exercice7')
const formaterDuree = require('./s2/exercice8')
const chevauchementDates = require('./s2/exercice9')
const calculerAge = require('./s2/exercice10')

const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    return res.json([{ id: 1, name: 'John Doe' }]);
});

app.post('/:param', (req, res) => {
    return res.json([{ error: false, num: req.params.param }]);
});


app.post("/s1/exercice1", (req, res) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
  
    if (n1 == null || n2 == null) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    if (!n1) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    if (!n2) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    let a = addition(n1, n2);
    return res.json([{ reponse: a }]);
  });

  app.post("/s1/exercice2", (req, res) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
  
    if (n1 == null || n2 == null) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    if (!n1) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    if (!n2) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    let a = soustraction(n1, n2);
    return res.json([{ reponse: a }]);
});


app.post("/s1/exercice3", (req, res) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
  
    if (n1 == null || n2 == null) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    if (!n1) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    if (!n2) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    let a = multiplication(n1, n2);
    return res.json([{ reponse: a }]);
});


app.post("/s1/exercice4", (req, res) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
  
    if (n1 == null || n2 == null) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    if (!n1) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    if (!n2) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    if (n2 === 0) {
      return res.json([{ reponse: "Division par zéro n'est pas autorisée" }]);
    }
  
    let a = division(n1, n2);
    return res.json([{ reponse: a }]);
});


app.post("/s1/exercice5", (req, res) => {
    const n1 = req.body.n1;
  
    if (n1 == null || n1 < 0) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide et positif" }]);
    }
  
    let a = factorielle(n1);
    return res.json([{ reponse: a }]);
});

app.post("/s1/exercice6", (req, res) => {
    const n1 = req.body.n1;
  
    if (n1 == null || isNaN(n1)) {
      return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    let a = estPairOuImpair(n1);
    return res.json([{ reponse: a }]);
});

app.post("/s1/exercice7", (req, res) => {
    const n1 = req.body.n1;
  
    if (n1 == null || isNaN(n1)) {
      return res.json([{ reponse: "Veuillez entrer une valeur numérique en degrés Celsius" }]);
    }
  
    let a = celsiusEnFahrenheit(n1);
    return res.json([{ reponse: a }]);
});

app.post("/s1/exercice8", (req, res) => {
    const n1 = req.body.n1;
  
    if (n1 == null || isNaN(n1) || n1 <= 0) {
      return res.json([{ reponse: "Veuillez entrer un nombre positif pour le rayon du cercle" }]);
    }
  
    let a = aireCercle(n1);
    return res.json([{ reponse: a }]);
});

app.post("/s1/exercice9", (req, res) => {
    const n1 = req.body.n1;
  
    if (n1 == null) {
      return res.json([{ reponse: "Veuillez entrer une chaîne de caractères" }]);
    }
  
    let a = estPalindrome(n1);
    return res.json([{ reponse: a }]);
});


app.post("/s1/exercice10", (req, res) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
  
    if (n1 == null || isNaN(n1) || n2 == null || isNaN(n2)) {
      return res.json([{ reponse: "Veuillez entrer deux nombres valides" }]);
    }
  
    let a = pgcd(n1, n2);
    return res.json([{ reponse: a }]);
});


app.post("/s2/exercice1", (req, res) => {
    const date = dateIlYADixAns();
    return res.json([{ reponse: date }]);
  });
  
  app.post("/s2/exercice2", (req, res) => {
    const date = new Date(req.body.date);
  
    if (isNaN(date.getTime())) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer une date valide." });
    }
  
    if (date === null || date === undefined) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer une date valide." });
    }
  
    const dateFormatee = formaterDate(date);
    return res.json([{ reponse: dateFormatee }]);
  });
  
  app.post("/s2/exercice3", (req, res) => {
    const date1 = new Date(req.body.date1);
    const date2 = new Date(req.body.date2);
  
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer des dates valides." });
    }
  
    if (date1.getTime() > date2.getTime()) {
      return res.status(400).json({
        reponse: "La première date doit être antérieure à la deuxième.",
      });
    }
  
    const jours = differenceEnJours(date1, date2);
    return res.json([{ reponse: jours }]);
  });
  
  app.post("/s2/exercice4", (req, res) => {
    const { date, jours } = req.body;
  
    if (jours === 0 || jours === null || jours === undefined) {
      return res.status(400).json({ reponse: "Veuillez entrer un nombre." });
    }
  
    if (!date || isNaN(jours)) {
      return res.status(400).json({ reponse: "Données invalides." });
    }
  
    if (jours < 0) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer un nombre positif." });
    }
  
    const dateResultat = ajouterJours(new Date(date), jours);
    return res.json({ reponse: dateResultat.toISOString() });
  });
  
  app.post("/s2/exercice5", (req, res) => {
    let { annee } = req.body; 
  
    if (!annee && annee !== 0) {
      return res.status(400).json({ reponse: "Données invalides." });
    }
  
    annee = Number(annee); 
  
    if (isNaN(annee)) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer une année valide." }); 
    }
  
    if (annee < 0) {
      return res.status(400).json({ reponse: "L'année doit être positive." });
    }
  
    try {
      const estBissextile = estAnneeBissextile(annee); 
      return res.json({ reponse: estBissextile });
    } catch (error) {
      return res.status(500).json({ reponse: "Erreur du serveur." });
    }
  });
  
  app.post("/s2/exercice6", (req, res) => {
    const date = new Date(req.body.date);
  
    if (isNaN(date.getTime())) {
      return res
        .status(400)
        .json({ reponse: "Veuillez fournir une date valide." });
    }
  
    const premierJour = premierJourDuMois(date);
    return res.json({ reponse: premierJour.toISOString().split("T")[0] });
  });
  
  app.post("/s2/exercice7", (req, res) => {
    const date = new Date(req.body.date);
    if (isNaN(date.getTime())) {
      return res
        .status(400)
        .json({ reponse: "Veuillez fournir une date valide." });
    }
    const dernierJour = dernierJourDuMois(date);
    return res.json({ reponse: dernierJour });
  });
  
  app.post("/s2/exercice8", (req, res) => {
    const { heures, minutes } = req.body;
  
    if (heures > 23) {
      return res.status(400).json({
        reponse: "Veuillez fournir une heure valide.",
      });
    }
  
    if (minutes > 59) {
      return res.status(400).json({
        reponse: "Veuillez fournir une minute valide.",
      });
    }
  
    if (typeof heures !== "number" || typeof minutes !== "number") {
      return res.status(400).json({
        reponse:
          "Veuillez fournir des nombres valides pour les heures et les minutes.",
      });
    }
  
    const dureeFormatee = formaterDuree(heures, minutes);
    return res.json({ reponse: dureeFormatee });
  });
  
  app.post("/s2/exercice9", (req, res) => {
    const { debut1, fin1, debut2, fin2 } = req.body;
  
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
  
    if (
      isNaN(new Date(debut1).getTime()) ||
      isNaN(new Date(fin1).getTime()) ||
      isNaN(new Date(debut2).getTime()) ||
      isNaN(new Date(fin2).getTime())
    ) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer des dates valides." });
    }
  
    if (
      !dateFormatRegex.test(debut1) ||
      !dateFormatRegex.test(fin1) ||
      !dateFormatRegex.test(debut2) ||
      !dateFormatRegex.test(fin2)
    ) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer des dates valides." });
    }
  
    if (new Date(debut1).getTime() > new Date(fin1).getTime()) {
      return res.status(400).json({
        reponse: "La date de début doit être antérieure à la date de fin.",
      });
    }
  
    const chevauchent = chevauchementDates(debut1, fin1, debut2, fin2);
    return res.json({ reponse: chevauchent });
  });
  
  app.post("/s2/exercice10", (req, res) => {
    const { dateNaissance } = req.body;
  
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
  
    if (!dateNaissance || !dateFormatRegex.test(dateNaissance)) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer une date de naissance valide." });
    }
  
    if (isNaN(new Date(dateNaissance).getTime())) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer une date de naissance valide." });
    }
  
    if (new Date(dateNaissance).getTime() > new Date().getTime()) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer une date de naissance valide." });
    }
  
    if (new Date(dateNaissance).getFullYear() < 1900) {
      return res
        .status(400)
        .json({ reponse: "Veuillez entrer une date de naissance valide." });
    }
  
    const age = calculerAge(dateNaissance);
    return res.json({ reponse: age });
  });

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app


