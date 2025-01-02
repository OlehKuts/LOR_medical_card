export const lastTimeChecker = (time) => {
  let clean = Number(time).toFixed(0);
  let cleanTime = Number(clean);
  if (time === "") {
    return "23.55";
  }
  if (cleanTime < 21) {
    cleanTime += 3;
    return `${cleanTime}.00`;
  } else {
    return "23.55";
  }
};
