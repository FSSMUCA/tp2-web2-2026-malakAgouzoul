// Exercice 4 — Comparaisons == vs ===

let differences = 0;

// Paires à tester
let paires = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0],
];

// Parcourir et afficher les résultats
for (let i = 0; i < paires.length; i++) {
  let val1 = paires[i][0];
  let val2 = paires[i][1];

  let resultatEgal = val1 == val2;
  let resultatStrictEgal = val1 === val2;

  console.log(String(val1).padEnd(20) + "== " + String(val2).padEnd(15) + "-> " + resultatEgal + "    |   " + String(val1).padEnd(20) + "=== " + String(val2).padEnd(15) + "-> " + resultatStrictEgal);

  // Compter les différences
  if (resultatEgal && !resultatStrictEgal) {
    differences++;
  }
}

// Ligne séparatrice
console.log("---");

// Afficher la conclusion
console.log(differences + " paire(s) où == et === donnent des résultats différents");
