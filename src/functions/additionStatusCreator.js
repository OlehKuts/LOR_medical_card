export const additionStatusCreator = (
  type,
  woundSide,
  woundArea,
  woundType,
  woundLength,
  woundWidth,
  woundDepth,
  woundForm,
  woundLedges,
  woundBleeding,
  woundAliens,
  abscessType,
  abscessArea,
  abscessSide,
  neoplasmArea,
  neoplasmSide,
  neoplasmForm,
  neoplasmBorders,
  neoplasmMovability,
  neoplasmPoignancy,
  neoplasmConsistance,
  neoplasmDiameter,
  neoplasmSurface,
  neoplasmColor,
  neoplasmAboveSurface,
  neoplasmSurfaceAlter,
  sinusitisType,
  sinusitisSide,
  sinusitisCT
) => {
  const neoplasmAbove = neoplasmAboveSurface ? `` : `не`;
  const colorAlter = neoplasmSurfaceAlter ? `` : `не`;
  const neoplasmTemplate = `Наявний новоутвір ${neoplasmArea} ${neoplasmSide}, ${neoplasmForm} форми, ${neoplasmColor} забарвлення, ${neoplasmBorders}, який ${neoplasmAbove} підвищується над поверхнею. При пальпації: ${neoplasmMovability}, ${neoplasmPoignancy}, ${neoplasmConsistance} консистенції. Діаметр приблизно ${neoplasmDiameter} см; ${neoplasmSurface} над ним в кольорі ${colorAlter} змінена.`;

  const abscessAreaMod =
    abscessArea === "в ділянці сонного трикутника"
      ? abscessArea
      : abscessArea[abscessArea.length - 1] === "и"
      ? `${abscessArea}`
      : `${abscessArea} ділянки`;
  const abscessTemplate =
    abscessType === "флегмона"
      ? `Обличчя різко асиметричне за рахунок поширеної припухлості м'яких тканин ${abscessAreaMod} ${abscessSide}.
 Шкіра тут напружена, гіперемійована, у складку не береться. 
 У центрі пальпаторно визначається щільний, болючий інфільтрат без ознак флюктуації. `
      : abscessType === `фурункул`
      ? ` Обличчя асиметричне за рахунок деформації внаслідок інфільтрації тканин ${abscessAreaMod} ${abscessSide}.
  Місцево спостерігається обмежений болючий щільний інфільтрат, шкіра над ним гіперемована, з ціанотичним відтінком, у складку не береться. 
  У центрі інфільтрату на місці волосяного фолікула наявний гнійно-некротичний стрижень. `
      : `Обличчя асиметричне за рахунок деформації внаслідок інфільтрації тканин ${abscessAreaMod} ${abscessSide}.
 Шкіра над інфільтратом гіперемійована, лискуча. 
 Пальпаторно визначається щільний, болючий, обмежений інфільтрат з ознаками флюктуації. `;

  let woundSize =
    woundDepth !== "" && woundWidth !== "" && woundLength !== ""
      ? ` розмірами приблизно ${woundLength}*${woundWidth}*${woundDepth} см`
      : "";

  const skinWoundTemplate = ` При огляді ${woundArea}${woundSide} виявлена ${woundType} рана ${woundForm} форми,${woundSize}. ${woundLedges}. Кровоточивість з рани ${woundBleeding}. ${woundAliens}.`;
  const preSinusitisTemplate =
    sinusitisType === `maxillaSinusitis`
      ? `На КТ – відсутня пневматизація, 
      потовщення слизової оболонки та наявність рідини в${
        sinusitisSide !== `двобічний`
          ? ` верхньощелепній пазусі ${sinusitisSide}`
          : `обох верхньощелепних пазухах`
      }.`
      : sinusitisType === `etmoiditis`
      ? `На КТ – відсутня пневматизація, 
      потовщення слизової оболонки та наявність рідини в ${
        sinusitisSide !== `двобічний`
          ? `решітчастій пазусі ${sinusitisSide}`
          : `обох решітчастих пазухах`
      }.`
      : sinusitisType === `frontitis`
      ? `На КТ – відсутня пневматизація, 
      потовщення слизової оболонки та наявність рідини ${
        sinusitisSide !== `двобічний`
          ? `лобній пазусі ${sinusitisSide}`
          : `обох лобних пазухах`
      }.`
      : sinusitisType === `hemisinusitis`
      ? `На КТ – відсутня пневматизація, 
      потовщення слизової оболонки та наявність рідини в лобній, верхньощелепній, клиноподібній, решітчастій та основній пазухах${sinusitisSide}.`
      : sinusitisType === `pansinusitis`
      ? `На КТ – відсутня пневматизація, 
      потовщення слизової оболонки та наявність рідини в лобних, верхньощелепних, клиноподібних, решітчастих та основній пазухах.`
      : `Проведено КТ обстеження.`;
  const sinusitisTemplate = sinusitisCT ? preSinusitisTemplate : "";

  switch (type) {
    case "skinWound":
      return skinWoundTemplate;
    case "abscess":
      return abscessTemplate;
    case "neoplasm":
      return neoplasmTemplate;
    case "sinusitis":
      return sinusitisTemplate;
    default:
      return ``;
  }
};

