// Exercice 5 — Vérification de nombres

let nombres = [
  0,
  NaN,
  Infinity,
  -Infinity,
  42,
  3.14,
  Number.MAX_SAFE_INTEGER + 1,
  -0,
];

for (let i = 0; i < nombres.length; i++) {
  let n = nombres[i];
  let classification;

  // Vérifier si NaN
  if (Number.isNaN(n)) {
    classification = "INVALIDE";
  }
  // Vérifier si Infinity ou -Infinity
  else if (n === Infinity || n === -Infinity) {
    classification = "INFINI";
  }
  // Vérifier si -0
  else if (1 / n === -Infinity) {
    classification = "ZERO NEGATIF";
  }
  // Vérifier si entier hors limites
  else if (Number.isInteger(n) && Math.abs(n) > Number.MAX_SAFE_INTEGER) {
    classification = "ENTIER HORS LIMITES";
  }
  // Vérifier si entier sur (dans les limites)
  else if (Number.isInteger(n)) {
    classification = "ENTIER SUR";
  }
  // Sinon c'est un décimal
  else {
    classification = "DECIMAL";
  }

  console.log(n + " -> " + classification);
}
