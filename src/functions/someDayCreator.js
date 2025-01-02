export const someDayCreator = (
  type,
  abscessArea,
  abscessSide,
  acuteOtitisSide,
  mastoiditisSide,
  mastoditisOperationType,
  sinusitisType,
  sinusitisSide,
  acuteOtitisType,
  sinusitisVariety,
  age
) => {
  const finishing = `Призначення виконуються.`;
  const normalRhynoscopy = `Риноскопія: слизова носа блідо-рожева, чиста, помірні слизові виділення.`;
  const normalOtoscopy = `Отоскопія AD=AS зовнішні слухові ходи вільні, барабанні перетинки перламутрово-сірі, пізнавальні контури їх чіткі.`;
  const normalPharyngoscopy = `Стінки зіву і задня стінка глотки рожеві, чисті. Піднебінні мигдалики та паратонзилярні тканини без ознак гострих запальних змін.`;
  const adenoidsStr = type === `adenoids` ? `Стан після аденотомії носа.` : ``;
  const beginning = ` ${normalRhynoscopy} ${adenoidsStr} ${normalPharyngoscopy}
  ${normalOtoscopy}`;
  const sutureFixed = `Накладені шви фіксовані. `;

  const abscessAreaMod = `${abscessArea} ${abscessSide}`;
  const skinWoundTemplate = `${beginning}Знято асептичну пов'язку. ${sutureFixed}Післяопераційна рана чиста, гоїться; оброблена спиртом. Суха асептична пов'язка. ${finishing}`;
  const space =
    "Абсцесну порожнину промито розчином декасану до чистих промивних вод.";
  const abscessTemplate = ` Обличчя асиметричне за рахунок колатерального набряку ${abscessAreaMod}, який помітно зменшився.
   Знято асептичну пов'язку. ${space} Заміна гумового випускника. Асептична пов'язка з гіпертонічним розчином хлориду натрію. ${finishing}`;

  const aoCataralMainPart =
    acuteOtitisSide === `двобічний`
      ? `Отоскопія: справа та зліва 
      зовнішні слухові ходи вільні, барабанні перетинки гіперемовані, потовщені, пізнавальні контури їх не визначаються. Перфорації відсутні.`
      : `Отоскопія: ${acuteOtitisSide} 
зовнішній слуховий хід вільний, барабанна перетинка гіперемійована, потовщена, пізнавальні контури її не визначаються. Перфорації відсутні.`;
  const aoPurulentMainPart =
    acuteOtitisSide === `двобічний`
      ? `Отоскопія: справа та зліва слуховий хід виповнений незначними гнійними виділеннями,`
      : `Отоскопія: ${acuteOtitisSide} слуховий хід виповнений незначними гнійними виділеннями,`;
  const outGrowth =
    acuteOtitisSide === `двобічний`
      ? `Соскоподібні відростки безболісні при пальпації.`
      : `Соскоподібний відросток ${acuteOtitisSide} не болючий при пальпації.`;
  const cataralTemplate = ` ${normalRhynoscopy} ${normalPharyngoscopy}
  ${aoCataralMainPart} Проведено туалет вуха.  
  ${outGrowth} ${finishing}
  `;
  const purulentTemplate = ` ${normalRhynoscopy} ${normalPharyngoscopy}
  ${aoPurulentMainPart} в натягнутій частині барабанної переділки наявна перфорація, проведено туалет вуха.  
  ${outGrowth} ${finishing}
  `;
  const acuteOtitisTemplate =
    acuteOtitisType === "гнійний" ? purulentTemplate : cataralTemplate;
  const mastoiditisForParacentesis = `Отоскопія: барабанна перетинка перламутрово-сіра справа, 
${
  mastoiditisSide === "двобічний" ? "з обох боків" : mastoiditisSide
} зовнішній слуховий хід тампонований,
 тампон просякнутий кров’янистими виділеннями. 
 ${
   mastoiditisSide === "двобічний"
     ? "Пов’язки, які просякнуті помірними кров’янистими виділеннями, знято, рани"
     : "Пов’язку, яка просякнута помірними кров’янистими виділеннями, знято, рану"
 }
  промито розчином лінкоміцину (30%) та дексаметазону.
`;
  const mastoiditisForShunting = `${
    mastoiditisSide === "двобічний"
      ? `Отоскопія: зовнішні слухові ходи  виповнені незначними гнійними виділеннями,  шунти фіксовані.
    Проведено туалет правого та лівого зовнішніх слухових проходів сухим способом, 
    вставлено турунди зі складними каплями.`
      : `Отоскопія: зовнішній слуховий хід ${mastoiditisSide} виповнений  гнійними виділеннями, шунт фіксований.
    Проведено туалет зовнішнього слухового проходу ${mastoiditisSide} сухим способом, 
    вставлено турунду зі складними каплями.  `
  }`;
  const mastoiditisForEctomia = `${mastoiditisForParacentesis}. Накладені шви фіксовані.`;

  const mastoiditisPart =
    mastoditisOperationType === "paracentesis"
      ? mastoiditisForParacentesis
      : mastoditisOperationType === "mastoidEctomia"
      ? mastoiditisForEctomia
      : mastoiditisForShunting;
  const mastoiditisTemplate = ` ${normalRhynoscopy} ${normalPharyngoscopy}
${mastoiditisPart} ${finishing}
`;

  const noseFractureTemplate = `Ніс тампоновано, тампони забрано, дихання через ніс вільне. Кровотеча незначна, зупинилась самостійно.
${normalPharyngoscopy} ${normalOtoscopy} ${finishing}`;
  const defaultTemplate = `${beginning}${finishing}`;
  const septumCurvatureTemplate = `
Риноскопія: слизова блідо-рожева, помірно набрякла, носові ходи вільні, значні слизові кірки. Проведено туалет носа. 
${normalPharyngoscopy} ${normalOtoscopy} ${finishing}`;
  const frontitisTepmlate =
    sinusitisType === "frontitis"
      ? `При пальпації передні стінки лобних пазух незначно болісні. `
      : ``;
  const sinusitisRhinoscopy =
    `Риноскопія: слизова оболонка гіперемована, набрякла. Носові раковини дещо збільшені.
   Відмічаються ${
     sinusitisVariety === `бактерійний` ? `слизово-гнійні` : `слизові`
   } виділення, що стікають з середнього ${
      sinusitisType !== `maxillaSinusitis` ? `та верхнього ` : ""
    }носового ходу 
   ${
     sinusitisSide !== `двобічний` ? sinusitisSide : "з обох сторін"
   }. ${frontitisTepmlate}
  `;
  const tonsilitisPharyngoscopy = `
  Фарингоскопія: слизова оболонка ротоглотки рожева, волога; задня стінка чиста. Піднебінні мигдалики рихлі. 
  `;
  const sinusitisTemplate = `${sinusitisRhinoscopy} ${normalOtoscopy} ${normalPharyngoscopy} ${finishing}`;
  const tonsilitisTemplate = `${normalRhynoscopy} ${normalOtoscopy} ${tonsilitisPharyngoscopy} ${finishing}`;
  const paratonsilarAbscessTemplate = `
  ${normalRhynoscopy} ${normalOtoscopy} ${normalPharyngoscopy} Післяопераційна рана чиста. Гнійні виділення з неї відсутні. ${finishing}
  `;
  const hearingLossTemplate = `${
    age > 4
      ? "Дитина відзначає покращення слуху та зменшення шумів у вусі. "
      : ""
  }${normalRhynoscopy} ${normalOtoscopy} ${normalPharyngoscopy} ${finishing}`;
  switch (type) {
    case "skinWound":
      return skinWoundTemplate;
    case "abscess":
      return abscessTemplate;
    case "neoplasm":
      return skinWoundTemplate;
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
      return defaultTemplate;
  }
};
