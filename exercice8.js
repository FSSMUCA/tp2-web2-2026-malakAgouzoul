// Exercice 8 — Nettoyage de données

let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

// Traiter nom
let nomCorrige = nom.trim();
if (nomCorrige === "") {
  nomCorrige = "Inconnu";
}

// Traiter age
let ageNombre = Number(age);
let ageValide = !Number.isNaN(ageNombre) && ageNombre > 0 ? "valide" : "invalide";

// Traiter email
let indexArobase = email.indexOf("@");
let indexPoint = indexArobase !== -1 ? email.indexOf(".", indexArobase) : -1;
let emailValide = indexArobase !== -1 && indexPoint !== -1 ? "valide" : "invalide";

// Traiter scoreJeu
let scoreNombre = parseInt(scoreJeu);
if (Number.isNaN(scoreNombre)) {
  scoreNombre = 0;
}

// Traiter estAdmin
let estAdminBooleen = estAdmin === "true" ? true : false;

// Traiter derniereConnexion
let derniereConnexionValeur = derniereConnexion ?? "Jamais connecté";

// Traiter nombreConnexions
let nombreConnexionsNombre = Number(nombreConnexions);
let nombreConnexionsAffichage = nombreConnexionsNombre === 0 ? "Aucune connexion" : nombreConnexionsNombre;

// Afficher le rapport
console.log("===== RAPPORT UTILISATEUR =====");
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');
console.log("age              : " + ageNombre + " (" + ageValide + ")");
console.log('email            : "' + email + '" (' + emailValide + ")");
console.log("scoreJeu         : " + scoreNombre + " (extrait depuis \"" + scoreJeu + "\")");
console.log("estAdmin         : " + estAdminBooleen + " (attention : Boolean(\"false\") = true, conversion manuelle requise)");
console.log('derniereConnexion: "' + derniereConnexionValeur + '" (valeur par défaut via ??)');
console.log('nombreConnexions : ' + JSON.stringify(nombreConnexionsAffichage) + " (0 après conversion)");
console.log("================================");
