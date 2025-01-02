export const diagnosisCreator = (
  type,
  woundType,
  woundArea,
  woundSide,
  abscessType,
  abscessArea,
  abscessSide,
  abscessReason,
  neoplasmType,
  neoplasmArea,
  neoplasmSide,
  acuteOtitisSide,
  mastoiditisSide,
  isOtitisComplication,
  sinusitisType,
  sinusitisSide,
  sinusitisVariety,
  acuteOtitisType,
  paratonsilarAbscessSide,
  hearingLossType,
  hearingLossSide,
  hearingLossDegree
) => {
  const neoplasmTemplate = `${neoplasmType} ${neoplasmArea} ${neoplasmSide}.`;
  const adenoidsTemplate = `аденоїди ІІІ ступеню.`;
  const aReason = abscessReason === "лімфовузол" ? `адено` : ``;

  const abscessTemplate =
    abscessReason === "лімфовузол" && abscessType === "лімфаденіт"
      ? `гострий гнійний лімфаденіт ${abscessArea} ${abscessSide}.`
      : abscessType === "фурункул"
      ? `абсцедуючий фурункул ${abscessArea} ${abscessSide}.`
      : `${aReason}${abscessType} ${abscessArea} ${abscessSide}.`;
  const skinWoundTemplate = `${woundType} рана ${woundArea} ${woundSide}.`;

  const aoSide = sideConverter(acuteOtitisSide);
  const mastSide = sideConverter(mastoiditisSide);
  const acuteOtitisTemplate = `гострий ${acuteOtitisType} ${aoSide} середній отит.`;
  const noseFractureTemplate = `закритий перелом кісток носа зі зміщенням.`;
  const septumCurvatureTemplate = `викривлення носової переділки з порушенням носового дихання. `;
  const mastoiditisTemplate = isOtitisComplication
    ? `гострий ${mastSide} середній отит ускладнений мастоїдитом.`
    : `гострий гнійний ${mastSide} мастоїдит.`;
  const sinusitisTemplate = `гострий ${sinusitisVariety} ${sideConverter(
    sinusitisSide
  )} ${
    sinusitisType === `maxillaSinusitis`
      ? `верхньощелепний синусит`
      : sinusitisType === `etmoiditis`
      ? `етмоїдит`
      : sinusitisType === `frontitis`
      ? `фронтит`
      : sinusitisType === `hemisinusitis`
      ? `гемісинусит`
      : sinusitisType === `pansinusitis`
      ? `пансинусит`
      : `синусит`
  }.`;
  const tonsilitisTemplate = `хронічний декомпенсований тонзиліт.`;
  const sideSplittedArray = paratonsilarAbscessSide
    ? paratonsilarAbscessSide.split("о")
    : [""];
  const paratonsilarAbscessTemplate = `${sideSplittedArray[0]}обічний паратонзилярний абсцес`.slice(
    1
  );
  const hearingLossTemplate = `${hearingLossType} ${hearingLossSide} сенсоневральна приглухуватість 
  ${hearingLossDegree}-го ступеню.`;
  switch (type) {
    case "adenoids":
      return adenoidsTemplate;
    case "skinWound":
      return skinWoundTemplate;
    case "abscess":
      return abscessTemplate;
    case "neoplasm":
      return neoplasmTemplate;
    case "acuteOtitis":
      return acuteOtitisTemplate;
    case "mastoiditis":
      return mastoiditisTemplate;
    case "noseFracture":
      return noseFractureTemplate;
    case "sinusitis":
      return sinusitisTemplate;
    case "tonsilitis":
      return tonsilitisTemplate;
    case "septumCurvature":
      return septumCurvatureTemplate;
    case "paratonsilarAbscess":
      return paratonsilarAbscessTemplate;
    case "hearingLoss":
      return hearingLossTemplate;
    default:
      return "";
  }
};
const sideConverter = (side) => {
  const result =
    side === "двобічний"
      ? side
      : side === "праворуч"
      ? "правобічний"
      : side === "ліворуч"
      ? "лівобічний"
      : "";
  return result;
};
