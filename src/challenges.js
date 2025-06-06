// Desafio 1
function compareTrue(value, value2) {
  if (!value && !value2) {
    return false;
  }
  if (!value || !value2) {
    return false;
  }
  return true;
}

// Desafio 2
function calcArea(base, height) {
  const result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(phase) {
  const result = phase.split(' ');
  return result;
}

// Desafio 4
function concatName(arr) {
  const first = arr.shift();
  const last = arr.pop();

  const result = `${last}, ${first}`;

  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (!wins && !ties) {
    return 0;
  }
  const result = wins * 3 + ties;

  return result;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
