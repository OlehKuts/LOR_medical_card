export const anamnesisMorbiCreator = (
  type,
  start1,
  start2,
  injuryDate,
  injuryTime,
  injuryReason,
  abscessType,
  abscessReason,
  growthRate,
  sinusitisType,
  sinusitisVariety
) => {
  const adenoidsTemplate = `хворіє тривалий час, періодично дитина лікувалася з тимчасовим покращенням.`;
  const neoplasmTemplate = `зі слів батьків, хворіє тривалий час, новоутвір з’явився непомітно і збільшувався ${growthRate}.`;
  let _injuryTime = injuryTime === "" ? "" : `о ${injuryTime} год`;
  const skinWoundTemplate = `зі слів батьків, травма відбулась ${injuryDate} ${_injuryTime}, в результаті ${injuryReason}. Дитина свідомості не втрачала, не нудило.`;
  const beginning = `зі слів батьків, хворіє ${start1}-й ${start2}.`;
  const abscessFinishing =
    abscessReason === "лімфовузол"
      ? "Захворювання пов'язують зі запаленням лімфовузла у цій ділянці."
      : abscessType === "фурункул"
      ? `Захворювання пов'язують зі спробою вичавити "прищ".`
      : "Захворювання ні з чим не пов'язують.";
  const acuteOtitisTemplate = `${beginning} Лікувалася амбулаторно, без покращення.`;
  const septumCurvatureTemplate = `хворіє з народження.`;
  const sinusitisTemplate =
    (sinusitisType === "maxillaSinusitis" || sinusitisType === "etmoiditis") &&
    sinusitisVariety === "поствірусний"
      ? `${beginning} На протязі останнього місяця дитина перехворіла вірусним захворюванням.`
      : beginning;
  const hearingLossTemplate =
    start1 === 1 && start2 === "день" ? "хворіє тривалий час." : beginning;
  switch (type) {
    case "adenoids":
    case "tonsilitis":
      return adenoidsTemplate;
    case "skinWound":
      return skinWoundTemplate;
    case "abscess":
      return `${beginning} ${abscessFinishing}`;
    case "neoplasm":
      return neoplasmTemplate;
    case "acuteOtitis":
    case "mastoiditis":
      return acuteOtitisTemplate;
    case "noseFracture":
      return skinWoundTemplate;
    case "septumCurvature":
      return septumCurvatureTemplate;
    case "sinusitis":
      return `${sinusitisTemplate}`;
    case "paratonsilarAbscess":
      return beginning;
    case "hearingLoss":
      return hearingLossTemplate;
    default:
      return "хворіє тривалий час.";
  }
};
