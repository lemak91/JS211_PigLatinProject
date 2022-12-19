const vowels = ["e", "i", "o", "u", "a"];
const ending = "-yay";

export default function convertToPiglatin(word) {
  if (vowels.includes(word[0])) {
    return word + ending;
  }
  if (word === "") {
    return "no input";
  } else {
    let firstMatch = word.match(/[aeiou]/g) || 0;
    let vowel = word.indexOf(firstMatch[0]);
    if (vowel === 0) {
      return word + `-ay`;
    } else {
      return word.substring(vowel) + `-${word.substring(0, vowel)}ay`;
    }
  }
}
