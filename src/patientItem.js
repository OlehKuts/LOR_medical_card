import React, { useState, useEffect } from "react";
import { patientListPropTypes } from "./propTypes";
import { Text } from "./text";
import { Icon } from "./icon";
import "./styles.css";
import T from "prop-types";
import {
  uColorList,
  uOpacityList,
  enterobiozList,
  dungList,
  bloodGroupList,
  rezusFactorList,
  editTypeList,
  townList,
  districtList,
  letters,
} from "./database";
import { numArrayCreator } from "./functions/numArrayCreator";
import { getResidence, setOneTrueInArray } from "./utils/utils";
import { MacInput } from "./UI/input/MacInput";
import { MacButton } from "./UI/button/MacButton";
import {EditDiaryForm} from "./components/EditDiaryForm"

export const PatientItem = ({
  idx,
  limit,
  patient,
  onRemove,
  onSetCurrent,
  onDischargeAdd,
  onExtractAdd,
  onOperationAdd,
  onEditAdd,
  onEditDay,
  params,
  showEditDiaryForm,
  onShowEditDiaryForm,
  onCancelEditDiary,
  ...props
}) => {
  const {diaryList, usedNewDiary, planned, epicrisisDataSend, disease,
    _id, cardNumber, reviewDate, doctor, complaintsContent, anamnesisMorbiContent,
    anamnesisVitaeContent, statusPraesensContent, additionStatus, nose,
    oropharyngoscopy, otoscopy, laryngoscopy, rhinoscopy, diagnosis,
    operationName, operationContent, drugName1, drugName2, drugName3, 
    drugName4, drugName5, appointment, appointment2, appointment3,
    shortStatusContent, secondOperation, recommendations, otherExaminations,
    extractDataSend, operationDataSend, examinations
  } = patient;
  const year = new Date().getFullYear();
  const initDate = new Date();
  const date = `${initDate.getDate()}.${
    initDate.getMonth() + 1
  }.${initDate.getFullYear()}`;
  const onDischargeCancel = () => {
    setShowDischargeForm(false);
  };

  const onExtractCancel = () => {
    setShowExtractForm(false);
  };

  const onOperationCancel = () => {
    setShowOperationForm(false);
  };

  const onEditCancel = () => {
    setShowEditForm(false);
  };
  const doctors = params.doctors.split(",").map((item, idx) => {
    if (idx === 0) {
      return { name: item, value: "" };
    } else return { name: item, value: item };
  });
  const anesthetistList = params.anesthetistList.split(",").map((item, idx) => {
    if (idx === 0) {
      return { name: item, value: "" };
    } else return { name: item, value: item };
  });
  const surgeons = [{ name: "Хірург", value: "" }].concat(doctors.slice(1));
  const assistants = [
    { name: "Асистент", value: "" },
    { name: "відсутній", value: "-" },
  ].concat(doctors.slice(1));
  const [lastDay, setLastDay] = useState(Number(initDate.getDate()));
  const [lastMonth, setLastMonth] = useState(1 + Number(initDate.getMonth()));
  const [lastYear, setLastYear] = useState(year);
  const [showDischargeForm, setShowDischargeForm] = useState(false);
  const onShowDischargeForm = () => {
    if (!(operationDataSend || !planned)) {
      alert("Спочатку введіть дані про планову операцію!");
      return;
    }
    setShowDischargeForm((prev) => !prev);
  };
  const [showExtractForm, setShowExtractForm] = useState(false);
  const onShowExtractForm = () => {
    if (!epicrisisDataSend) {
      alert("Спочатку введіть дані для епікризу!");
      return;
    }
    setShowExtractForm(!showExtractForm);
  };
  const [showOperationForm, setShowOperationForm] = useState(false);
  const onShowOperationForm = () => {
    if (disease === "") return;
    setShowOperationForm(!showOperationForm);
  };
  const [showAllEditForm, setShowAllEditForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showFirstLineEditForm, setShowFirstLineEditForm] = useState(true);
  const onShowEditForm = () => {
    if (editType === "") return;
    setEditedValue(eTypeChecker( editType));
    setShowEditForm(true);
    setShowFirstLineEditForm(false);
  };

  const onShowAllEditForm = () => {
    setShowAllEditForm(!showAllEditForm);
  };

  const [showAdress, setShowAdress] = useState([true, false, false, false]);

  const [hb, setHb] = useState(null);
  const [er, setEr] = useState(null);
  const [leu, setLeu] = useState(null);
  const [pal, setPal] = useState(null);
  const [segm, setSegm] = useState(null);
  const [eoz, setEoz] = useState(null);
  const [limf, setLimf] = useState(null);
  const [rse, setRse] = useState(null);
  const [uColor, setUColor] = useState(uColorList[0]);
  const [uOpacity, setUOpacity] = useState(uOpacityList[0]);
  const [uWeight, setUWeight] = useState("м/с");
  const uPhList = numArrayCreator(8, 18).map((i) => (i / 2).toFixed(1));
  const [uPh, setUPh] = useState(uPhList[4]);
  const [uProtein, setUProtein] = useState("-");
  const [uLeu, setULeu] = useState("2-3");
  const [uEp1, setUEp1] = useState("1-2");
  const [uEp2, setUEp2] = useState("0-1");
  const [uOther, setUOther] = useState("-");
  const [glucose, setGlucose] = useState(4);
  const [enterobioz, setEnterobioz] = useState(enterobiozList[0].value);
  const [dung, setDung] = useState(dungList[0].value);
  const [bloodGroup, setBloodGroup] = useState(bloodGroupList[0].value);
  const [rezusFactor, setRezusFactor] = useState(rezusFactorList[0].value);
  const [showHiddenFieldsLine, setShowHiddenFieldsLine] = useState(false);
  const [analyseHiddenFields, setAnalyseHiddenFields] = useState({
    bloodTestHidden: false,
    urineHidden: false,
    glucoseHidden: false,
  });
  const [wasViolation, setWasViolation] = useState(false);
  const onWasViolationChange = () => {
    setWasViolation(!wasViolation);
  };
  const [anestesiaType, setAnestesiaType] = useState("Загальне");
  const onAnestesiaTypeChoise = (event) => {
    setAnestesiaType(event.target.value);
  };
  const [finalDiagnosis, setFinalDiagnosis] = useState(patient.finalDiagnosis);
  const onDischargeSubmit = (e) => {
    e.preventDefault();
    onDischargeAdd(
      patient._id,
      lastDay,
      lastMonth,
      lastYear,
      hb,
      er,
      leu,
      pal,
      segm,
      eoz,
      limf,
      rse,
      uColor,
      uOpacity,
      uWeight,
      uPh,
      uProtein,
      uLeu,
      uEp1,
      uEp2,
      glucose,
      enterobioz,
      dung,
      bloodGroup,
      rezusFactor,
      uOther,
      wasViolation,
      finalDiagnosis,
      analyseHiddenFields
    );
    setShowDischargeForm(false);
  };
  const [showExtractControls, setShowExtractControls] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [residence, setResidence] = useState("");
  const buildingNumber = ["№ будинку..."];
  const flatNumber = ["№ квартири..."];
  const streetsHeader = [{ name: "Вулиця...", value: "" }];

  const numbers = numArrayCreator(1, 200);
  const buildingNumbers = [...buildingNumber, ...numbers];

  const flatNumbers = [...flatNumber, ...numbers];
  const [residenceFeatures, setResidenceFeatures] = useState({
    town: "",
    street: "",
    district: "",
    adress: "",
    fullAdress: "",
    building: "",
    letter: "",
    flat: "",
  });
  const onExtractSubmit = (e) => {
    e.preventDefault();
    onExtractAdd(_id, birthDate, residence);
    setShowExtractForm(false);
  };

  const onOperationSubmit = (e) => {
    e.preventDefault();
    onOperationAdd(
      _id,
      protocolNumber,
      operationDate,
      operationTime,
      duration,
      surgeon,
      assistant,
      anesthetist,
      anestesiaType,
      operationDataSend,
      finalDiagnosis
    );
    setShowOperationForm(false);
  };

  const [showEditLine, setShowEditLine] = useState(false);
  const [showEditFinal, setShowEditFinal] = useState(false);
  
  const [protocolNumber, setProtocolNumber] = useState(null);

  const [operationDate, setOperationDate] = useState(date);
  const [operationTime, setOperationTime] = useState("");
  const [duration, setDuration] = useState(null);
  const [surgeon, setSurgeon] = useState(surgeons[0].value);
  const [assistant, setAssistant] = useState(assistants[0].value);
  const [anesthetist, setAnesthetist] = useState(anesthetistList[0].value);
  const [editType, setEditType] = useState(editTypeList[0].value);
  const eTypeChecker = ( type) => {
    if (type === "") return;
    let result = "";
    switch (type) {
      case "name":
        result = patient.name;
        break;
      case "cardNumber":
        result = cardNumber;
        break;
      case "reviewDate":
        result = reviewDate;
        break;
      case "doctor":
        result = doctor;
        break;
      case "complaintsContent":
        result = complaintsContent;
        break;
      case "anamnesisMorbiContent":
        result = anamnesisMorbiContent;
        break;
      case "anamnesisVitaeContent":
        result = anamnesisVitaeContent;
        break;
      case "statusPraesensContent":
        result = statusPraesensContent;
        break;
      case "additionStatus":
        result = additionStatus;
        break;
      case "nose":
        result = nose;
        break;
      case "oropharyngoscopy":
        result = oropharyngoscopy;
        break;
      case "laryngoscopy":
        result = laryngoscopy;
        break;
      case "otoscopy":
        result = otoscopy;
        break;
      case "rhinoscopy":
        result = rhinoscopy;
        break;
      case "diagnosis":
        result = diagnosis;
        break;
      case "protocolNumber":
        result = protocolNumber;
        break;
      case "operationName":
        result = operationName;
        break;
      case "operationDate":
        result = operationDate;
        break;
      case "operationTime":
        result = operationTime;
        break;
      case "operationContent":
        result = operationContent;
        break;
      case "drugName1":
        result = drugName1;
        break;
      case "drugName2":
        result = drugName2;
        break;
      case "drugName3":
        result = drugName3;
        break;
      case "drugName4":
        result = drugName4;
        break;
      case "drugName5":
        result = drugName5;
        break;
      case "appointment":
        result = appointment;
        break;
      case "appointment2":
        result = appointment2;
        break;
      case "appointment3":
        result = appointment3;
        break;
      case "shortStatusContent":
        result = shortStatusContent;
        break;
      case "finalDiagnosis":
        result = finalDiagnosis;
        break;
      case "secondOperation":
        result = secondOperation;
        break;
      case "recommendations":
        result = recommendations;
        break;
      case "otherExaminations":
        result = otherExaminations;
        break;
        case "examinations":
          result = examinations;
          break;
      default:
        throw new Error();
    }
    return result;
  };

  const onEditSubmit = (e) => {
    e.preventDefault();
    onEditAdd(_id, editType, editedValue);
    setShowAllEditForm(false);
    setShowEditForm(false);
    setShowFirstLineEditForm(true);
    setEditType(editTypeList[0].value);
  };
  const [editedValue, setEditedValue] = useState("");
  const [currentStreets, setCurrentStreets] = useState(townList[0].streets);
  const getStreets = (cityList, currentCity) => {
    const city = cityList.find((item) => item.value === currentCity);
    const mappedList = city.streets.map((item) => {
      return { name: item.name, value: item.name };
    });
    const finalList = [...streetsHeader, ...mappedList];
    return finalList;
  };

  const [currentDay, setCurrentDay] = useState("");
  const [currentId, setCurrentId] = useState("");
  const allowEditDiary = (dayId) => {
    if (!dayId) return;
    setCurrentDay(diaryList.find((item) => item.id === Number(dayId)));
    setShowEditFinal(true);
    setShowEditLine(false);
  };
  useEffect(() => {
    setCurrentStreets(getStreets(townList, residenceFeatures.town));
  }, [residenceFeatures.town]);
  return (
    <>
      {idx >= limit.low && idx <= limit.high && (
        <div className="patientLine" style={{ ...props }}>
          <div id="cardNumberinList">
            {" "}
            <Text size="20px">{cardNumber}</Text>
          </div>
          <div id="patientNameinList">
            {" "}
            <Text size="20px">{patient.name}</Text>
          </div>
          <button
            title="Ввести дані про операцію"
            id="operationBtn"
            onClick={onShowOperationForm}
            style={{
              backgroundColor:
                operationDataSend || !planned
                  ? "#3d3d3d"
                  : "gainsboro",
            }}
          >
            <Icon
              name="operation"
              color={
                operationDataSend || !planned
                  ? "white"
                  : "black"
              }
            />
          </button>
          <button
            onClick={onShowDischargeForm}
            style={{
              backgroundColor: epicrisisDataSend
                ? "#3d3d3d"
                : "gainsboro",
              color: epicrisisDataSend ? "coral" : "black",
            }}
          >
            Епікриз
          </button>
          <button
            onClick={onShowExtractForm}
            style={{
              backgroundColor: extractDataSend
                ? "#3d3d3d"
                : "gainsboro",
              color: extractDataSend ? "coral" : "black",
            }}
          >
            Виписка
          </button>
          <button
            title="Дивитися медичну карту"
            id="viewBtn"
            onClick={() => onSetCurrent(_id)}
          >
            <Icon name="eye" />
          </button>
          <button
            title="Виправити дані"
            id="editBtn"
            onClick={onShowAllEditForm}
          >
            <Icon name="edit" fill="olive" />
          </button>
          <button
            className="editBtn"
            onClick={() => {
              setShowEditLine(!showEditLine);
              onShowEditDiaryForm();
            }}
            title="Виправити щоденник"
          >
            <Icon name="diary" fill="navy" />
          </button>
          <button
            title="Видалити пацієнта"
            onClick={() => onRemove(_id)}
            id="removeBtn"
          >
            {" "}
            <Icon name="remove" />
          </button>
        </div>
      )}
      {showDischargeForm && (
        <div id="dischargeForm">
          <form onSubmit={onDischargeSubmit}>
            <p className="flexBetween smallLine">
              {" "}
              <MacInput
                type="number"
                min="0"
                max="200"
                value={hb}
                placeholder="Hb"
                onChange={(e) => setHb(e.target.value)}
              />{" "}
              <MacInput
                type="number"
                value={er}
                onChange={(e) => setEr(e.target.value)}
                placeholder="Er..."
              />
              <MacInput
                type="number"
                value={leu}
                onChange={(e) => setLeu(e.target.value)}
                placeholder="Leu..."
              />
              <MacInput
                type="number"
                min="0"
                max="100"
                value={pal}
                placeholder="Пал"
                onChange={(e) => setPal(e.target.value)}
              />
              <MacInput
                type="number"
                min="0"
                max="100"
                value={segm}
                placeholder="Сегм"
                onChange={(e) => setSegm(e.target.value)}
              />
              <MacInput
                type="number"
                min="0"
                max="100"
                value={eoz}
                placeholder="Еоз"
                onChange={(e) => setEoz(e.target.value)}
              />
              <MacInput
                type="number"
                min="0"
                max="100"
                value={limf}
                placeholder="Лімф"
                onChange={(e) => setLimf(e.target.value)}
              />
              <MacInput
                type="number"
                min="0"
                max="100"
                value={rse}
                placeholder="ШОЕ"
                onChange={(e) => setRse(e.target.value)}
              />
            </p>
            <p className="flexBetween smallLine">
              <div className="label">Сеча</div>
              <select
                className="mediumSelect"
                value={uColor}
                onChange={(e) => setUColor(e.target.value)}
              >
                {uColorList.map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <select
                className="mediumSelect"
                value={uOpacity}
                onChange={(e) => setUOpacity(e.target.value)}
              >
                {uOpacityList.map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <MacInput
                className="superShortInputs"
                value={uWeight}
                onChange={(e) => setUWeight(e.target.value)}
                placeholder="Питома вага..."
              />
              <select
                className="shortSelect"
                value={uPh}
                onChange={(e) => setUPh(e.target.value)}
              >
                {uPhList.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <MacInput
                className="superShortInputs"
                value={uProtein}
                onChange={(e) => setUProtein(e.target.value)}
                placeholder="Білок..."
              />
              <MacInput
                className="superShortInputs"
                value={uLeu}
                onChange={(e) => setULeu(e.target.value)}
                placeholder="Лейкоцити"
              />
              <MacInput
                className="superShortInputs"
                value={uEp1}
                onChange={(e) => setUEp1(e.target.value)}
                placeholder="Плоский"
              />
              <MacInput
                className="superShortInputs"
                value={uEp2}
                onChange={(e) => setUEp2(e.target.value)}
                placeholder="Перехідний"
              />
              <MacInput
                className="superShortInputs"
                value={uOther}
                onChange={(e) => setUOther(e.target.value)}
                placeholder="інше..."
              />
            </p>
            <p className="flexBetween smallLine">
              <div className="label" id="firstLine">
                Глюкоза
              </div>{" "}
              <MacInput
                type="number"
                step="0.1"
                min="0"
                max="100"
                className="shortInputs"
                value={glucose}
                onChange={(e) => setGlucose(e.target.value)}
                placeholder="Глюкоза..."
              />
              <select
                value={enterobioz}
                onChange={(e) => setEnterobioz(e.target.value)}
              >
                {enterobiozList.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select value={dung} onChange={(e) => setDung(e.target.value)}>
                {dungList.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              {planned && (
                <>
                  <select
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                  >
                    {bloodGroupList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>

                  <select
                    value={rezusFactor}
                    onChange={(e) => setRezusFactor(e.target.value)}
                  >
                    {rezusFactorList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </>
              )}
              {!showHiddenFieldsLine && (
                <Icon
                  name="arrowDown"
                  size="50px"
                  onClick={() => setShowHiddenFieldsLine(true)}
                  color="mediumpurple"
                />
              )}
            </p>

            {showHiddenFieldsLine && (
              <>
                <p className="flexi">
                  <div className="label" style={{ fontWeight: "bold" }}>
                    Не відображати:
                  </div>{" "}
                  <div className="label">Загальний аналіз крові</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={analyseHiddenFields.bloodTestHidden}
                    onChange={() =>
                      setAnalyseHiddenFields({
                        ...analyseHiddenFields,
                        bloodTestHidden: !analyseHiddenFields.bloodTestHidden,
                      })
                    }
                    checked={analyseHiddenFields.bloodTestHidden}
                  />
                  <div className="label">Загальний аналіз сечі</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={analyseHiddenFields.urineHidden}
                    onChange={() =>
                      setAnalyseHiddenFields({
                        ...analyseHiddenFields,
                        urineHidden: !analyseHiddenFields.urineHidden,
                      })
                    }
                    checked={analyseHiddenFields.urineHidden}
                  />
                  <div className="label">Глюкоза крові</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={analyseHiddenFields.glucoseHidden}
                    onChange={() =>
                      setAnalyseHiddenFields({
                        ...analyseHiddenFields,
                        glucoseHidden: !analyseHiddenFields.glucoseHidden,
                      })
                    }
                    checked={analyseHiddenFields.glucoseHidden}
                  />
                </p>
              </>
            )}
            <p className="flexi smallLine">
              <div className="label" id="firstLine">
                Виписка
              </div>{" "}
              <MacInput
                style={{ height: "22px" }}
                type="number"
                min="1"
                max="31"
                value={lastDay}
                onChange={(e) => setLastDay(e.target.value)}
              />
              <MacInput
                style={{ height: "22px" }}
                type="number"
                min="1"
                max="12"
                value={lastMonth}
                placeholder=""
                onChange={(e) => setLastMonth(e.target.value)}
              />
              <MacInput
                style={{ height: "22px" }}
                type="number"
                min="2020"
                max="9999"
                value={lastYear}
                placeholder=""
                onChange={(e) => setLastYear(e.target.value)}
              />
              <MacInput
                className="extraLongInputs"
                value={finalDiagnosis}
                onChange={(e) => setFinalDiagnosis(e.target.value)}
                placeholder="заключний діагноз..."
              />
              <span
                style={{
                  fontSize: "14px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                {" "}
                За порушення режиму
              </span>
              {/* </div> */}
              <input
                className="checkbox"
                type="checkbox"
                value={wasViolation}
                onChange={onWasViolationChange}
                checked={wasViolation}
              />
            </p>
            <p className="sendLine">
              <input className="send" type="submit" value="Відправити" />
              <button onClick={onDischargeCancel}>Скасувати</button>
            </p>
          </form>
        </div>
      )}

      {showExtractForm && (
        <div id="extractForm">
          <form onSubmit={onExtractSubmit}>
            <p className="flexi">
              <MacInput
                style={{ width: "115px" }}
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                placeholder="Дата народження"
              />
              {birthDate.length > 7 ? (
                <Icon name="trueAnswer" size="2rem" color="green" />
              ) : (
                <Icon name="falseAnswer" size="2rem" color="red" />
              )}
            </p>
            <div className="centered">
              <label>Адреса</label>
            </div>
            {showAdress[0] && (
              <div className="centered">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAdress(setOneTrueInArray(showAdress, 1));
                  }}
                >
                  Місто
                </button>
                <button
                  onClick={() =>
                    setShowAdress(setOneTrueInArray(showAdress, 2))
                  }
                >
                  Село
                </button>
                <button
                  onClick={() =>
                    setShowAdress(setOneTrueInArray(showAdress, 3))
                  }
                >
                  Інша область
                </button>
              </div>
            )}
            {showAdress[1] && (
              <>
                <div className="flexi">
                  <select
                    value={residenceFeatures.town}
                    onChange={(e) =>
                      setResidenceFeatures({
                        ...residenceFeatures,
                        town: e.target.value,
                      })
                    }
                  >
                    {townList.map((item, idx) => {
                      return (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    value={residenceFeatures.street}
                    onChange={(e) =>
                      setResidenceFeatures({
                        ...residenceFeatures,
                        street: e.target.value,
                      })
                    }
                  >
                    {currentStreets.map((item, idx) => {
                      return (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="flexi">
                  <select
                    value={residenceFeatures.building}
                    onChange={(e) =>
                      setResidenceFeatures({
                        ...residenceFeatures,
                        building: e.target.value,
                      })
                    }
                  >
                    {buildingNumbers.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    id="lettersSelect"
                    value={residenceFeatures.letter}
                    onChange={(e) =>
                      setResidenceFeatures({
                        ...residenceFeatures,
                        letter: e.target.value,
                      })
                    }
                  >
                    {letters.map((item, idx) => {
                      return (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    value={residenceFeatures.flat}
                    onChange={(e) =>
                      setResidenceFeatures({
                        ...residenceFeatures,
                        flat: e.target.value,
                      })
                    }
                  >
                    {flatNumbers.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </>
            )}
            {showAdress[2] && (
              <>
                <div className="flexi">
                  <select
                    value={residenceFeatures.district}
                    onChange={(e) =>
                      setResidenceFeatures({
                        ...residenceFeatures,
                        district: e.target.value,
                      })
                    }
                  >
                    {districtList.map((item, idx) => {
                      return (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <MacInput
                    style={{ height: "22px", border: "1px solid black" }}
                    value={residenceFeatures.adress}
                    onChange={(e) =>
                      setResidenceFeatures({
                        ...residenceFeatures,
                        adress: e.target.value,
                      })
                    }
                    placeholder="назва села або СМТ..."
                  />
                </div>
              </>
            )}
            {showAdress[3] && (
              <>
                <div className="flexi">
                  <MacInput
                    style={{ width: "350px" }}
                    value={residenceFeatures.fullAdress}
                    onChange={(e) =>
                      setResidenceFeatures({
                        ...residenceFeatures,
                        fullAdress: e.target.value,
                      })
                    }
                    placeholder="введіть повну адресу..."
                  />
                </div>
              </>
            )}
            {!showExtractControls && !showAdress[0] && (
              <>
                <div className="flexi">
                  <MacButton
                    onClick={(e) => {
                      e.preventDefault();
                      setResidence(getResidence(residenceFeatures));
                      setShowExtractControls(true);
                    }}
                  >
                    Підтвердити
                  </MacButton>
                </div>
              </>
            )}
            <p className="flexi">
              <MacInput
                style={{ width: "300px" }}
                value={residence}
                onChange={(e) => setResidence(e.target.value)}
                placeholder="Адреса проживання"
              />
              {showExtractControls ? (
                <Icon name="trueAnswer" size="2rem" color="green" />
              ) : (
                <Icon name="falseAnswer" size="2rem" color="red" />
              )}
            </p>

            {showExtractControls && (
              <>
                <p className="sendLine">
                  <button className="send btnEffect" type="submit">
                    Відправити
                  </button>
                  <button
                    className="btnEffect cancel"
                    onClick={onExtractCancel}
                  >
                    Скасувати
                  </button>
                </p>
              </>
            )}
          </form>
        </div>
      )}
      {showOperationForm && (
        <div id="operationForm">
          <form onSubmit={onOperationSubmit}>
            <p className="flexi">
              {" "}
              <input
                id="numberInput6"
                className="middleInputs"
                type="number"
                min="1"
                max="999"
                value={protocolNumber}
                onChange={(e) => setProtocolNumber(e.target.value)}
                placeholder="№ протоколу..."
              />
              <select
                value={surgeon}
                onChange={(e) => setSurgeon(e.target.value)}
              >
                {surgeons.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select
                value={assistant}
                onChange={(e) => setAssistant(e.target.value)}
              >
                {assistants.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select
                value={anesthetist}
                onChange={(e) => setAnesthetist(e.target.value)}
              >
                {anesthetistList.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </p>
            <p className="flexi">
              {" "}
              <input
                className="shortInputs"
                value={operationDate}
                onChange={(e) => setOperationDate(e.target.value)}
                placeholder="Дата операції..."
              />
              <input
                className="middleInputs"
                value={operationTime}
                onChange={(e) => setOperationTime(e.target.value)}
                placeholder="Час операції"
              />
              <input
                className="middleInputs"
                type="number"
                min="1"
                max="999"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Тривалість"
              />{" "}
              <div className="radioButtons">
                <input
                  id="radioButtonsInput"
                  name="anestesiaType"
                  type="radio"
                  value="Загальне"
                  checked={anestesiaType === "Загальне"}
                  onChange={onAnestesiaTypeChoise}
                />
                <label>загальне</label>
              </div>
              <div className="radioButtons">
                <input
                  id="radioButtonsInput"
                  name="anestesiaType"
                  type="radio"
                  value="Місцеве"
                  checked={anestesiaType === "Місцеве"}
                  onChange={onAnestesiaTypeChoise}
                />
                <label>місцеве</label>
              </div>
            </p>
              <p className="flexi">
                <input
                className="extraLongInputs"
                value={finalDiagnosis}
                onChange={(e) => setFinalDiagnosis(e.target.value)}
                placeholder="заключний діагноз..."
              />
                </p>

            <p className="sendLine">
              <input className="send" type="submit" value="Відправити" />
              <button onClick={onOperationCancel}>Скасувати</button>
            </p>
          </form>
        </div>
      )}
      {showAllEditForm && (
        <div id="allEditForm">
          {showFirstLineEditForm && (
            <p className="flexi">
              <select
                value={editType}
                onChange={(e) => setEditType(e.target.value)}
              >
                {editTypeList.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <button onClick={onShowEditForm}>Підтвердити</button>
            </p>
          )}
          {showEditForm && (
            <form onSubmit={onEditSubmit}>
              <p className="flexi">
                <textarea
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                  placeholder="введіть значення..."
                  rows="10"
                  cols="100"
                />
              </p>
              <p className="sendLine">
                <input className="send" type="submit" value="Відправити" />
                <button onClick={onEditCancel}>Скасувати</button>
              </p>
            </form>
          )}
        </div>
      )}

{showEditDiaryForm && epicrisisDataSend && usedNewDiary ? (
        <>
          {showEditLine ? (
            <>
              <div className="flexi">
                <select
                  value={currentId}
                  onChange={(e) => setCurrentId(e.target.value)}
                >
                  <option value={""}>Оберіть день</option>
                  {diaryList.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.date}
                    </option>
                  ))}
                </select>

                <button onClick={() => allowEditDiary(currentId)}>
                  Показати
                </button>
              </div>
            </>
          ) : null}
          {showEditFinal ? (
            <EditDiaryForm
              currentDay={currentDay}
              onEditDay={onEditDay}
              onCancelEditDiary={onCancelEditDiary}
              patientId={_id}
            />
          ) : null}
        </>
      ) : null}

    </>
  );
};

PatientItem.propTypes = {
  ...patientListPropTypes,
  onRemove: T.func.isRequired,
};