export const shortStatusCreator = (
  type,
  woundSide,
  woundArea,
  woundType,
  woundLength,
  woundWidth,
  woundDepth,
  woundForm,
  woundLedges,
  woundBleeding,
  woundAliens,
  abscessType,
  abscessArea,
  abscessSide,
  neoplasmArea,
  neoplasmSide,
  neoplasmForm,
  neoplasmBorders,
  neoplasmMovability,
  neoplasmPoignancy,
  neoplasmConsistance,
  neoplasmDiameter,
  neoplasmSurface,
  neoplasmColor,
  neoplasmAboveSurface,
  neoplasmSurfaceAlter,
  acuteOtitisSide,
  noseFractureSide,
  septumCurvatureSide,
  mastoiditisSide,
  sinusitisType,
  sinusitisSide,
  sinusitisVariety,
  sinusitisCT,
  acuteOtitisType,
  paratonsilarAbscessSide
) => {
  const adenoidsTemplate = `носове дихання утруднене з обох боків. Визначаються аденоїдні вегетації III-го ступеню.`;
  const neoplasmAbove = neoplasmAboveSurface ? `` : `не`;
  const colorAlter = neoplasmSurfaceAlter ? `` : `не`;
  const neoplasmTemplate = `наявний новоутвір ${neoplasmArea} ${neoplasmSide}, ${neoplasmForm} форми, ${neoplasmColor} забарвлення, ${neoplasmBorders}, який ${neoplasmAbove} підвищується над поверхнею. При пальпації: ${neoplasmMovability}, ${neoplasmPoignancy}, ${neoplasmConsistance} консистенції. Діаметр приблизно ${neoplasmDiameter} см; ${neoplasmSurface} над ним в кольорі ${colorAlter} змінена.`;

  const abscessAreaMod =
    abscessArea === "в ділянці сонного трикутника"
      ? abscessArea
      : abscessArea[abscessArea.length - 1] === "и"
      ? `${abscessArea}`
      : `${abscessArea} ділянки`;
  const abscessTemplate =
    abscessType === "флегмона"
      ? `обличчя різко асиметричне за рахунок поширеної припухлості м'яких тканин ${abscessAreaMod} ${abscessSide}.
 Шкіра тут напружена, гіперемійована, у складку не береться. 
 У центрі пальпаторно визначається щільний, болючий інфільтрат без ознак флюктуації. `
      : abscessType === `фурункул`
      ? ` обличчя асиметричне за рахунок деформації внаслідок інфільтрації тканин ${abscessAreaMod} ${abscessSide}.
  Місцево спостерігається обмежений болючий щільний інфільтрат, шкіра над ним гіперемована, з ціанотичним відтінком, у складку не береться. 
  У центрі інфільтрату на місці волосяного фолікула наявний гнійно-некротичний стрижень. `
      : `обличчя асиметричне за рахунок деформації внаслідок інфільтрації тканин ${abscessAreaMod} ${abscessSide}.
 Шкіра над інфільтратом гіперемійована, лискуча. 
 Пальпаторно визначається щільний, болючий, обмежений інфільтрат з ознаками флюктуації. `;

  let woundSize =
    woundDepth !== "" && woundWidth !== "" && woundLength !== ""
      ? ` розмірами приблизно ${woundLength}*${woundWidth}*${woundDepth} см`
      : "";
  const bothSides = "з обох боків";
  const firstDefaultPart = `соскоподібні паростки не змінені. Шкіра в їх проекції блідо-рожева. Вушні раковини звичайні.
  Зовнішні слухові ходи вільні.`;
  const drumPart =
    acuteOtitisSide === "двобічний"
      ? `Барабанні перетинки справа та зліва набряклі, мутно-жовтого забарвлення.`
      : `Барабанна перетинка ${
          acuteOtitisSide !== "двобічний" ? acuteOtitisSide : bothSides
        } набрякла, мутно-жовтого забарвлення.`;
  const recognizePart = `Пізнавальні точки не визначаються ${
    acuteOtitisSide !== "двобічний" ? acuteOtitisSide : bothSides
  }.`;
  const cataralDrumPart = `Барабанна перетинка гіперемійована та потовщена ${
    acuteOtitisSide !== "двобічний" ? acuteOtitisSide : bothSides
  }. `;
  const purulentTemplate = `${firstDefaultPart} ${drumPart} ${recognizePart}`;
  const cataralTemplate = `${firstDefaultPart} ${cataralDrumPart} ${recognizePart}`;
  const acuteOtitisTemplate =
    acuteOtitisType === "гнійний" ? purulentTemplate : cataralTemplate;

  const skinWoundTemplate = ` при огляді ${woundArea}${woundSide} виявлена ${woundType} рана ${woundForm} форми,${woundSize}. ${woundLedges}. Кровоточивість з рани ${woundBleeding}. ${woundAliens}.`;
  const noseFractureTemplate = `помірна деформацiя зовнiшнього носа зі зміщенням піраміди ${noseFractureSide} у вигляді дуги.
  Пальпаторно передні стінки правої та лівої верхньощелепних та лобних пазух безболючi.
   Носове дихання утруднене з обох сторін.  
 При передній  риноскопiї присінок  носа вільний,  носова переділка зміщена ${noseFractureSide}, слизова оболонка обох половин носа дещо гiперемована,
  незначно потовщена. Раковини  дещо збiльшенi,  не значні слизово-кров’янисті виділення. `;
  const septumSide = septumCurvatureSide ? `праворуч` : "ліворуч";
  const septumCurvatureTemplate = `носове дихання утруднене. Присінок носу вільний, носова перегородка різко скривлена ${septumSide}.`;
  const healthySide = mastoiditisSide === `ліворуч` ? "праворуч" : "ліворуч";
  const mastoiditisMiddlePart =
    mastoiditisSide === `двобічний`
      ? ` Зовнішній слуховий не є вільним ${bothSides}. Барабанні перетинки не є сірими ${bothSides}.
Пізнавальні точки не визначаються. 
Перфорації відсутні. Виділення відсутні. Барабанні перетинки ${bothSides} потовщені,
 гіперемійовані по колу.`
      : `Соскоподібні паростки: ${healthySide} в нормі, ${mastoiditisSide} 
      спостерігається гіперемія шкіри та набряк привушної ділянки в ділянці соскоподібного відростка. 
      Зовнішній слуховий хід ${healthySide} вільний. Барабанна перетинка ${healthySide} сіра. 
      Пізнавальні точки визначаються на барабанній перетинці лише ${healthySide}. 
      Перфорації відсутні. Виділення відсутні. Зовнішній слуховий прохід вільний ${mastoiditisSide}, барабанна перетинка потовщена, 
      гіперемійована по колу, пізнавальні точки не визначаються. Перфорація відсутня.
      `;
  const mastoiditisTemplate = `спостерігається гіперемія шкіри 
  та набряк привушної ділянки в ділянці соскоподібного відростка ${
    mastoiditisSide !== "двобічний" ? mastoiditisSide : bothSides
  }. 
  ${mastoiditisMiddlePart}
  `;
  const defaultTempate = ``;

  const preSinusitisTemplate =
    sinusitisType === `maxillaSinusitis`
      ? `На КТ – відсутня пневматизація, 
    потовщення слизової оболонки та наявність рідини в ${
      sinusitisSide !== `двобічний`
        ? `верхньощелепній пазусі ${sinusitisSide}`
        : `обох верхньощелепних пазухах`
    }.`
      : sinusitisType === `etmoiditis`
      ? `На КТ – відсутня пневматизація, 
    потовщення слизової оболонки та наявність рідини ${
      sinusitisSide !== `двобічний`
        ? `решітчастій пазусі ${sinusitisSide}`
        : `обох решітчастих пазухах`
    }.`
      : sinusitisType === `frontitis`
      ? `На КТ – відсутня пневматизація, 
      потовщення слизової оболонки та наявність рідини ${
        sinusitisSide !== `двобічний`
          ? `лобній пазусі ${sinusitisSide}`
          : `обох лобних пазухах`
      }.`
      : sinusitisType === `hemisinusitis`
      ? `На КТ – відсутня пневматизація, 
      потовщення слизової оболонки та наявність рідини в лобній, верхньощелепній, клиноподібній, решітчастій та основній пазухах ${sinusitisSide}.`
      : sinusitisType === `pansinusitis`
      ? `На КТ – відсутня пневматизація, 
      потовщення слизової оболонки та наявність рідини в лобних, верхньощелепних, клиноподібних, решітчастих та основній пазухах.`
      : `Проведено КТ обстеження.`;
  const sinusitisAddition = sinusitisCT ? preSinusitisTemplate : "";
  const frontitisTepmlate =
    sinusitisType !== "maxillaSinusitis"
      ? `При пальпації передні стінки  лобних пазух болючi. `
      : ``;
  const sinusitisTemplate = `присінок носу вільний, носова перегородка рівна, 
  слизова оболонка гіперемована, набрякла, в ${
    sinusitisType === `maxillaSinusitis`
      ? "середньому носовому ході"
      : sinusitisType === `etmoiditis`
      ? "в середньому та верхньому носовому ході"
      : "середньому носовому ході"
  } ${sinusitisSide !== `двобічний` ? sinusitisSide : "з обох сторін"} ${
    sinusitisVariety === `бактерійний`
      ? "слизово-гнійні виділення жовто-зеленого забарвлення"
      : "рясні прозорі слизові виділення"
  }, носові  раковини   незбiльшенi. Носоглотка вільна. Носове дихання утруднене з обох сторін.
  ${frontitisTepmlate}${sinusitisAddition}`;
  const tonsilitisTemplate = `піднебінні дужки  контуруються, гіперемовані з потовщеним переднім краєм, піднебінні мигдалики виступають за передні піднебінні дужки, доводячи до серединної лінії зіву, лакуни  рихлі, виповнені патологічним вмістом білуватого кольору, при натискуванні шпателем легко видаляються, мають неприємний запах. Задня стінка глотки волога з небагаточисельними лімфоїдними фолікулами.`;
  const paratonsilarAbscessTemplate = ` наявне обмежене відкривання рота ІІ-го ступеню 
  за рахунок тризму жувальної мускулатури. 
  Піднебінні дужки  контуруються,  рожевого  кольору, виражена асиметрія зіву ${paratonsilarAbscessSide} за
   рахунок випинання передньої піднебінної, 
   піднебінний мигдалик тут виступає за передню піднебінну дужку,  
   лакуни з патологічним вмістом – гнійний детрит, поверхня гладка.
  `;
  const hearingLossTemplate = `соскоподібні паростки не змінені. Шкіра в їх проекції блідо-рожева. Вушні раковини звичайні.
  Зовнішні слухові ходи вільні.  Барабанні перетинки перламутрово-сірі, пізнавальні точки  визначаються. Перфорації відсутні. Виділення відсутні.`;
  switch (type) {
    case "abscess":
      return abscessTemplate;
    case "adenoids":
      return adenoidsTemplate;
    case "skinWound":
      return skinWoundTemplate;
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
    case "hearingLoss":
      return hearingLossTemplate;
    case "tonsilitis":
      return tonsilitisTemplate;
    case "paratonsilarAbscess":
      return paratonsilarAbscessTemplate;
    default:
      return defaultTempate;
  }
};
