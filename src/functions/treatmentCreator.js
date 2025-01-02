export const treatmentCreator = (drugName, age, weight) => {
  if (drugName === "Амоксиклав") {
    return amoxyclavCounter(weight);
  }
  if (drugName === "Зитрокс") {
    return zitroxCounter(weight);
  }
  if (drugName === "Амоксицилін") {
    return amoxycylinCounter(weight);
  }
  if (drugName === "Оспамокс") {
    return ospamoxCounter(weight);
  } else if (drugName === "Лінкоміцин") {
    return lincomycinCounter(weight);
  } else if (drugName === "Сумамед") {
    return sumamedCounter(weight);
  } else if (drugName === "Цефодокс") {
    return cefodoxCounter(weight);
  } else if (drugName === "Лопракс") {
    return lopraxCounter(weight);
  } else if (drugName === "Цефтріаксон") {
    return ceftriaxonCounter(weight);
  } else if (drugName === "Ефмерин") {
    return efmerynCounter(weight);
  } else if (drugName === "Діацеф") {
    return diacefCounter(weight);
  } else if (drugName === "Цефотаксим") {
    return cefotaximCounter(weight);
  } else if (drugName === "Аміцил") {
    return amicylCounter(weight);
  } else if (drugName === "Нурофен") {
    return nurofenCounter(age);
  } else if (drugName === "Парацетамол") {
    return paracetamolCounter(age);
  } else if (drugName === "Неофлорум") {
    return neoflorumCounter(age);
  } else if (drugName === "Пробіз") {
    return probizCounter(age);
  } else if (drugName === "Лоратадин") {
    return loratadynCounter(weight);
  } else if (drugName === "Феністил") {
    return fenistylCounter(weight);
  } else if (drugName === "Метрогіл") {
    return metrogilCounter(weight);
  } else if (drugName === "Содовий розчин") {
    return sodaCounter();
  } else if (drugName === "Ентерожерміна форте") {
    return enterogerminaCounter();
  } else if (drugName === "Цефікс") {
    return cefixCounter(weight);
  } else if (drugName === "L-лізину есцинат") {
    return l_LisynCounter(weight, age);
  } else if (drugName === "Гепарин") {
    return heparynCounter(weight);
  } else if (drugName === "Отофа") {
    return otofaCounter(age);
  } else if (drugName === "Ципрофарм") {
    return cyprofarmCounter(age);
  } else if (drugName === "Флоксимед") {
    return floxymedCounter();
  } else if (drugName === "Ототон") {
    return ototonCounter(age);
  } else if (drugName === "Отіпакс") {
    return otipaxCounter();
  } else if (drugName === "Дроплекс") {
    return droplexCounter();
  } else if (drugName === "Кандибіотик") {
    return candybioticCounter(age);
  } else if (drugName === "Протаргол") {
    return protargolCounter(age);
  } else if (drugName === "Називін") {
    return nasyvinCounter(age);
  } else if (drugName === "Риназолін") {
    return rynasolinCounter(age);
  } else if (drugName === "Віброцил") {
    return vibrocylCounter(age);
  } else if (drugName === "Фармазолін") {
    return farmasolinCounter(age);
  } else if (drugName === "Складні каплі") {
    return complexDropsCounter(age);
  } else if (drugName === "Назомер") {
    return nasomerCounter();
  } else if (drugName === "Аквамаріс") {
    return acuaMarisCounter();
  } else if (drugName === "Хюмер") {
    return humerCounter();
  } else if (drugName === "Назолонг") {
    return nasolongCounter(age);
  } else if (drugName === "Ринт") {
    return ryntCounter(age);
  } else if (drugName === "Полідекса") {
    return polidexaCounter();
  } else if (drugName === "Ізофра") {
    return isofraCounter();
  } else if (drugName === "Етацид") {
    return etacydCounter();
  } else if (drugName === "Назонекс") {
    return nasonexCounter();
  } else if (drugName === "Форінекс") {
    return forinexCounter(age);
  } else if (drugName === "Грипостат") {
    return grypostatCounter();
  } else if (drugName === "Фармазолін-спрей") {
    return farmasolinSpreyCounter();
  } else if (drugName === "Тантум верде") {
    return tantumCounter();
  } else if (drugName === "Зіпелор") {
    return zipelorCounter();
  } else if (drugName === "Орасепт") {
    return oraseptCounter();
  } else if (drugName === "Інгаліпт") {
    return inhaliptCounter();
  } else if (drugName === "Риномістин") {
    return rynomistynCounter();
  }
  if (drugName === "Вібромасаж") {
    return vibroMassageCounter();
  } else if (drugName === "Єврбіотик") {
    return eurobioticCounter(age);
  } else return "";
};

