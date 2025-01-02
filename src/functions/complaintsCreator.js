export const complaintsCreator = (
  type,
  woundArea,
  woundSide,
  abscessType,
  abscessArea,
  abscessSide,
  neoplasmPoignancy,
  neoplasmArea,
  neoplasmSide,
  sinusitisType,
  sinusitisSide,
  paratonsilarAbscessSide,
  hearingLossSide,
  age
) => {
  const adenoidsTemplate = `на утруднене носове дихання, часті простудні захворювання.`;
  const neoplasmTemplate = ` на наявність ${neoplasmPoignancy.slice(
    0,
    -2
  )}ого утворення ${neoplasmArea} ${neoplasmSide}.`;
  const abscessAreaMod = `${abscessArea} ${abscessSide}`;

  const abscessTemplate =
    abscessType === "фурункул"
      ? `на наявність пульсівного болю в ${abscessAreaMod}, зниження апетиту, підвищення температури тіла. `
      : `на наявність припухлості ${abscessAreaMod}, зниження апетиту, підвищення температури тіла.`;
  const skinWoundTemplate = `наявність рани ${woundArea} ${woundSide}.`;
  const acuteOtitisTemplate = `на неспокій дитини, знижений слух, підвищення температури тіла.`;
  const noseFractureTemplate = `на  деформацію носа, утруднення носового дихання.`;
  const septumCurvatureTemplate = `на утруднене носове дихання.`;
  const sinusitisTemplate =
    sinusitisType === "maxillaSinusitis"
      ? `на утруднене носове дихання, виділення з носа, набряк і гіперемія нижньої повіки 
      ${sinusitisSide !== `двобічний` ? sinusitisSide : "з обох сторін"}.`
      : "на підвищення температури тіла, утруднене носове дихання та головний біль, особливо виражений в лобній ділянці.";
  const tonsilitisTemplate = `на відчуття стороннього тіла в горлі, неприємний запах з рота, часті простудні захворювання, в тому числі  ангіни.`;
  const paratonsilarAbscessTemplate = `на болі в горлі , більш інтенсивні ${paratonsilarAbscessSide}, підвищення температури тіла.`;
  const hlSide =
    hearingLossSide === "двобічна"
      ? "на обидва"
      : hearingLossSide === "правобічна"
      ? "правого"
      : "лівого";
  const hearingLossTemplate = `зниження слуху ${hlSide} вуха, ${
    age > 4 ? "шум у вусі, " : ""
  }затримку мовного розвитку. `;
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
    case "mastoiditis":
      return acuteOtitisTemplate;
    case "sinusitis":
      return sinusitisTemplate;
    case "noseFracture":
      return noseFractureTemplate;
    case "septumCurvature":
      return septumCurvatureTemplate;
    case "tonsilitis":
      return tonsilitisTemplate;
    case "hearingLoss":
      return hearingLossTemplate;
    case "paratonsilarAbscess":
      return paratonsilarAbscessTemplate;
    default:
      return "відсутні.";
  }
};
