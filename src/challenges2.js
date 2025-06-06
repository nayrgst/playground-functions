// Desafio 10
function techList(tech, name) {
  if (!tech.length) return 'Vazio!';
  return tech.sort().map((item) => ({ tech: item, name }));
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
