// Exercice 2 — Truthy et Falsy

let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
  let val = valeurs[i];
  let affichage;

  // Afficher (chaine vide) pour la chaîne vide
  if (val === "") {
    affichage = "(chaine vide)";
  } else {
    affichage = String(val);
  }

  // Tester si truthy ou falsy
  let resultat = val ? "truthy" : "falsy";

  console.log(affichage + " -> " + resultat);
}
