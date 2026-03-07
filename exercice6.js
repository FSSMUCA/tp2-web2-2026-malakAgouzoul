// Exercice 6 — Opérateurs ?? vs ||

let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

console.log("===== PARTIE A : Opérateur ?? =====");
console.log("nom ?? 'valeur par défaut' -> " + (nom ?? "valeur par défaut"));
console.log("age ?? 'valeur par défaut' -> " + (age ?? "valeur par défaut"));
console.log("ville ?? 'valeur par défaut' -> " + (ville ?? "valeur par défaut"));
console.log("score ?? 'valeur par défaut' -> " + (score ?? "valeur par défaut"));
console.log("actif ?? 'valeur par défaut' -> " + (actif ?? "valeur par défaut"));

console.log("\n===== PARTIE B : Opérateur || =====");
console.log("nom || 'valeur par défaut' -> " + (nom || "valeur par défaut"));
console.log("age || 'valeur par défaut' -> " + (age || "valeur par défaut"));
console.log("ville || 'valeur par défaut' -> " + (ville || "valeur par défaut"));
console.log("score || 'valeur par défaut' -> " + (score || "valeur par défaut"));
console.log("actif || 'valeur par défaut' -> " + (actif || "valeur par défaut"));

console.log("\n===== PARTIE C : Comparaison ?? et || =====");
let nomResultat = (nom ?? "valeur par défaut") === (nom || "valeur par défaut") ? "même résultat" : "résultat différent";
let ageResultat = (age ?? "valeur par défaut") === (age || "valeur par défaut") ? "même résultat" : "résultat différent";
let villeResultat = (ville ?? "valeur par défaut") === (ville || "valeur par défaut") ? "même résultat" : "résultat différent";
let scoreResultat = (score ?? "valeur par défaut") === (score || "valeur par défaut") ? "même résultat" : "résultat différent";
let actifResultat = (actif ?? "valeur par défaut") === (actif || "valeur par défaut") ? "même résultat" : "résultat différent";

console.log("nom   : ?? et || -> " + nomResultat);
console.log("age   : ?? et || -> " + ageResultat);
console.log("ville : ?? et || -> " + villeResultat);
console.log("score : ?? et || -> " + scoreResultat);
console.log("actif : ?? et || -> " + actifResultat);
