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
function highestCount(array) {
  let num = array[0];
  let quant = 1;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > num) {
      num = array[i];
      quant = 1;
    } else if (array[i] === num) {
      quant += 1;
    }
  }
  return quant;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);

  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist1 > dist2) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  return array.map((num) => {
    const div3 = num % 3 === 0;
    const div5 = num % 5 === 0;
    if (div3 && div5) return 'fizzBuzz';
    if (div5) return 'buzz';
    if (div3) return 'fizz';
    return 'bug!';
  });
}

// Desafio 9
function encode(string) {
  const items = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  return string
    .split('')
    .map((char) => items[char] || char)
    .join('');
}
function decode(string) {
  const items = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  return string
    .split('')
    .map((char) => items[char] || char)
    .join('');
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
