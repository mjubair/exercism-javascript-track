const RNA = { C: "G", G: "C", T: "A", A: "U" };

export const toRna = dna => dna.replace(/C|G|T|A/g, match => RNA[match]);
