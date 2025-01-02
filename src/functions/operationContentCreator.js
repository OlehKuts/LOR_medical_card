export const operationContentCreator = (
  type,
  sutureType,
  sutureMaterial,
  sutureSize,
  anestesiaType,
  abscessType,
  abscessArea,
  abscessSide,
  abscessReason,
  coblation,
  acuteOtitisSide,
  tampon,
  septumCurvatureSide,
  otitisTypeOperation,
  mastoiditisSide,
  mastoditisOperationType,
  paratonsilarAbscessSide
) => {
  const opBeginning = `Обробка операційного поля спиртом двічі.`;
  const finishing = `Гемостаз по ходу операції. Дитина переведена в палату зі задовільними показниками гемодинаміки.`;
  const anestesiaTypeMod = `${anestesiaType} знеболення.`;
  const adenoidsStr = coblation
    ? `Коблатором зайдено в порожнину носоглотки під контролем ендоскопа видалено аденоїдні вегетації.`
    : `Аденотомом №3 зайдено в порожнину носоглотки та видалено аденоїдні вегетації.`;
  const adenoidsTemplate = ` ${anestesiaTypeMod} ${opBeginning} ${adenoidsStr} Кровотеча незначна, зупинилась самостійно. Дихання носом відновлено. ${finishing}`;
  const skinWoundTemplate = `${anestesiaTypeMod} ${opBeginning} Ревізія рани. Медикаментозна обробка розчинами декасану та перекисю водню(3%). Краї рани співставлено та ушито ${sutureType}, використовуючи матеріал '${sutureMaterial}${sutureSize}'. Поверхня рани оброблена спиртом. Суха асептича пов'язка. ${finishing}`;
  const neoplasmTemplate = ` ${opBeginning} Проведено два оточуючі розрізи навколо утвору та клиновидно вглиб; висічено його. Рана ушита вузловими швами. Препарат віддано на гістологічне дослідження. ${finishing}`;

  const triangle = `в ${abscessArea.slice(0, -2)}ій ділянці`;

  const paralelMark = `через центр абсцесу`;

  const cutLength =
    abscessType === `фурункул` ? `довжиною 1 см` : `довжиною 2 см`;
  const cutArea = `Проведено розріз ${triangle} ${abscessSide} ${paralelMark}, ${cutLength}.`;
  const cutLayers = `Розсічено шкіру та підшкірну жирову клітковину.`;
  const volume =
    abscessType === "абсцес" ||
    abscessType === "лімфаденіт" ||
    abscessType === "фурункул"
      ? "2"
      : "5";
  const nodeExtraction =
    abscessReason === "лімфовузол"
      ? "Залишки гнійного розплавлення лімфовузла видалено ложкою Фолькмана та взято на гістологічне дослідження."
      : abscessType === "фурункул"
      ? "Гнійно-некротичні маси видалено ложкою Фолькмана."
      : ``;
  const ablution = `Абсцесну порожнину промито розчином декасану`;
  const abscessTemplate = `${anestesiaTypeMod} ${opBeginning} ${cutArea} ${cutLayers} 
  Тупо москітним затискачем розширено краї рани та пройдено до гнійного осередку.
  Евакуація гнійного вмісту об'ємом ${volume} мл. Гній взято на бак.посів. ${nodeExtraction}
  ${ablution} та дреновано гумовим випускником. Асептична пов'язка з гіпертонічним розчином хлориду натрію. ${finishing}`;
  const paracentesis =
    acuteOtitisSide === "двобічний" || mastoiditisSide === "двобічний"
      ?  `Проведено парацентез барабанної перетинки ліворуч, виділилась значна кількість гнійних виділень з порожнини середнього вуха, проведено санацію. 
      Проведено парацентез барабанної перетинки праворуч, виділилась значна кількість гнійних виділень з порожнини середнього вуха, проведено санацію. `
      : `Проведено парацентез барабанної перетинки ${acuteOtitisSide}, виділилась значна кількість гнійних виділень з порожнини середнього вуха, проведено санацію. `;
  const shunting =
    acuteOtitisSide === "двобічний" || mastoiditisSide === "двобічний"
      ?   "Парацентезною голкою проведено розріз правої барабанної перетинки у задньо-нижньому квадранті. Отримано гнійний вміст, проведено туалет правого зовнішнього слухового проходу за допомогою електровідсмоктувача, на місце розрізу встановлено  шунт. В правий зовнішній слуховий прохід встановлено турунду зі складним порошком. Аналогічне втручання проведено ліворуч."
      : `Парацентезною голкою проведено розріз барабанної перетинки ${acuteOtitisSide}${mastoiditisSide} у задньо-нижньому квадранті. Отримано гнійний вміст, проведено туалет зовнішнього слухового проходу ${acuteOtitisSide}${mastoiditisSide} за допомогою електровідсмоктувача, на місце розрізу встановлено  шунт. В зовнішній слуховий прохід ${acuteOtitisSide} встановлено турунду зі складним порошком.`;
  const acuteOtitisTemplate = `${anestesiaTypeMod} ${opBeginning}
 ${otitisTypeOperation === "paracentesis" ? paracentesis : shunting}
 ${finishing}`;
  const tamponadeType = tampon
    ? `назальних тампонів`
    : `марлевих тампонів змащених маззю «гіоксизон»`;
  const noseFractureTemplate = `${anestesiaTypeMod} ${opBeginning} 
Елеваторами піднята спинка носа та переміщена в попереднє положення. 
Форму носа відновлено. Дихання лівої та правої половин носа достатнє. Кровотеча незначна, зупинилась самостійно. 
Для фіксації фрагментів носа проведена передня двобічна тампонада порожнин носа з допомогою ${tamponadeType}. 
Асептична пращевидна пов’язка. Тампони залишено на добу. ${finishing}`;
  const septumSide = septumCurvatureSide ? `праворуч` : "ліворуч";
  const septumCurvatureTemplate = `
Під інтубаційним загальним знечуленням проведено вертикальний розріз слизової оболонки та окістя перегородки носа ${septumSide},
  залишаючи смужку хряща 0,5 см спереду.
   Відшаровано слизову оболонку з окістям на всьому протязі викривлення. 
   Розсічено хрящ і відсепаровано його з протилежної сторони. 
   Видалено деформовану частину хряща та кістки.
    Слизову оболонку з окістям вкладено на місце.
     Проведена передня тампонада носа. ${finishing}
`;
  const mastoidEctomia = `${anestesiaTypeMod} Місцево -  розчинами лiдокаїну 2% 2.0 мл з 0,1% 0,2 мл адреналіну.
  ${opBeginning} Проведено розріз шкіри та окістя  завушної ділянки ${
    mastoiditisSide === "двобічний" ? "праворуч" : mastoiditisSide
  }
  . В ділянці трикутника Шипо відкрито комірки соскоподібного відростка,
    які виповнені кров’янисто-гнійними виділеннями, їх видалено.
     В порожнині середнього вуха холестеатома відсутня.
      Зроблено тимпаностомію. В утворену порожнину встановлено дренажні трубки.
       Меатотимпанальний клапоть зафіксовано в попереднє положення.
        Зовнішній слуховий хід туго тампоновано зі складним порошком.
         Накладено внутрішні кетгутові шви, та вікрілові шви на завушну ділянку. Суха асептична пов’язка.
         ${
           mastoiditisSide === "двобічний"
             ? "Аналогічні дії з лівого боку."
             : ""
         } `;
  const mastoiditisPart =
    mastoditisOperationType === "paracentesis"
      ? paracentesis
      : mastoditisOperationType === "shunting"
      ? shunting
      : mastoditisOperationType === "mastoidEctomia"
      ? mastoidEctomia
      : `${mastoidEctomia} ${shunting} `;
  const mastoiditisTemplate = `${anestesiaTypeMod} ${opBeginning} ${mastoiditisPart} ${finishing}`;
  const tonsilitisTemplate = `${anestesiaTypeMod} Проведено розрiз слизової оболонки по передній піднебінній дужці. 
  Тупо видiлено верхнiй полюс правого та лівого мигдаликів та поступово вiдшаровано зверху донизу весь мигдалик та відсічено при основі.
   В лакунах: казеозні маси. Мигдалики віддано на патогістологічне обстеження. Спайки праворуч та ліворуч. 
   ${finishing}`;
  const paratonsilarAbscessTemplate = `
   ${anestesiaTypeMod} 
   Обробка приротової ділянки спиртом двічі.
   Додаткова інфільтраційна анестезія передньої піднебінної дужки ${paratonsilarAbscessSide}
    1,0 мл 1 % розчину лідокаїну гідрохлориду.
    Тупо "москітним затискачем" розкрито абсцес у місці найбільшого випинання та 
     отримано гнійний вміст, який передано на бак. посів. ${finishing} `;
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
    case "tonsilitis":
      return tonsilitisTemplate;
    case "paratonsilarAbscess":
      return paratonsilarAbscessTemplate;
    default:
      return "";
  }
};
