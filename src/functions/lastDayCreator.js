export const lastDayCreator = (
  type,
  mastoiditisSide,
  mastoditisOperationType,
  age
) => {
  const adenoidsStr = type === `adenoids` ? `Стан після аденотомії носа.` : ``;
  const otoscopyNormal = `Отоскопія AD=AS зовнішні слухові ходи вільні, барабанні перетинки перламутрово-сірі, пізнавальні контури їх чіткі.`;
  const beginning = `Риноскопія: слизова носа блідо-рожева, чиста, помірні слизові виділення. ${adenoidsStr} Стінки зіву і задня стінка глотки рожеві, чисті. Піднебінні мигдалики та паратонзилярні тканини без ознак гострих запальних змін. ${otoscopyNormal}`;

  const finishing = ` Виписується. Виписка видана батькам на руки. `;
  const defaultTemplate = `${beginning}${finishing}`;

  const skinWoundTemplate = ` ${beginning}Післяопераційна рана чиста, гоїться первинним натягом. ${finishing}`;
  const abscessTemplate = `${beginning}Знято асептичну пов'язку.
  Післяопераційна рана чиста, загоїлась вторинним натягом, оброблена спиртовим розчином брильянтового зеленого. ${finishing}`;
  const mastoiditisShunting =
    mastoditisOperationType === `shunting`
      ? `${
          mastoiditisSide === "двобічний"
            ? `Шунти фіксовані. `
            : `Шунт фіксований.`
        }`
      : ``;
  const mastoiditisTemplate = ` ${beginning} ${mastoiditisShunting} ${finishing}`;
  const hearingLossTemplate = `${
    age > 4
      ? "Дитина відзначає покращення слуху та відсутність шумів у вусі."
      : ""
  } ${beginning} ${finishing}`;
  switch (type) {
    case "skinWound":
      return skinWoundTemplate;
    case "abscess":
      return abscessTemplate;
    case "neoplasm":
      return skinWoundTemplate;
    case "mastoiditis":
      return mastoiditisTemplate;
    case "hearingLoss":
      return hearingLossTemplate;
    default:
      return defaultTemplate;
  }
};