const loratadynCounter = (weight) => {
  if (weight < 30) {
    return "Лоратадин, сироп, по 5 мл, 1 р/д";
  } else return "Лоратадин, таблетки, по 10 мг, 1 р/д";
};
const vibroMassageCounter = () => {
  return "Вібромасаж барабанних перетинок, 1 р/д";
};
const sodaCounter = () => {
  return "Ротові ваночки з содовим розчином, по 1хв., 4 р/д";
};
const fenistylCounter = (weight) => {
  let kilo = Number(weight);
  let dose = 0;
  dose = (kilo * 2) / 3;
  return `Феністил, по ${dose.toFixed()} кап., 3 р/д`;
};
const lincomycinCounter = (weight) => {
  let kilo = Number(weight);
  let dose = 0;
  if (kilo < 41 && kilo > 0) {
    dose = kilo / 20;
    return `Лінкоміцину гідрохлорид(30%), по ${dose.toFixed(
      1
    )} мл в/м'язово, 2 р/д`;
  } else {
    dose = kilo / 30;
    return `Лінкоміцину гідрохлорид(30%), по
      ${dose.toFixed(1)} мл в/м'язово, 3 р/д`;
  }
};
const amoxyclavCounter = (weight) => {
  let dose = weight / 6;
  if (weight < 40) {
    return `Амоксиклав(250/62.5мг), по ${dose.toFixed()} мл, 3 р/д`;
  } else if (weight < 60) {
    return "Амоксиклав(500/125мг), таблетки, по 1 таб., 2 р/д";
  } else return "Амоксиклав(875/125мг), таблетки, по 1 таб., 2 р/д";
};
const amoxycylinCounter = (weight) => {
  return `Амоксицилін(125мг), суспензія, по ${Math.ceil(weight / 2)} мл, 2 р/д`;
};
const sumamedCounter = (weight) => {
  let dose = 0;
  if (weight < 16) {
    dose = weight / 2;
    return ` Сумамед(100мг/5мл), по ${dose.toFixed(1)} мл, 1 р/д`;
  } else if (weight < 45) {
    dose = weight / 4;
    return ` Сумамед(200мг/5мл), по ${dose.toFixed(1)} мл, 1 р/д`;
  } else {
    return " Сумамед(500мг), по 1таб., 1 р/д";
  }
};
const zitroxCounter = (age) => {
  const result =
    age > 10
      ? `Зитрокс (250 мг), по 2 таб., 1 р/д`
      : `Зитрокс (250 мг), по 1 таб., 1 р/д`;
  return result;
};
const cefodoxCounter = (weight) => {
  let dose = 0;
  if (weight < 21) {
    dose = weight / 2;
    return `Цефодокс(50мг/5мл), по ${dose.toFixed(1)} мл, 2 р/д`;
  } else if (weight < 41) {
    dose = weight / 4;
    return `Цефодокс(100мг/5мл), по ${dose.toFixed(1)} мл, 2 р/д`;
  } else {
    return " Цефодокс(200мг), по 1таб., 2 р/д";
  }
};
const lopraxCounter = (weight) => {
  let dose = 0;
  if (weight < 41) {
    dose = weight / 5;
    return `Лопракс(100мг/5мл), по ${dose.toFixed(1)} мл, 2 р/д`;
  } else {
    return " Лопракс(400мг), по 1таб., 1 р/д";
  }
};
const ceftriaxonCounter = (weight) => {
  let kilo = Number(weight);
  let dose = 0;
  if (kilo < 21) {
    dose = kilo / 20;
    return `Цефтріаксон, по ${dose.toFixed(1)} г, в/венно, 2 р/д`;
  } else if (kilo < 51) {
    return "Цефтріаксон, по 1,0 г, в/венно, 2 р/д";
  } else {
    return "Цефтріаксон, по 1,0 г, в/венно, 3 р/д";
  }
};
const efmerynCounter = (weight) => {
  let kilo = Number(weight);
  let dose = 0;
  if (kilo < 21) {
    dose = kilo / 20;
    return `Ефмерин, по ${dose.toFixed(1)} г, в/венно, 2 р/д`;
  } else if (kilo < 51) {
    return "Ефмерин, по 1,0 г, в/венно, 2 р/д";
  } else {
    return "Ефмерин, по 1,0 г, в/венно, 3 р/д";
  }
};
const diacefCounter = (weight) => {
  let kilo = Number(weight);
  let dose = 0;
  if (kilo < 21) {
    dose = kilo / 20;
    return `Діацеф, по ${dose.toFixed(1)} г, в/венно, 2 р/д`;
  } else if (kilo < 51) {
    return "Діацеф, по 1,0 г, в/венно, 2 р/д";
  } else {
    return "Діацеф, по 1,5 г, в/венно, 2 р/д";
  }
};
const cefotaximCounter = (weight) => {
  let kilo = Number(weight);
  let dose = 0;
  if (kilo < 21) {
    dose = kilo / 20;
    return `Цефотаксим, по ${dose.toFixed(1)} г, в/венно, 2 р/д`;
  } else if (kilo < 51) {
    return "Цефотаксим, по 1,0 г, в/венно, 2 р/д";
  } else {
    return "Цефотаксим, по 1,0 г, в/венно, 3 р/д";
  }
};
const amicylCounter = (weight) => {
  let dose = (weight * 15) / 2;
  if (weight < 34) {
    return `Аміцил(250мг), по ${dose.toFixed(0)} мг, в/венно, 2 р/д`;
  } else if (weight < 67) {
    return `Аміцил(500мг), по ${dose.toFixed(0)} мг, в/венно, 2 р/д`;
  } else {
    return `Аміцил(1000мг), по ${dose.toFixed(0)} мг, в/венно, 2 р/д`;
  }
};
const nurofenCounter = (age) => {
  if (age < 1) {
    return "Нурофен, сироп, по 2.5мл, 3 р./д.";
  } else if (age < 4) {
    return "Нурофен, сироп, по 5мл, 3 р./д.";
  } else if (age < 7) {
    return "Нурофен, сироп, по 7.5мл, 3 р./д.";
  } else if (age < 10) {
    return "Нурофен, сироп, по 10мл, 3 р./д.";
  } else if (age < 14) {
    return "Ібупрофен(200мг), таблетки, по 1 таб., 2 р./д.";
  } else return "Ібупрофен(200мг), таблетки, по 2 таб., 2 р./д.";
};
const paracetamolCounter = (age) => {
  if (age < 1) {
    return "Панадол, сироп, по 5мл, 3 р./д.";
  } else if (age < 4) {
    return "Панадол, сироп, по 7,5мл, 3 р./д.";
  } else if (age < 7) {
    return "Панадол, сироп, по 10мл, 3 р./д.";
  } else if (age < 10) {
    return "Парацетамол(250мг), по 1 таб.,3 р./д.";
  } else if (age < 12) {
    return "Парацетамол(325мг), по 1 таб., 3 р./д.";
  } else return "Парацетамол(500мг),по 1 таб., 3 р./д.";
};
const neoflorumCounter = (age) => {
  if (age < 6) {
    return "Лактомун, по 1 саше, 1 р./д.";
  } else if (age < 12) {
    return "Неофлорум, по 1 капсулі, 1 р./д.";
  } else {
    return "Неофлорум, по 1 капсулі, 2 р./д.";
  }
};

