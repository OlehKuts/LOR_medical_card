export const plannedChecker = (type) => {
  switch (type) {
    case "neoplasm":
    case "adenoids":
    case "septumCurvature":
    case "tonsilitis":
      return true;
    default:
      return false;
  }
};
