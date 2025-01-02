export const operationNameCreator = (
  type,
  woundArea,
  woundSide,
  abscessType,
  abscessArea,
  abscessSide,
  neoplasmArea,
  neoplasmSide,
  acuteOtitisSide,
  otitisTypeOperation,
  mastoiditisSide,
  mastoditisOperationType,
  acuteOtitisType,
  paratonsilarAbscessSide
) => {
  const adenoidsTemplate = `аденотомія.`;
  const neoplasmTemplate = `ексцизійна біопсія новоутвору ${neoplasmArea} ${neoplasmSide}.`;
  const aType =
    abscessType === `абсцес` ||
    abscessType === `лімфаденіт` ||
    abscessType === `фурункул`
      ? `абсцесу`
      : `${abscessType.slice(0, -1)}и`;
  const aArea = `${abscessArea} ділянки`;
  const abscessTemplate = `розкриття та дренування ${aType} ${aArea} ${abscessSide}.`;
  const skinWoundTemplate = `ПХО рани ${woundArea}${woundSide}.`;
  const sinusitisTemplate =
    "промивання носа 0.9% розчином хлориду натрію, 5 разів на добу.";
  const shunting =
    acuteOtitisSide === "двобічний" || mastoiditisSide === "двобічний"
      ? `двобічне шунтування барабанних перетинок.`
      : `шунтування барабанної перетинки ${acuteOtitisSide}${mastoiditisSide}.`;
  const paracentesis =
    acuteOtitisSide === "двобічний" || mastoiditisSide === "двобічний"
      ? `парецентез барабанних перетинок.`
      : `парацентез барабанної перетинки ${acuteOtitisSide}${mastoiditisSide}.`;
  const mastoiditisTemplate =
    mastoditisOperationType === "paracentesis"
      ? paracentesis
      : mastoditisOperationType === "shunting"
      ? shunting
      : mastoditisOperationType === "mastoidEctomia"
      ? `${
          mastoiditisSide === `двобічний`
            ? `двобічна мастоїдектомія`
            : `мастоїдектомія ${mastoiditisSide}`
        }.`
      : `${
          mastoiditisSide === `двобічний`
            ? `двобічна мастоїдектомія`
            : `мастоїдектомія ${mastoiditisSide}`
        } та ${shunting} `;

  const acuteOtitisTemplate =
    acuteOtitisType === "катаральний"
      ? sinusitisTemplate
      : otitisTypeOperation === "paracentesis"
      ? paracentesis
      : shunting;

  const noseFractureTemplate = `репозиція кісток носа.`;
  const septumCurvatureTemplate = `підслизова резекція переділки носа.`;
  const tonsilitisTemplate = `тонзилектомія.`;
  const paratonsilarAbscessTemplate = `розкриття паратонзилярного абсцесу ${paratonsilarAbscessSide}.`;
  const hearingLossTemplate = `продування слухових труб за Політцером.`;
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
    case "septumCurvature":
      return septumCurvatureTemplate;
    case "sinusitis":
      return sinusitisTemplate;
    case "tonsilitis":
      return tonsilitisTemplate;
    case "paratonsilarAbscess":
      return paratonsilarAbscessTemplate;
    case "hearingLoss":
      return hearingLossTemplate;
    default:
      return "";
  }
};
