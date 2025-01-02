export const exceedReminder = (length) => {
  if (length > 440) {
    alert(
      "Сховище майже переповнене! Кількість збережених медичних карт перевищила допустиму межу. Видаліть несуттєві медичні карти, попередньо експортуйтувавши дані або видаліть їх безповоротно."
    );
  };
};

export const setOneTrueInArray = (array, index) => {
  return array.map((item, idx) => (idx === index ? true : false));
};
export const numArrayCreator = (first, quantity) => {
  let arr = [];
  for (let i = first; i < quantity + 1; i++) {
    arr.push(i);
  }
  return arr;
};
export const isDiseaseUrgent = (disease) => {
  let result = false;
  switch (disease) {
    case "гострий отит":
    case "мастоїдит":
    case "паратонзилярний абсцес":
    case "рана обличчя":
    case "перелом носа":
    case "тонзиліт":
    case "синусит":
      result = true;
      break;
    default:
      result = false;
  }
  return result;
};

export const progressChecker = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result = arguments[i] ? result + 10 : result;
  }
  return result;
};

export const getResidence = (features) => {
  const {
    town,
    street,
    district,
    fullAdress,
    adress,
    building,
    letter,
    flat
  } = features;
  let realFlat = flat ? `/${flat}` : "";
  let result =
    town !== ""
      ? `м.${town}, вул.${street} ${building}${letter}${realFlat}`
      : district !== ""
      ? `${district}, ${adress}`
      : fullAdress !== ""
      ? fullAdress
      : "";
  return `${result}.`;
};

export const isRelevantDate = (startParts) => {
  const numberedParts = startParts.map((item) => Number(item));
  const initDate = new Date();
  const realDay = initDate.getDate();
  const realMonth = initDate.getMonth() + 1;
  const realYear = initDate.getFullYear();
  const result =
    (realDay === numberedParts[0] &&
      realMonth === numberedParts[1] &&
      realYear === numberedParts[2]) ||
    (realDay === numberedParts[0] + 1 &&
      realMonth === numberedParts[1] &&
      realYear === numberedParts[2]) ||
    (realDay === 1 &&
      realMonth === numberedParts[1] - 1 &&
      realYear === numberedParts[2]) ||
    (realDay === 1 && realMonth === 1 && realYear === numberedParts[2] - 1)
      ? true
      : false;
  return result;
};
export const fullNameCutter = (fullName) => {
  if (fullName === undefined) return;
  const splitedArray = fullName.includes(" ") ? fullName.split(" ") : fullName;
  return fullName.includes(" ") && splitedArray.length > 2
    ? `${splitedArray[0]} ${splitedArray[1][0]}.${splitedArray[2][0]}.`
    : fullName;
};

export const hrCounter = (rate) => {
  let numRate = Number(rate);
  let randomInc = Number((Math.random() * 3).toFixed(0));
  numRate = numRate + randomInc;
  return numRate;
};
export const rrCounter = (rate) => {
  let numRate = Number(rate);
  let randomInc = Number((Math.random() * 5).toFixed(0));
  numRate = numRate + randomInc;
  return numRate;
};

export const stringCapitalizer = (str) => {
  const result =
    str.length === 0 ? "" : `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
};

export function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}