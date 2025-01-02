export const recommendationsCreator = (type) => {
  const skinWoundTemplate = `контрольний огляд та зняття швів через 8-10 днів після операції.`;
  const neoplasmTemplate = `контрольний огляд через 8-10 днів після операції.`;
  const adenoidsTemplate = `протягом чотирьох днів: складні діоксидинові каплі по 3 каплі, тричі на добу, в ніс, відвар кори 
 дуба по ¼ піпетки, тричі на добу в ніс. Запобігання простудним захворюванням, нагляд отоларинголога в динаміці по місцю проживання.`;
  const defaultTempate = `щадний режим, оберігатися від застуди.`;

  switch (type) {
    case "adenoids":
      return adenoidsTemplate;
    case "skinWound":
      return skinWoundTemplate;
    case "neoplasm":
      return neoplasmTemplate;
    default:
      return defaultTempate;
  }
};