const eurobioticCounter = (age) => {
  if (age < 4) {
    return "Євробіотик, по 1 пор., 1 р./д.";
  } else {
    return "Євробіотик, суспензія, по 5 мл, 2 р./д.";
  }
};

const probizCounter = (age) => {
  if (age < 6) {
    return "Пробіз кідс, по 1 міні-флакону, 1 р./д.";
  } else if (age < 12) {
    return "Пробіз, по 1 капсулі, 1 р./д.";
  } else {
    return "Пробіз, по 1 капсулі, 2 р./д.";
  }
};
const metrogilCounter = (weight) => {
  let dose = (weight * 3) / 2;
  if (weight < 67) {
    return `Метрогіл, по ${dose.toFixed(0)} мл, в/венно, 3 р/д`;
  } else {
    return "Метрогіл, по 100 мл, в/венно, 3 р/д";
  }
};
export const heparynCounter = (weight) => {
  let resultMo = 100 * weight;
  let resultMl = resultMo / 5000;
  return `Гепарин, по ${resultMo} МО(${resultMl} мл), 4 р/д, п/ш`;
};

const l_LisynCounter = (weight, age) => {
  let dose = age < 6 ? 0.22 * weight : age < 11 ? 0.18 * weight : 0.18 * weight;
  return `L-лізину есцинат, по ${dose.toFixed(0)} мл, в/венно, 2 р/д`;
};
const enterogerminaCounter = () => {
  return "Ентерожерміна форте, по 5 мл, 1 р/д";
};
const cefixCounter = (weight) => {
  let result = 0;
  if (weight < 40) {
    result = (weight * 2) / 5;
    return `Цефікс(100мг/5мл), по ${result} мл, 1 р/д`;
  } else {
    return `Цефікс(400мг), по 1 таб., 1 р/д`;
  }
};
const ospamoxCounter = (weight) => {
  let dose = weight / 6;
  return `Оспамокс (250 мг), по ${dose.toFixed()} мл, 3 р/д`;
};
const otofaCounter = (age) => {
  return `Отофа, вушні каплі, по ${
    age > 12 ? "5 кап., 3 р/д" : "3 кап., 2 р/д"
  }`;
};
const floxymedCounter = () => {
  return `Флоксимед, вушні каплі, по 2 кап., 3 р/д`;
};
const cyprofarmCounter = (age) => {
  return `Ципрофарм, вушні каплі, по ${
    age > 12 ? "5 кап., 3 р/д" : "3 кап., 2 р/д"
  }`;
};
const otipaxCounter = () => {
  return `Отіпакс, вушні каплі, по 4 кап., 3 р/д`;
};
const droplexCounter = () => {
  return `Дроплекс, вушні каплі, по 4 кап., 3 р/д`;
};
const ototonCounter = (age) => {
  return `Ототон, вушні каплі, по ${
    age > 12 ? "4 кап., 3 р/д" : "4 кап., 2 р/д"
  }`;
};
const candybioticCounter = (age) => {
  return `Кандибіотик, вушні каплі, по ${
    age > 12 ? "4 кап., 3 р/д" : "4 кап., 2 р/д"
  }`;
};

