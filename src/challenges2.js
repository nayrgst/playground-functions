// Desafio 10
function techList(tech, name) {
  if (!tech.length) return 'Vazio!';
  return tech.sort().map((item) => ({ tech: item, name }));
}

// Desafio 11
function isInvalidLength(numbers) {
  return numbers.length !== 11;
}

function hasInvalidValues(numbers) {
  return numbers.some((n) => n < 0 || n > 9);
}

function hasNumberRepeatedThreeOrMoreTimes(numbers) {
  const counts = {};

  for (const n of numbers) {
    counts[n] = (counts[n] || 0) + 1;
    if (counts[n] >= 3) return true;
  }

  return false;
}

function generatePhoneNumber(numbers) {
  if (isInvalidLength(numbers)) {
    return 'Array com tamanho incorreto.';
  }

  if (hasInvalidValues(numbers) || hasNumberRepeatedThreeOrMoreTimes(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  const ddd = numbers.slice(0, 2).join('');
  const firstPart = numbers.slice(2, 7).join('');
  const secondPart = numbers.slice(7).join('');

  return `(${ddd}) ${firstPart}-${secondPart}`;
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
