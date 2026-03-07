// Exercice 7 — Panier d'achat

let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

// 1. Calculer le sous-total
let sousTotal = prix * quantite;
console.log("Sous-total: " + sousTotal + " MAD");

// 2. Calculer la réduction (uniquement si codePromo n'est pas null ET estMembre est true)
let reduction = 0;
if (codePromo !== null && estMembre) {
  reduction = sousTotal * (reductionPourcentage / 100);
}
console.log("Réduction : " + reduction + " MAD");

// 3. Calculer le total final
let totalFinal = sousTotal - reduction;
console.log("Total final: " + totalFinal + " MAD");

// 4. Vérifier si le solde est suffisant
let paiementAccepte = soldeCompte >= totalFinal;
console.log(paiementAccepte ? "Paiement accepté" : "Solde insuffisant");

// 5. Si paiement accepté, calculer le nouveau solde
let nouveauSolde;
if (paiementAccepte) {
  nouveauSolde = soldeCompte - totalFinal;
  console.log("Nouveau solde: " + nouveauSolde + " MAD");
}

// 6. Récapitulatif final
console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit   : " + nomProduit);
console.log("Quantité  : " + quantite);
console.log("Prix unit.: " + prix + " MAD");
console.log("Sous-total: " + sousTotal + " MAD");
console.log("Réduction : " + reduction + " MAD");
console.log("Total     : " + totalFinal + " MAD");
console.log("Statut    : " + (paiementAccepte ? "Paiement accepté" : "Solde insuffisant"));
if (paiementAccepte) {
  console.log("Solde     : " + nouveauSolde + " MAD");
}
console.log("=========================");