const rynomistynCounter = () => {
  return `Риномістин, назальні каплі, по 2 кап., 3 р/д`;
};

const protargolCounter = (age) => {
  return `Протаргол, назальні каплі, по ${
    age > 12 ? "1 кап., 3 р/д" : "1 кап., 2 р/д"
  }`;
};
const nasyvinCounter = (age) => {
  return `Називін, назальні каплі, по ${
    age > 12 ? "2 кап., 3 р/д" : age > 6 ? "2 кап., 2 р/д" : "1 кап., 2 р/д"
  }`;
};
const rynasolinCounter = (age) => {
  return `Риназолін, назальні каплі, по ${
    age > 12 ? "2 кап., 3 р/д" : age > 6 ? "2 кап., 2 р/д" : "1 кап., 2 р/д"
  }`;
};
const vibrocylCounter = (age) => {
  return `Віброцил, назальні каплі, по ${
    age > 12 ? "2 кап., 4 р/д" : age > 6 ? "1 кап., 4 р/д" : "1 кап., 3 р/д"
  }`;
};
const farmasolinCounter = (age) => {
  return `Фармазолін, назальні каплі, по ${
    age > 12 ? "2 кап., 2 р/д" : age > 6 ? "2 кап., 1 р/д" : "1 кап., 1 р/д"
  }`;
};
const complexDropsCounter = (age) => {
  return `Складні каплі, назальні, по ${
    age > 12 ? "2 кап., 3 р/д" : "1 кап., 3 р/д"
  }`;
};
const nasomerCounter = () => {
  return `Назомер, назальний спрей, по ${"2 впр., 3 р/д"}`;
};
const humerCounter = () => {
  return `Хюмер, назальний спрей, по ${"2 впр., 3 р/д"}`;
};
const acuaMarisCounter = () => {
  return `Аквамаріс, назальний спрей, по ${"2 впр., 3 р/д"}`;
};
const polidexaCounter = () => {
  return `Полідекса, назальний спрей, по ${"1 впр., 3 р/д"}`;
};
const isofraCounter = () => {
  return `Ізофра, назальний спрей, по ${"1 впр., 3 р/д"}`;
};
const etacydCounter = () => {
  return `Етацид, назальний спрей, по ${"2 впр., 2 р/д"}`;
};
const nasonexCounter = () => {
  return `Назонекс, назальний спрей, по ${"2 впр., 2 р/д"}`;
};
const forinexCounter = () => {
  return `Форінекс, назальний спрей, по ${"2 впр., 2 р/д"}`;
};
const farmasolinSpreyCounter = () => {
  return `Фармазолін, назальний спрей, по 1 впр., 3 р/д`;
};
const grypostatCounter = () => {
  return `Грипостат, назальний спрей, по 1 впр., 3 р/д`;
};

const nasolongCounter = (age) => {
  return `, назальний спрей, по ${age > 12 ? "1 впр., 3 р/д" : "1 вп., 2 р/д"}`;
};
const ryntCounter = (age) => {
  return `Ринт, назальний спрей, по ${
    age > 12 ? "1 впр., 3 р/д" : "1 вп., 2 р/д"
  }`;
};
const tantumCounter = () => {
  return `Тантум верде, спрей для горла, по 1-2 впр., 3 р/д`;
};
const zipelorCounter = () => {
  return `Зіпелор, спрей для горла, по 1-2 впр., 3 р/д`;
};
const inhaliptCounter = () => {
  return `Інгаліпт, спрей для горла, по 1-2 впр., 3 р/д`;
};
const oraseptCounter = () => {
  return `Орасепт, спрей для горла, по 1-2 впр., 3 р/д`;
};
