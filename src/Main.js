import React, { useEffect, useReducer, useState, useRef } from "react";
import "./styles.css";
import { PatientForm } from "./patientForm";
import { PatientCard } from "./PatientCard";
import { PatientItem } from "./patientItem";
import { Review } from "./review";
import { Diary } from "./diary";
import { Epicrisis } from "./epicrisis";
import { Extract } from "./extract";
import { MyModal } from "./components/MyModal";
import { ParamsForm } from "./components/ParamsForm";
import {
  patientsReducer,
  initialState,
  PATIENTS_ACTIONS
} from "./patientsReducer";
import { doctors } from "./database";
import { StatsTable } from "./components/StatsTable";
import { UpcomingEvents } from "./components/UpcomingEvents";
import {
  fullNameCutter,
  setOneTrueInArray
} from "./utils/utils";
import { initialParams } from "./initialParams";
import { UsefulLinks } from "./components/UsefulLinks";
import { Clock } from "./components/Clock";
import { numArrayCreator } from "./functions/numArrayCreator";
import { NewDiary } from "./components/newDiary";
import useCopyToClipboard from "./components/hooks/useCopyToClipboard";
import { isJsonString, exceedReminder } from "./utils/utils";


export const Main = () => {
  // localStorage.setItem("basicParams", JSON.stringify(initialParams));
  const basicParams = JSON.parse(localStorage.getItem("basicParams_lor"));
  const [currentParams, setCurrentParams] = useState(
    basicParams || initialParams
  );
  const changeParams = (newParams) => {
    localStorage.setItem("basicParams_lor", JSON.stringify(newParams));
    setCurrentParams(newParams);
    alert("Внесені зміни застосовано!");
    setShowMenuPart(setOneTrueInArray(showMenuPart, 0));
  };
  const [modalActive, setModalActive] = useState(false);
  const [showMenuPart, setShowMenuPart] = useState([
    true,
    false,
    false,
    false,
    false
  ]);

  const formClick = () => {
    setShowMenuPart(setOneTrueInArray(showMenuPart, 0));
  };
  const listClick = () => {
    setShowMenuPart(setOneTrueInArray(showMenuPart, 1));
  };
  const mainClick = () => {
    setShowMenuPart(setOneTrueInArray(showMenuPart, 2));
  };
  const paramsClick = () => {
    setShowMenuPart(setOneTrueInArray(showMenuPart, 3));
  };
  const statsClick = () => {
    setShowMenuPart(setOneTrueInArray(showMenuPart, 4));
  };
  const [patients, dispatch] = useReducer(patientsReducer, initialState());
// import-export
  const [showImport, setShowImport] = useState(false);
  const [copiedToClipboard, { success }] = useCopyToClipboard();
  const [importedData, setImportedData] = useState("");
  const onImport = () => {
    if (!isJsonString(importedData)) {
      alert("Невірний формат даних!");
      return;
    }
    dispatch({
      type: PATIENTS_ACTIONS.IMPORT,
      payload: { importedPatients: JSON.parse(importedData) },
    });
    alert("Дані успішно імпортовано");
    setShowImport(false)
  };
  const exportData = () => {
    copiedToClipboard(JSON.stringify(patients));
    alert(
      "Дані про медичні карти пацієнтів скопійовано в буфер обміну. Збережіть їх в текстовому документі."
    );
  };

  const onAdd = (
    disease,
    startDay,
    startMonth,
    startYear,
    cardNumber,
    name,
    doctor,
    start1,
    start2,
    pregnancy,
    childbirth,
    birthWeight,
    condition,
    weight,
    age,
    drugName1,
    drugName2,
    drugName3,
    drugName4,
    drugName5,
    appointment,
    appointment2,
    appointment3,
    protocolNumber,
    operationDate,
    operationTime,
    duration,
    surgeon,
    assistant,
    anesthetist,
    woundArea,
    woundSide,
    injuryDate,
    injuryTime,
    injuryReason,
    woundType,
    woundLength,
    woundWidth,
    woundDepth,
    woundForm,
    woundLedges,
    woundBleeding,
    woundAliens,
    sutureType,
    sutureMaterial,
    sutureSize,
    anestesiaType,
    woundSurface,
    abscessType,
    abscessArea,
    abscessSide,
    abscessReason,
    neoplasmType,
    neoplasmArea,
    neoplasmSide,
    growthRate,
    neoplasmSurface,
    neoplasmMovability,
    neoplasmPoignancy,
    neoplasmConsistance,
    neoplasmDiameter,
    neoplasmColor,
    neoplasmBorders,
    neoplasmAboveSurface,
    neoplasmSurfaceAlter,
    neoplasmForm,
    coblation,
    acuteOtitisSide,
    noseFractureSide,
    tampon,
    septumCurvatureSide,
    otitisTypeOperation,
    mastoiditisSide,
    isOtitisComplication,
    mastoiditisOperationType,
    operationFree,
    sinusitisSide,
    sinusitisType,
    sinusitisVariety,
    sinusitisCT,
    acuteOtitisType,
    paratonsilarAbscessSide,
    hearingLossType,
    hearingLossSide,
    hearingLossDegree,
    spokenRight,
    whisperRight,
    spokenLeft,
    whisperLeft
  ) => {
    dispatch({
      type: PATIENTS_ACTIONS.ADD,
      disease,
      startDay,
      startMonth,
      startYear,
      cardNumber,
      name,
      doctor,
      start1,
      start2,
      pregnancy,
      childbirth,
      birthWeight,
      condition,
      weight,
      age,
      drugName1,
      drugName2,
      drugName3,
      drugName4,
      drugName5,
      appointment,
      appointment2,
      appointment3,
      protocolNumber,
      operationDate,
      operationTime,
      duration,
      surgeon,
      assistant,
      anesthetist,
      woundArea,
      woundSide,
      injuryDate,
      injuryTime,
      injuryReason,
      woundType,
      woundLength,
      woundWidth,
      woundDepth,
      woundForm,
      woundLedges,
      woundBleeding,
      woundAliens,
      sutureType,
      sutureMaterial,
      sutureSize,
      anestesiaType,
      woundSurface,
      abscessType,
      abscessArea,
      abscessSide,
      abscessReason,
      neoplasmType,
      neoplasmArea,
      neoplasmSide,
      growthRate,
      neoplasmSurface,
      neoplasmMovability,
      neoplasmPoignancy,
      neoplasmConsistance,
      neoplasmDiameter,
      neoplasmColor,
      neoplasmBorders,
      neoplasmAboveSurface,
      neoplasmSurfaceAlter,
      neoplasmForm,
      coblation,
      acuteOtitisSide,
      noseFractureSide,
      tampon,
      septumCurvatureSide,
      otitisTypeOperation,
      mastoiditisSide,
      isOtitisComplication,
      mastoiditisOperationType,
      operationFree,
      sinusitisSide,
      sinusitisType,
      sinusitisVariety,
      sinusitisCT,
      acuteOtitisType,
      paratonsilarAbscessSide,
      hearingLossType,
      hearingLossSide,
      hearingLossDegree,
      spokenRight,
      whisperRight,
      spokenLeft,
      whisperLeft
    });
    listClick();
  };
  const onRemove = (_id) => dispatch({ type: PATIENTS_ACTIONS.REMOVE, _id });
  const onDischargeAdd = (
    _id,
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
  ) => {
    return dispatch({
      type: PATIENTS_ACTIONS.DISCHARGEADD,
      _id,
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
    });
  };
  const onOperationAdd = (
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
  ) => {
    dispatch({
      type: PATIENTS_ACTIONS.OPERATIONADD,
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
    });
  };
  useEffect(() => {
    const patientsStringified = JSON.stringify(patients);
    localStorage.setItem("patients_lor", patientsStringified);
  }, [patients]);
  useEffect(() => {
    exceedReminder(patients.length);
    }, [patients]);
  const pagesArray = numArrayCreator(1, Math.ceil(patients.length / 12));
  const [limit, setLimit] = useState({ low: 0, high: 11 });
  const [cur, setCur] = useState(patients[0]);

  const inputRef = useRef("");

  const onSetCurrent = (id) => {
    let currentArray = [];
    currentArray = patients.filter((patient) => patient._id === id);
    setCur(currentArray[0]);
    mainClick();
  };

  const onExtractAdd = (_id, birthDate, residence) => {
    return dispatch({
      type: PATIENTS_ACTIONS.EXTRACTADD,
      _id,
      birthDate,
      residence
    });
  };
  const onEditAdd = (_id, editType, editedValue) => {
    return dispatch({
      type: PATIENTS_ACTIONS.EDIT,
      _id,
      editType,
      editedValue
    });
  };
  const [showEditDiaryForm, setShowEditDiaryForm] = useState(false);
  const onShowEditDiaryForm = () => {
    setShowEditDiaryForm(!showEditDiaryForm);
  };
  const onCancelEditDiary = () => {
    setShowEditDiaryForm(false);
  };
  const editDay = (day, patientId) => {
    setShowEditDiaryForm(false);
    return dispatch({
      type: PATIENTS_ACTIONS.EDITDAY,
      day,
      patientId,
    });
  };

  const [request, setRequest] = useState("");
  const onRequestChange = (e) => setRequest(e.target.value);
  let filteredPatients = patients;
  const matchesFilter = new RegExp(request, "i");
  filteredPatients = patients.filter(({ name }) => matchesFilter.test(name));
  const initDate = new Date();
  const getActivity = (members, month, year) => {
    const filteredByDate = patients.filter(
      (item) =>
        Number(item.startYear) === year && Number(item.startMonth) === month
    );
    const membersModified = members.map((item) => {
      return { name: item.name, amount: 0 };
    });
    const membersFinal = membersModified.map((item) => {
      let personalResult = 0;
      let surgeonResult = 0;
      let assistantResult = 0;
      filteredByDate.forEach((element) => {
        if (element.doctor === item.name) {
          personalResult++;
        }
        if (element.surgeon === item.name) {
          surgeonResult++;
        }
        if (element.assistant === item.name) {
          assistantResult++;
        }
      });
      return {
        name: item.name,
        personalCount: personalResult,
        surgeonCount: surgeonResult,
        assistantCount: assistantResult
      };
    });
    return membersFinal;
  };
  const cutDoctors = doctors.slice(1);

  const [requestMonth, setRequestMonth] = useState(Number(initDate.getMonth()));
  const onRequestMonthChange = (e) => {
    setRequestMonth(e.target.value);
  };
  const [requestYear, setRequestYear] = useState(
    Number(initDate.getFullYear())
  );
  const onRequestYearChange = (e) => {
    setRequestYear(e.target.value);
  };
  const [statsDoctors, setStatsDoctors] = useState(
    getActivity(cutDoctors, requestMonth, requestYear)
  );
  const onStatsSubmit = (e) => {
    e.preventDefault();
    setStatsDoctors(
      getActivity(cutDoctors, Number(requestMonth), Number(requestYear))
    );
  };
console.log(cur.epicrisisDataSend)
  return (
    <>
      <div className="navigation">
        <ul>
          <li
            onClick={formClick}
            className={`list ${showMenuPart[0] ? "activeNavbarLi" : ""}`}
          >
            <span title="Новий пацієнт">
              <span className="icon">
                <ion-icon name="person-add-outline"></ion-icon>
              </span>
              <span className="navbarText">Новий</span>
            </span>
          </li>
          <li
            onClick={listClick}
            className={`list ${showMenuPart[1] ? "activeNavbarLi" : ""}`}
          >
            <span title="Список пацієнтів">
              <span className="icon">
                <ion-icon name="list-circle-outline"></ion-icon>
              </span>
              <span className="navbarText">Список</span>
            </span>
          </li>
          <li
            onClick={mainClick}
            className={`list ${showMenuPart[2] ? "activeNavbarLi" : ""}`}
          >
            <span title={fullNameCutter(cur.name)}>
              <span className="icon">
                <ion-icon name="person-circle-outline"></ion-icon>
              </span>
              <span className="navbarText">{fullNameCutter(cur.name)}</span>
            </span>
          </li>
          <li
            onClick={paramsClick}
            className={`list ${showMenuPart[3] ? "activeNavbarLi" : ""}`}
          >
            <span title="Налаштування">
              <span className="icon">
                <ion-icon name="settings-outline"></ion-icon>
              </span>
              <span className="navbarText">Налаштування</span>
            </span>
          </li>
          <li
            onClick={statsClick}
            className={`list ${showMenuPart[4] ? "activeNavbarLi" : ""}`}
          >
            <span title="Статистика">
              <span className="icon">
                <ion-icon name="stats-chart-outline"></ion-icon>
              </span>
              <span className="navbarText">Статистика</span>
            </span>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>

      <div className="app">
        {showMenuPart[0] && (
          <>
            
              <>
                <div>
                  <button
                    className="btnEffect send"
                    id="addBtn"
                    onClick={() => setModalActive(true)}
                  >
                    Новий пацієнт
                  </button>
                </div>
                <UpcomingEvents patients={patients} />
                <UsefulLinks />

                <div className="importBlock">
                  <button
                    onClick={exportData}
                    className="importBlockBtn"
                    id="exportBtn"
                  >
                    {success ? "Дані скопійовано" : "Експортувати дані"}
                  </button>
                  <button
                    onClick={() => setShowImport(true)}
                    className="importBlockBtn"
                  >
                    Імпортувати дані
                  </button>
                </div>
                <hr />
                {showImport ? (
                  <div className="importBlock">
                    <textarea
                      placeholder="Вставте сюди дані для імпорту..."
                      value={importedData}
                      onChange={(e) => setImportedData(e.target.value)}
                      cols="100"
                      rows="30"
                    />
                    <div>
                      <button onClick={onImport}>Підтвердити</button>
                      <button onClick={() => setShowImport(false)}>
                        Відмінити
                      </button>
                    </div>
                    <hr />
                  </div>
                ) : null}

                <Clock />
              </>
            <MyModal active={modalActive} setActive={setModalActive}>
              <PatientForm {...{ onAdd }} params={currentParams} />
            </MyModal>
          </>
        )}
        {showMenuPart[1] && (
          <>
            {" "}
            <div className="flexi" id="sortBtnLines">
              <input
                ref={inputRef}
                className="longInputs"
                value={request}
                onChange={onRequestChange}
                placeholder="Введіть ім'я чи прізвище пацієнта..."
              />
            </div>
            <div id="patientList">
              {filteredPatients.map((patient, idx) => (
                <PatientItem
                  key={patient._id}
                  idx={idx}
                  limit={limit}
                  {...{ patient }}
                  onRemove={onRemove}
                  onSetCurrent={onSetCurrent}
                  onDischargeAdd={onDischargeAdd}
                  onExtractAdd={onExtractAdd}
                  onOperationAdd={onOperationAdd}
                  onEditAdd={onEditAdd}
                  onEditDay={editDay}
                  showEditDiaryForm={showEditDiaryForm}
                  onShowEditDiaryForm={onShowEditDiaryForm}
                  onCancelEditDiary={onCancelEditDiary}
                  params={currentParams}
                  backgroundColor={
                    patient.disease === ""
                      ? "azure"
                      : patient.disease === "acuteOtitis"
                      ? "lavender"
                      : patient.disease === "skinWound"
                      ? "beige"
                      : patient.disease === "paratonsilarAbscess"
                      ? "palegoldenrod"
                      : patient.disease === "hearingLoss"
                      ? "seaShell"
                      : patient.disease === "adenoids"
                      ? "#CFF0EC"
                      : patient.disease === "abscess"
                      ? "mistyRose"
                      : patient.disease === "septumCurvature"
                      ? "linen"
                      : patient.disease === "tonsilitis"
                      ? "gainsboro"
                      : patient.disease === "neoplasm"
                      ? "#D8E1C7"
                      : patient.disease === "noseFracture"
                      ? "#E1C6C2"
                      : patient.disease === "mastoiditis"
                      ? "#F7DCFF"
                      : patient.disease === "sinusitis"
                      ? "#D7FFE4"
                      : "white"
                    //
                  }
                  border={
                    cur !== undefined && cur._id === patient._id
                      ? "2px solid olive"
                      : ""
                  }
                />
              ))}
            </div>
            <div className="pages">
              {pagesArray.map((item, idx) => (
                <button
                  className="pageButton"
                  id={idx === limit.low / 12 ? "activePage" : ""}
                  key={idx}
                  onClick={() => {
                    setLimit({
                      low: (item - 1) * 12,
                      high: (item - 1) * 12 + 11,
                    });
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </>
        )}
        {showMenuPart[2] && cur !== undefined && (
          <>
            {cur !== undefined && <PatientCard current={cur} />}
            <Review current={cur} params={currentParams} />
            <Epicrisis current={cur} params={currentParams} />
            <Extract current={cur} params={currentParams} />
            {cur !== undefined &&
              !cur.usedNewDiary &&
              cur.diaryList.map((item, idx) => (
                <Diary
                  key={idx}
                  current={item}
                  lastIndex={idx === cur.diaryList.length - 1 ? true : false}
                  patient={cur}
                  params={currentParams}
                />
              ))}
            {cur.usedNewDiary ? (
              <>
                {cur.diaryList.map((item) => (
                  <NewDiary key={item.id} patient={cur} currentDay={item} params={currentParams}/>
                ))}{" "}
              </>
            ) : null}
          </>
        )}
        {showMenuPart[3] && (
          <ParamsForm currentParams={currentParams} alter={changeParams} />
        )}
        {showMenuPart[4] && (
          <div className="statsForm">
            <form onSubmit={onStatsSubmit}>
              <h5>Оберіть місяць та рік</h5>
              <div className="statsInputs">
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={requestMonth}
                  onChange={onRequestMonthChange}
                />
                <input
                  type="number"
                  min="2021"
                  max="2050"
                  value={requestYear}
                  onChange={onRequestYearChange}
                />
              </div>
              <div className="sendLine">
                <button className="send btnEffect" type="submit">
                  Показати
                </button>
              </div>
            </form>
            <StatsTable
              members={statsDoctors}
              currentMonth={requestMonth}
              currentYear={requestYear}
            />
          </div>
        )}
      </div>
    </>
  );
};
