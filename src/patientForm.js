import React, { useMemo, useState } from "react";
import T from "prop-types";
import "./styles.css";
import { numArrayCreator } from "./functions/numArrayCreator";
import { progressChecker } from "./utils/utils";
import {
  diseaseList,
  start2List,
  conditionList,
  drugName1List,
  drugName2List,
  drugName3List,
  drugName4List,
  drugName5List,
  areaList,
  sideList,
  offsetList,
  threeSideList,
  injuryReasonList,
  woundSurfaceList,
  woundTypeList,
  woundFormList,
  woundLedgesList,
  woundBleedingList,
  woundAliensList,
  sutureTypeList,
  sutureMaterialList,
  sutureSizeList,
  abscessAreaList,
  abscessTypeList,
  abscessReasonList,
  neoplasmTypeList,
  growthRateList,
  neoplasmFormList,
  neoplasmBorderList,
  neoplasmMovabilityList,
  neoplasmPoignancyList,
  neoplasmConsistanceList,
  neoplasmSurfaceList,
  neoplasmColorList,
  otitisTypeOperationList,
  mastoiditisOperationTypeList,
  sinusitisTypeList,
  sinusitisVarietyList,
  acuteOtitisTypeList,
  hearingLossTypeList,
  hearingLossDegreeList,
  threeSideAnotherList
} from "./database";

