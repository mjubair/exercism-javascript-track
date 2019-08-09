const PROTEINS = {
  Methionine: ["AUG"],
  Phenylalanine: ["UUU", "UUC"],
  Leucine: ["UUA", "UUG"],
  Serine: ["UCU", "UCC", "UCA", "UCG"],
  Tyrosine: ["UAU", "UAC"],
  Cysteine: ["UGU", "UGC"],
  Tryptophan: ["UGG"],
  STOP: ["UAA", "UAG", "UGA"]
};

export const translate = (rna = "") => {
  let result = [];
  let protein;
  let codons = rna.match(/.{1,3}/g) || [];

  for (let codon of codons) {
    protein = Object.keys(PROTEINS).find(key => PROTEINS[key].includes(codon));
    if (!protein) throw new Error("Invalid codon");
    if (protein === "STOP") break;

    result.push(protein);
  }

  return result;
};