export const PatientForm = ({ onAdd, params }) => {
  const [showForm, setShowForm] = useState(false);
  const [showAddPatients, setShowAddPatients] = useState(true);
  const [showSkinWoundLines, setShowSkinWoundLines] = useState(false);
  const [suturingLine, setSuturingLine] = useState(false);
  const [showAbscessLines, setShowAbscessLines] = useState(false);
  const [showNeoplasmLines, setShowNeoplasmLines] = useState(false);
  const [urgentDisease, setUrgentDisease] = useState(true);
  const [complaintsDuration, setComplaintsDuration] = useState(true);
  const [showAdditionAppointment, setShowAdditionAppointment] = useState(false);
  const [showAdenoidisLine, setShowAdenoidisLine] = useState(false);
  const [showAcuteOtitisLines, setShowAcuteOtitisLines] = useState(false);
  const [showMastoiditisLines, setShowMastoiditisLines] = useState(false);
  const [showHearingLossLines, setShowHearingLossLines] = useState(false);

  const [
    showParatonsilarAbscessLines,
    setShowParatonsilarAbscessLines
  ] = useState(false);
  const [showSinusitisLines, setShowSinusitisLines] = useState(false);
  const [showNoseFractureLine, setShowNoseFractureLine] = useState(false);
  const [septumCurvatureLine, setSeptumCurvatureLine] = useState(false);
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
    { name: "відсутній", value: "-" }
  ].concat(doctors.slice(1));

  const onCancel = () => {
    setShowForm(false);
    setShowAddPatients(true);
    setDisease(diseaseList[0].value);
    setShowSkinWoundLines(false);
    setSuturingLine(false);
    setShowAbscessLines(false);
    setUrgentDisease(true);
  };
  const onShowForm = () => {
    if (disease === "") return;
    setShowForm(true);
    if (
      disease === "adenoids" ||
      disease === "tonsilitis" ||
      disease === "neoplasm" ||
      disease === "septumCurvature"
    ) {
      setComplaintsDuration(false);
      setUrgentDisease(false);
    }
    if (disease === "adenoids") {
      setShowAdenoidisLine(true);
    }
    if (disease === "neoplasm") {
      setShowNeoplasmLines(true);
    }
    if (disease === "septumCurvature") {
      setSeptumCurvatureLine(true);
    }
    if (disease === "noseFracture") {
      setShowNoseFractureLine(true);
    }

    if (disease === "skinWound") {
      setShowSkinWoundLines(true);
      setSuturingLine(true);
    }

    if (disease === "abscess") {
      setShowAbscessLines(true);
    }
    if (disease === "acuteOtitis") {
      setShowAcuteOtitisLines(true);
    }
    if (disease === "hearingLoss") {
      setShowHearingLossLines(true);
    }
    if (disease === "mastoiditis") {
      setShowMastoiditisLines(true);
    }
    if (disease === "paratonsilarAbscess") {
      setShowParatonsilarAbscessLines(true);
    }
    if (disease === "sinusitis") {
      setShowSinusitisLines(true);
    }
    setShowAddPatients(false);
  };
  const initDate = new Date();
  const date = `${initDate.getDate()}.${
    initDate.getMonth() + 1
  }.${initDate.getFullYear()}`;
  const [startDay, setStartDay] = useState(Number(initDate.getDate()));
  const [startMonth, setStartMonth] = useState(1 + Number(initDate.getMonth()));
  const [startYear, setStartYear] = useState(Number(initDate.getFullYear()));
  const [disease, setDisease] = useState(diseaseList[0].value);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState(null);
  const [doctor, setDoctor] = useState(doctors[0].value);
  const [start1, setStart1] = useState(1);
  const [start2, setStart2] = useState(start2List[0]);
  const pregnancyList = numArrayCreator(1, 8);
  const [pregnancy, setPregnancy] = useState(pregnancyList[0]);
  const childbirthList = numArrayCreator(1, 8);
  const [childbirth, setChildbirth] = useState(childbirthList[0]);
  const [birthWeight, setBirthWeight] = useState("3600");
  const [condition, setCondition] = useState(conditionList[1]);
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState(null);
  const [drugName1, setDrugName1] = useState(drugName1List[0].value);
  const [drugName2, setDrugName2] = useState(drugName2List[0].value);
  const [drugName3, setDrugName3] = useState(drugName3List[0].value);
  const [drugName4, setDrugName4] = useState(drugName4List[0].value);
  const [drugName5, setDrugName5] = useState(drugName5List[0].value);
  const [appointment, setAppointment] = useState("");
  const [appointment2, setAppointment2] = useState("");
  const [appointment3, setAppointment3] = useState("");
  const [protocolNumber, setProtocolNumber] = useState(null);
  const [operationDate, setOperationDate] = useState(date);
  const [operationTime, setOperationTime] = useState("");
  const [duration, setDuration] = useState(null);
  const [surgeon, setSurgeon] = useState(surgeons[0].value);
  const [assistant, setAssistant] = useState(assistants[0].value);
  const [anesthetist, setAnesthetist] = useState(anesthetistList[0].value);
  const [acuteOtitisType, setAcuteOtitisType] = useState(
    acuteOtitisTypeList[0].value
  );
  const [acuteOtitisSide, setAcuteOtitisSide] = useState("");

  const [hearingLossType, setHearingLossType] = useState(
    hearingLossTypeList[0].value
  );
  const [hearingLossSide, setHearingLossSide] = useState("");
  const [hearingLossDegree, setHearingLossDegree] = useState(
    hearingLossDegreeList[0].value
  );
  const [spokenLeft, setSpokenLeft] = useState(">6");
  const [spokenRight, setSpokenRight] = useState(">6");
  const [whisperLeft, setWhisperLeft] = useState("6");
  const [whisperRight, setWhisperRight] = useState("6");

  const [mastoiditisSide, setMastoiditisSide] = useState("");
  const [isOtitisComplication, setIsOtitisComplication] = useState(false);
  const [mastoiditisOperationType, setMastoiditisOperationType] = useState(
    mastoiditisOperationTypeList[0].value
  );
  const [paratonsilarAbscessSide, setParatonsilarAbscessSide] = useState("");
  const [sinusitisType, setSinusitisType] = useState("");
  const [sinusitisVariety, setSinusitisVariety] = useState(
    sinusitisVarietyList[0].value
  );
  const [sinusitisSide, setSinusitisSide] = useState("");
  const [woundArea, setWoundArea] = useState(areaList[0].value);
  const [woundSide, setWoundSide] = useState(sideList[0].value);
  const [injuryDate, setInjuryDate] = useState(date);
  const [injuryTime, setInjuryTime] = useState("");
  const [injuryReason, setInjuryReason] = useState(injuryReasonList[0].value);
  const [woundSurface, setWoundSurface] = useState(woundSurfaceList[0].value);
  const [woundType, setWoundType] = useState(woundTypeList[0].value);
  const [woundLength, setWoundLength] = useState("");
  const [woundWidth, setWoundWidth] = useState("");
  const [woundDepth, setWoundDepth] = useState("");
  const [woundForm, setWoundForm] = useState(woundFormList[0].value);
  const [woundLedges, setWoundLedges] = useState(woundLedgesList[0].value);
  const [woundBleeding, setWoundBleeding] = useState(
    woundBleedingList[0].value
  );
  const [woundAliens, setWoundAliens] = useState(woundAliensList[0].value);
  const [sutureType, setSutureType] = useState(sutureTypeList[0].value);
  const [sutureMaterial, setSutureMaterial] = useState(
    sutureMaterialList[0].value
  );
  const [sutureSize, setSutureSize] = useState(sutureSizeList[0].value);
  const [anestesiaType, setAnestesiaType] = useState("Загальне");
  const onAnestesiaTypeChoise = (event) => {
    setAnestesiaType(event.target.value);
  };
  const [abscessType, setAbscessType] = useState(abscessTypeList[0].value);
  const [abscessArea, setAbscessArea] = useState(abscessAreaList[0].value);
  const [abscessSide, setAbscessSide] = useState(sideList[0].value);
  const [abscessReason, setAbscessReason] = useState(
    abscessReasonList[0].value
  );

  const [neoplasmType, setNeoplasmType] = useState(neoplasmTypeList[0].value);
  const [growthRate, setGrowthRate] = useState(growthRateList[0].value);
  const [neoplasmDiameter, setNeoplasmDiameter] = useState(0.1);
  const [neoplasmForm, setNeoplasmForm] = useState(neoplasmFormList[0].value);
  const [neoplasmBorders, setNeoplasmBorders] = useState(
    neoplasmBorderList[0].value
  );
  const [neoplasmMovability, setNeoplasmMovability] = useState(
    neoplasmMovabilityList[0].value
  );
  const [neoplasmPoignancy, setNeoplasmPoignancy] = useState(
    neoplasmPoignancyList[0].value
  );
  const [neoplasmConsistance, setNeoplasmConsistance] = useState(
    neoplasmConsistanceList[0].value
  );
  const [neoplasmArea, setNeoplasmArea] = useState(areaList[0].value);
  const [neoplasmSide, setNeoplasmSide] = useState(sideList[0].value);
  const [neoplasmSurface, setNeoplasmSurface] = useState(
    neoplasmSurfaceList[0].value
  );
  const [neoplasmColor, setNeoplasmColor] = useState(
    neoplasmColorList[0].value
  );
  const [neoplasmAboveSurface, setNeoplasmAboveSurface] = useState(false);
  const [neoplasmSurfaceAlter, setNeoplasmSurfaceAlter] = useState(false);
  const [coblation, setCoblation] = useState(false);
  const onCoblationChoise = () => {
    setCoblation(!coblation);
  };
  const [tampon, setTampon] = useState(false);
  const onTamponChoise = () => {
    setTampon(!tampon);
  };
  const [noseFractureSide, setNoseFractureSide] = useState(sideList[0].value);
  const [septumCurvatureSide, setSeptumCurvatureSide] = useState(false);
  const onSeptumCurvatureSideChoise = () => {
    setSeptumCurvatureSide(!septumCurvatureSide);
  };
  const [otitisTypeOperation, setOtitisTypeOperation] = useState(
    otitisTypeOperationList[0].value
  );
  const [operationFree, setOperationFree] = useState(false);
  const onOperationFreeChange = () => {
    setOperationFree(!operationFree);
  };
  const [sinusitisCT, setSinusitisCT] = useState(false);
  //onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    if (age === null) {
      alert(`Не вказано вік пацієнта`);
      return;
    }
    if (doctor === "") {
      alert(`Не вказано особистого лікаря`);
      return;
    }
    if (cardNumber === null) {
      alert(`Не введено номер медичної карти`);
      return;
    }
    if (name === "") {
      alert(`Не введено ім'я пацієнта`);
      return;
    }
    if (weight === null) {
      alert(`Введіть вагу пацієнта`);
      return;
    }
    if (disease === "skinWound" && woundArea === "") {
      alert(`Вкажіть ділянку рани`);
      return;
    }
    if (disease === "skinWound" && woundType === "") {
      alert(`Вкажіть вид рани`);
      return;
    }
    if (disease === "paratonsilarAbscess" && paratonsilarAbscessSide === "") {
      alert(`Вкажіть сторону паратонзилярного абсцесу!`);
      return;
    }
    if (
      disease !== "neoplasm" &&
      disease !== "adenoids" &&
      disease !== "tonsilitis" &&
      disease !== "septumCurvature" &&
      !operationFree
    ) {
      if (!duration) {
        alert(`Не вказано тривалість операції!`);
        return;
      }
      if (surgeon === "") {
        alert(`Не вказано хірурга!`);
        return;
      }
      if (assistant === "") {
        alert(`Не вказано асистента!`);
        return;
      }
      if (anesthetist === "") {
        alert(`Не вказано анестезіолога!`);
        return;
      }
      if (operationTime === "") {
        alert(`Не вказано час початку операції!`);
        return;
      }
    }

    if (disease === "acuteOtitis" && acuteOtitisSide === "") {
      alert(`Не вказано сторону отиту!`);
      return;
    }
    if (
      disease === "hearingLoss" &&
      (hearingLossSide === "" ||
        hearingLossType === "" ||
        hearingLossDegree === "")
    ) {
      alert(`Не вказано усіх параметрів приглухуватості!`);
      return;
    }
    if (disease === "hearingLoss" && !operationFree) {
      alert(
        `При приглухуватості не показано проведення операції, поставте відмітку на прапорці "Без операції"`
      );
      return;
    }
    if (disease === "mastoiditis" && mastoiditisSide === "") {
      alert(`Не вказано сторону мастоїдиту!`);
      return;
    }
    if (disease === "sinusitis" && sinusitisSide === "") {
      alert(`Не вказано сторону синуситу!`);
      return;
    }
    if (disease === "sinusitis" && sinusitisType === "") {
      alert(`Не вказано тип синуситу!`);
      return;
    }
    if (disease === "noseFracture" && noseFractureSide === "") {
      alert(`Вкажіть сторону зміщення`);
      return;
    }
    onAdd(
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
    );
    setDisease(diseaseList[0].value);
    setStartDay(initDate.getDate());
    setStartMonth(initDate.getMonth());
    setStartYear(initDate.getFullYear());
    setName("");
    setCardNumber("");
    setDoctor(doctors[0].value);
    setStart1(1);
    setStart2(start2List[0]);
    setPregnancy(pregnancyList[0]);
    setChildbirth(childbirthList[0]);
    setBirthWeight("3600");
    setCondition(conditionList[1]);
    setWeight("");
    setAge(null);
    setDrugName1(drugName1List[0].value);
    setDrugName2(drugName2List[0].value);
    setDrugName3(drugName3List[0].value);
    setDrugName4(drugName4List[0].value);
    setDrugName5(drugName5List[0].value);
    setAppointment("");
    setProtocolNumber("");
    setOperationDate(date);
    setOperationTime("");
    setDuration("");
    setSurgeon(surgeons[0].value);
    setAssistant(assistants[0].value);
    setAnesthetist(anesthetistList[0].value);
    setWoundArea(areaList[0].value);
    setWoundSide(sideList[0].value);
    setInjuryDate(date);
    setInjuryTime("");
    setInjuryReason(injuryReasonList[0].value);
    setWoundType(woundTypeList[0].value);
    setWoundLength("");
    setWoundWidth("");
    setWoundDepth("");
    setWoundForm(woundFormList[0].value);
    setWoundLedges(woundLedgesList[0].value);
    setWoundBleeding(woundBleedingList[0].value);
    setWoundAliens(woundAliensList[0].value);
    setSutureType(sutureTypeList[0].value);
    setSutureMaterial(sutureMaterialList[0].value);
    setSutureSize(sutureSizeList[0].value);
    setShowAddPatients(true);
    setShowForm(false);
    setShowSkinWoundLines(false);
    setShowAbscessLines(false);
    setSuturingLine(false);
    setShowHearingLossLines(false);
    setUrgentDisease(true);
    setAnestesiaType("Загальне");
    setWoundSurface(woundSurfaceList[0].value);
    setAbscessType(abscessTypeList[0].value);
    setAbscessArea(abscessAreaList[0].value);
    setAbscessSide(sideList[0].value);
    setAbscessReason(abscessReasonList[0].value);
    setNeoplasmType(neoplasmTypeList[0].value);
    setNeoplasmArea(areaList[0].value);
    setNeoplasmSide(sideList[0].value);
    setGrowthRate(growthRateList[0].value);
    setNeoplasmSurface(neoplasmSurfaceList[0].value);
    setNeoplasmMovability(neoplasmMovabilityList[0].value);
    setNeoplasmPoignancy(neoplasmPoignancyList[0].value);
    setNeoplasmConsistance(neoplasmConsistanceList[0].value);
    setNeoplasmDiameter(0.1);
    setNeoplasmColor(neoplasmColorList[0].value);
    setNeoplasmBorders(neoplasmBorderList[0].value);
    setNeoplasmAboveSurface(false);
    setNeoplasmSurfaceAlter(false);
  };

  const progressValue = useMemo(
    () =>
      progressChecker(
        doctor,
        cardNumber,
        name,
        weight,
        age,
        duration,
        surgeon,
        assistant,
        anesthetist,
        operationTime
      ),
    [
      doctor,
      cardNumber,
      name,
      weight,
      age,
      duration,
      surgeon,
      assistant,
      anesthetist,
      operationTime
    ]
  );

  return (
    <div className="form">
      {showAddPatients && (
        <div className="addPatient">
          <select value={disease} onChange={(e) => setDisease(e.target.value)}>
            {diseaseList.map((item, idx) => (
              <option key={idx} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <button onClick={onShowForm}>Додати пацієнта</button>
        </div>
      )}
  
      <form onSubmit={onSubmit}>
        {showForm && (
          <div className="mainForm">
            <div className="flexBetween">
              <div className="label" id="firstLine">
                Дата госпіталізації
              </div>{" "}
              <input
                id="numberInput1"
                type="number"
                min="1"
                max="31"
                value={startDay}
                onChange={(e) => setStartDay(e.target.value)}
              />
              <input
                id="numberInput2"
                type="number"
                min="1"
                max="12"
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
              />
              <input
                id="numberInput3"
                type="number"
                min="2020"
                max="9999"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
              />
              <select
                className="mandatoryField"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
              >
                {doctors.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flexBetween">
              {" "}
              <input
                className="middleInputs mandatoryField"
                type="number"
                min="1"
                max="20000"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="номер карти..."
              />{" "}
              <input
                className="extraLongInputs mandatoryField"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ПІБ пацієнта..."
              />
              <input
                type="number"
                min="0"
                max="150"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Вік..."
                className="mandatoryField"
              />
              <input
                type="number"
                min="1"
                max="200"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Вага..."
                className="mandatoryField"
              />{" "}
            </div>
            {complaintsDuration && (
              <div className="flexBetween">
                {" "}
                <div className="label">Тривалість скарг</div>
                <input
                  id="numberInput5"
                  type="number"
                  min="1"
                  max="11"
                  value={start1}
                  onChange={(e) => setStart1(e.target.value)}
                  placeholder="Вік..."
                />
                <select
                  value={start2}
                  onChange={(e) => setStart2(e.target.value)}
                >
                  {start2List.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <div className="label">Загальний стан</div>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                >
                  {conditionList.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="flexBetween">
              {" "}
              <div className="label">Вагітність</div>
              <select
                value={pregnancy}
                onChange={(e) => setPregnancy(e.target.value)}
              >
                {pregnancyList.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <div className="label">Пологи</div>
              <select
                value={childbirth}
                onChange={(e) => setChildbirth(e.target.value)}
              >
                {childbirthList.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <input
                value={birthWeight}
                onChange={(e) => setBirthWeight(e.target.value)}
                placeholder="Вага при народженні..."
              />
            </div>

            {(showSkinWoundLines || showNoseFractureLine) && (
              <div className="flexBetween">
                {" "}
                <div className="label">Дата травми:</div>
                <input
                  className="shortInputs"
                  value={injuryDate}
                  onChange={(e) => setInjuryDate(e.target.value)}
                  placeholder="Дата травми..."
                />
                <input
                  className="shortInputs"
                  value={injuryTime}
                  onChange={(e) => setInjuryTime(e.target.value)}
                  placeholder="Час травми..."
                />{" "}
                <select
                  value={injuryReason}
                  onChange={(e) => setInjuryReason(e.target.value)}
                >
                  {injuryReasonList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <input
                  className="middleInputs"
                  value={injuryReason}
                  onChange={(e) => setInjuryReason(e.target.value)}
                  placeholder="Причина травми..."
                />
              </div>
            )}
            {showSkinWoundLines && (
              <div className="flexBetween skinWound">
                <select
                  className="mandatoryField"
                  value={woundSurface}
                  onChange={(e) => setWoundSurface(e.target.value)}
                >
                  {woundSurfaceList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>{" "}
                <select
                  className="mandatoryField"
                  value={woundArea}
                  onChange={(e) => setWoundArea(e.target.value)}
                >
                  {areaList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  className="mandatoryField"
                  value={woundSide}
                  onChange={(e) => setWoundSide(e.target.value)}
                >
                  {sideList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  className="mandatoryField"
                  value={woundType}
                  onChange={(e) => setWoundType(e.target.value)}
                >
                  {woundTypeList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <input
                  className="superShortInputs smallInputs mandatoryField"
                  value={woundLength}
                  onChange={(e) => setWoundLength(e.target.value)}
                  placeholder="довжина..."
                />
                <input
                  className="superShortInputs smallInputs mandatoryField"
                  value={woundWidth}
                  onChange={(e) => setWoundWidth(e.target.value)}
                  placeholder="ширина..."
                />
                <input
                  className="superShortInputs smallInputs mandatoryField"
                  value={woundDepth}
                  onChange={(e) => setWoundWidth(e.target.value)}
                  placeholder="глибина..."
                />
              </div>
            )}

            {showSkinWoundLines && (
              <div className="flexBetween">
                {" "}
                <select
                  className="mandatoryField"
                  value={woundForm}
                  onChange={(e) => setWoundForm(e.target.value)}
                >
                  {woundFormList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  className="mandatoryField"
                  value={woundLedges}
                  onChange={(e) => setWoundLedges(e.target.value)}
                >
                  {woundLedgesList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  className="mandatoryField"
                  value={woundBleeding}
                  onChange={(e) => setWoundBleeding(e.target.value)}
                >
                  {woundBleedingList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  className="mandatoryField"
                  value={woundAliens}
                  onChange={(e) => setWoundAliens(e.target.value)}
                >
                  {woundAliensList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {showAbscessLines && (
              <div className="flexBetween">
                {" "}
                <select
                  value={abscessType}
                  onChange={(e) => setAbscessType(e.target.value)}
                >
                  {abscessTypeList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={abscessArea}
                  onChange={(e) => setAbscessArea(e.target.value)}
                >
                  {abscessAreaList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={abscessSide}
                  onChange={(e) => setAbscessSide(e.target.value)}
                >
                  {sideList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={abscessReason}
                  onChange={(e) => setAbscessReason(e.target.value)}
                >
                  {abscessReasonList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {showAcuteOtitisLines && (
              <div className="flexBetween">
                {" "}
                <select
                  value={acuteOtitisType}
                  onChange={(e) => setAcuteOtitisType(e.target.value)}
                  className="mandatoryField"
                >
                  {acuteOtitisTypeList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={acuteOtitisSide}
                  onChange={(e) => setAcuteOtitisSide(e.target.value)}
                  className="mandatoryField"
                >
                  {threeSideList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={otitisTypeOperation}
                  onChange={(e) => setOtitisTypeOperation(e.target.value)}
                  className="mandatoryField"
                >
                  {otitisTypeOperationList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {showHearingLossLines && (
              <>
                <div className="flexBetween">
                  {" "}
                  <select
                    value={hearingLossType}
                    onChange={(e) => setHearingLossType(e.target.value)}
                    className="mandatoryField"
                  >
                    {hearingLossTypeList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={hearingLossSide}
                    onChange={(e) => setHearingLossSide(e.target.value)}
                    className="mandatoryField"
                  >
                    {threeSideAnotherList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={hearingLossDegree}
                    onChange={(e) => setHearingLossDegree(e.target.value)}
                    className="mandatoryField"
                  >
                    {hearingLossDegreeList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexBetween">
                  <div className="label">РМ справа</div>
                  <input
                    className="shortInputs mandatoryField"
                    value={spokenRight}
                    placeholder="РМ справа"
                    onChange={(e) => setSpokenRight(e.target.value)}
                  />
                  <div className="label">ШМ справа</div>
                  <input
                    className="shortInputs mandatoryField"
                    value={whisperRight}
                    placeholder="ШМ справа"
                    onChange={(e) => setWhisperRight(e.target.value)}
                  />
                  <div className="label">РМ зліва</div>
                  <input
                    className="shortInputs mandatoryField"
                    value={spokenLeft}
                    placeholder="РМ зліва"
                    onChange={(e) => setSpokenLeft(e.target.value)}
                  />
                  <div className="label">ШМ зліва</div>
                  <input
                    className="shortInputs mandatoryField"
                    value={whisperLeft}
                    placeholder="ШМ зліва"
                    onChange={(e) => setWhisperLeft(e.target.value)}
                  />
                </div>
              </>
            )}

            {showMastoiditisLines && (
              <div className="flexBetween">
                {" "}
                <select
                  value={mastoiditisSide}
                  onChange={(e) => setMastoiditisSide(e.target.value)}
                  className="mandatoryField"
                >
                  {threeSideList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <div className="label">Як ускладнення отиту</div>
                <input
                  className="checkbox"
                  type="checkbox"
                  value={isOtitisComplication}
                  onChange={(e) => setIsOtitisComplication(e.target.value)}
                  checked={isOtitisComplication}
                />
                <div className="label">Тип операції</div>
                <select
                  value={mastoiditisOperationType}
                  onChange={(e) => setMastoiditisOperationType(e.target.value)}
                >
                  {mastoiditisOperationTypeList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {showParatonsilarAbscessLines && (
              <div className="flexBetween">
                {" "}
                <select
                  value={paratonsilarAbscessSide}
                  onChange={(e) => setParatonsilarAbscessSide(e.target.value)}
                  className="mandatoryField"
                >
                  {sideList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {showSinusitisLines && (
              <div className="flexBetween">
                {" "}
                <select
                  value={sinusitisType}
                  onChange={(e) => setSinusitisType(e.target.value)}
                  className="mandatoryField"
                >
                  {sinusitisTypeList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={sinusitisVariety}
                  onChange={(e) => setSinusitisVariety(e.target.value)}
                  className="mandatoryField"
                >
                  {sinusitisVarietyList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={sinusitisSide}
                  onChange={(e) => setSinusitisSide(e.target.value)}
                  className="mandatoryField"
                >
                  {threeSideList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <div className="label">КТ обстеження</div>
                <input
                  className="checkbox"
                  type="checkbox"
                  value={sinusitisCT}
                  onChange={() => setSinusitisCT(!sinusitisCT)}
                  checked={sinusitisCT}
                />
              </div>
            )}

            {showNeoplasmLines && (
              <>
                <div className="flexBetween">
                  <select
                    className="mandatoryField"
                    value={neoplasmType}
                    onChange={(e) => setNeoplasmType(e.target.value)}
                  >
                    {neoplasmTypeList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    className="mandatoryField"
                    value={neoplasmArea}
                    onChange={(e) => setNeoplasmArea(e.target.value)}
                  >
                    {areaList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    className="mandatoryField"
                    value={neoplasmSide}
                    onChange={(e) => setNeoplasmSide(e.target.value)}
                  >
                    {sideList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    className="mandatoryField"
                    value={neoplasmSurface}
                    onChange={(e) => setNeoplasmSurface(e.target.value)}
                  >
                    {neoplasmSurfaceList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    className="mandatoryField"
                    value={growthRate}
                    onChange={(e) => setGrowthRate(e.target.value)}
                  >
                    {growthRateList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexBetween">
                  <select
                    className="mandatoryField"
                    value={neoplasmMovability}
                    onChange={(e) => setNeoplasmMovability(e.target.value)}
                  >
                    {neoplasmMovabilityList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={neoplasmPoignancy}
                    onChange={(e) => setNeoplasmPoignancy(e.target.value)}
                    className="mandatoryField"
                  >
                    {neoplasmPoignancyList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    className="mandatoryField"
                    value={neoplasmConsistance}
                    onChange={(e) => setNeoplasmConsistance(e.target.value)}
                  >
                    {neoplasmConsistanceList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <input
                    value={neoplasmDiameter}
                    className="mandatoryField"
                    type="number"
                    step="0.1"
                    min="0.1"
                    max="15.0"
                    placeholder="діаметр"
                    onChange={(e) => setNeoplasmDiameter(e.target.value)}
                  />
                  <select
                    className="mandatoryField"
                    value={neoplasmColor}
                    onChange={(e) => setNeoplasmColor(e.target.value)}
                  >
                    {neoplasmColorList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexBetween">
                  <select
                    className="mandatoryField"
                    value={neoplasmForm}
                    onChange={(e) => setNeoplasmForm(e.target.value)}
                  >
                    {neoplasmFormList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={neoplasmBorders}
                    onChange={(e) => setNeoplasmBorders(e.target.value)}
                    className="mandatoryField"
                  >
                    {neoplasmBorderList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">Над поверхнею</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={neoplasmAboveSurface}
                    onChange={(e) => setNeoplasmAboveSurface(e.target.value)}
                    checked={neoplasmAboveSurface}
                  />
                  <div className="label">Поверхня над ним змінена</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={neoplasmSurfaceAlter}
                    onChange={(e) => setNeoplasmSurfaceAlter(e.target.value)}
                    checked={neoplasmSurfaceAlter}
                  />
                </div>
              </>
            )}

            <div className="flexBetween">
              {" "}
              <select
                value={drugName1}
                onChange={(e) => setDrugName1(e.target.value)}
              >
                {drugName1List.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select
                value={drugName2}
                onChange={(e) => setDrugName2(e.target.value)}
              >
                {drugName2List.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select
                value={drugName3}
                onChange={(e) => setDrugName3(e.target.value)}
              >
                {drugName3List.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select
                value={drugName4}
                onChange={(e) => setDrugName4(e.target.value)}
              >
                {drugName4List.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flexBetween">
              {" "}
              <select
                value={drugName5}
                onChange={(e) => setDrugName5(e.target.value)}
              >
                {drugName5List.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <input
                className="extraLongInputs smallInputs"
                value={appointment}
                onChange={(e) => setAppointment(e.target.value)}
                placeholder="Додаткові призначення..."
              />
              <div
                className="additionAppointments"
                onClick={() => setShowAdditionAppointment(true)}
              >
                +
              </div>
            </div>
            {showAdditionAppointment && (
              <div className="flexBetween">
                <input
                  className="extraLongInputs"
                  value={appointment2}
                  onChange={(e) => setAppointment2(e.target.value)}
                  placeholder="Дод. призначення..."
                />
                <input
                  className="extraLongInputs"
                  value={appointment3}
                  onChange={(e) => setAppointment3(e.target.value)}
                  placeholder="Дод. призначення..."
                />
              </div>
            )}
            {urgentDisease && (
              <>
                <div className="flexBetween">
                  {" "}
                  <input
                    className="middleInputs mandatoryField"
                    id="numberInput4"
                    type="number"
                    min="5"
                    max="300"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Тривалість"
                  />{" "}
                  <select
                    className="mandatoryField"
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
                    className="mandatoryField"
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
                    className="mandatoryField"
                    value={anesthetist}
                    onChange={(e) => setAnesthetist(e.target.value)}
                  >
                    {anesthetistList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexBetween">
                  {" "}
                  <input
                    className="middleInputs"
                    type="number"
                    min="1"
                    max="999"
                    value={protocolNumber}
                    onChange={(e) => setProtocolNumber(e.target.value)}
                    placeholder="№ протоколу"
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
                  <input
                    className="shortInputs mandatoryField"
                    value={operationDate}
                    onChange={(e) => setOperationDate(e.target.value)}
                    placeholder="Дата операції..."
                  />
                  <input
                    className="shortInputs mandatoryField"
                    value={operationTime}
                    onChange={(e) => setOperationTime(e.target.value)}
                    placeholder="Час операції"
                  />
                </div>

                {suturingLine && (
                  <div className="flexBetween">
                    {" "}
                    <select
                      className="mandatoryField"
                      value={sutureType}
                      onChange={(e) => setSutureType(e.target.value)}
                    >
                      {sutureTypeList.map((item, idx) => (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <select
                      className="mandatoryField"
                      value={sutureMaterial}
                      onChange={(e) => setSutureMaterial(e.target.value)}
                    >
                      {sutureMaterialList.map((item, idx) => (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <select
                      className="mandatoryField"
                      value={sutureSize}
                      onChange={(e) => setSutureSize(e.target.value)}
                    >
                      {sutureSizeList.map((item, idx) => (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </>
            )}

            {showAdenoidisLine && (
              <div className="flexi">
                <div className="label">Кобляційним методом</div>
                <input
                  className="checkbox"
                  type="checkbox"
                  value={coblation}
                  onChange={onCoblationChoise}
                  checked={coblation}
                />
              </div>
            )}
            {showNoseFractureLine && (
              <div className="flexi">
                <div className="label">Назальні тампони</div>
                <input
                  className="checkbox"
                  type="checkbox"
                  value={tampon}
                  onChange={onTamponChoise}
                  checked={tampon}
                />
                <select
                  className="mandatoryField"
                  value={noseFractureSide}
                  onChange={(e) => setNoseFractureSide(e.target.value)}
                >
                  {offsetList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {septumCurvatureLine && (
              <div className="flexi">
                <div className="label">Викривлена в праву сторону</div>
                <input
                  className="checkbox"
                  type="checkbox"
                  value={septumCurvatureSide}
                  onChange={onSeptumCurvatureSideChoise}
                  checked={septumCurvatureSide}
                />
              </div>
            )}
            <div className="flexi">
              <div className="label">Без операції</div>
              <input
                className="checkbox"
                type="checkbox"
                value={operationFree}
                onChange={onOperationFreeChange}
                checked={operationFree}
              />
            </div>
            {urgentDisease && (
              <div className="flexi">
                <progress value={progressValue} max="100"></progress>
              </div>
            )}
            <div className="sendLine">
              <input className="send" type="submit" value="Відправити" />
              <button onClick={onCancel}>Скасувати</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

PatientForm.propTypes = {
  onAdd: T.func.isRequired
};
