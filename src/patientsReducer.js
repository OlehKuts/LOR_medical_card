// import uuid from "uuid/v4";
import { v4 as uuidv4 } from 'uuid';
import { complaintsCreator } from "./functions/complaintsCreator";
import { anamnesisMorbiCreator } from "./functions/anamnesisMorbiCreator";
import { anamnesisVitaeCreator } from "./functions/anamnesisVitaeCreator";
import { statusPraesensCreator } from "./functions/statusPraesensCreator";
import {
  additionStatusCreator,
  shortStatusCreator
} from "./functions/additionStatusCreator";
import { diagnosisCreator } from "./functions/diagnosisCreator";
import { treatmentCreator } from "./functions/treatmentCreator";
import { operationNameCreator } from "./functions/operationNameCreator";
import { operationContentCreator } from "./functions/operationContentCreator";
import { lastTimeChecker } from "./functions/lastTimeChecker";
import { recommendationsCreator } from "./functions/recommendationsCreator";
import { colorIndexCounter } from "./functions/colorIndexCounter";
import { monoCounter } from "./functions/monoCounter";
import { diaryListCreator } from "./functions/diaryListCreator";
import { respiratoryRateCounter } from "./functions/respiratoryRateCounter";
import { heartRateCounter } from "./functions/heartRateCounter";
import { someDayCreator } from "./functions/someDayCreator";
import { lastDayCreator } from "./functions/lastDayCreator";
import { plannedChecker } from "./functions/plannedChecker";
import { patientEditor } from "./functions/patientEditor";
import {
  rhinoscopyCreator,
  noseCreator,
  laryngoscopyCreator,
  oropharyngoscopyCreator,
  otoscopyCreator
} from "./functions/statusLocalisCreators";
import { minutesToHoursConverter } from "./minutesConverter";
import { patientTemplate } from "./templates";
import { initialExaminations } from './database';

export const PATIENTS_ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
  DISCHARGEADD: "dischargeadd",
  EXTRACTADD: "extractadd",
  OPERATIONADD: "operationadd",
  EDIT: "edit",
  EDITDAY: "editday",
  IMPORT: "import"
};

export const initialState = () => {
  const patientsFromStorage = localStorage.getItem("patients_lor");
  const parsedPatients = JSON.parse(patientsFromStorage);
  return parsedPatients || [patientTemplate]; //or patientTempate (object which have been removed and can find in Medical Card)
};

export const patientsReducer = (patients, action) => {
  const { payload, type, disease,startDay, startMonth, startYear, cardNumber, doctor,
    start1, start2, pregnancy, childbirth, birthWeight, condition, weight, age, drugName1,
    drugName2, drugName3, drugName4, drugName5, appointment, appointment2, appointment3,
    protocolNumber, operationDate, operationTime, duration, surgeon, assistant, anesthetist,
    woundArea, woundSide, injuryDate, injuryTime, injuryReason, woundType, woundLength,
    woundWidth, woundDepth, woundForm, woundLedges, woundBleeding, woundAliens, sutureType,
    sutureMaterial, sutureSize, operationFree, neoplasmType, neoplasmArea, neoplasmSide, growthRate,
    neoplasmSurface, neoplasmMovability, neoplasmPoignancy, neoplasmConsistance, neoplasmDiameter,
    neoplasmColor, neoplasmBorders, neoplasmAboveSurface, neoplasmSurfaceAlter, neoplasmForm,
    paratonsilarAbscessSide, anestesiaType, abscessType, abscessArea, abscessSide,
    abscessReason, coblation, acuteOtitisSide, acuteOtitisType, noseFractureSide, tampon,
    mastoiditisSide, isOtitisComplication, mastoiditisOperationType, sinusitisSide,
    sinusitisType, sinusitisVariety, sinusitisCT, septumCurvatureSide, otitisTypeOperation,
    hearingLossType,hearingLossSide, hearingLossDegree, spokenLeft, spokenRight, whisperLeft,
    whisperRight, _id, lastDay, lastMonth, lastYear, hb, er, leu, pal, segm, eoz, limf, rse,
    uColor, uOpacity, uWeight, uPh, uProtein, uLeu, uEp1, uEp2, uOther, glucose, enterobioz,
    dung, bloodGroup, rezusFactor, wasViolation, analyseHiddenFields, finalDiagnosis, birthDate,
    residence, editType, editedValue, patientId, day
   } = action;
  switch (type) {
    case PATIENTS_ACTIONS.IMPORT:
      return payload.importedPatients;
    case PATIENTS_ACTIONS.ADD:
      return [
        {
          _id: uuidv4(),
          usedNewDiary: true,
          disease,
          reviewDate: `${startDay}.${startMonth}.${startYear}`,
          cardNumber,
          name: action.name,
          doctor,
          start1,
          start2,
          pregnancy: pregnancy,     
          childbirth,
          birthWeight,
          condition,
          weight,
          age,
          examinations: initialExaminations,
          planned: plannedChecker(disease),
          drugs: [
            treatmentCreator(drugName1, age, weight),
            treatmentCreator(drugName2, age, weight),
            treatmentCreator(drugName3, age, weight),
            treatmentCreator(drugName4, age, weight),
            treatmentCreator(drugName5, age, weight),
            appointment,
            appointment2,
            appointment3
          ],
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
          duration: minutesToHoursConverter(duration),
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
          startDay,
          startMonth,
          startYear,
          operationDataSend: false,
          operationFree,
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
          neoplasmForm: neoplasmForm,
          paratonsilarAbscessSide: paratonsilarAbscessSide,
          epicrisisDataSend: false,
          extractDataSend: false,
          anestesiaType,
           abscessType,
           abscessArea,
           abscessSide,
          abscessReason,
           coblation,
          acuteOtitisSide,
          acuteOtitisType,
          noseFractureSide,
          tampon,
          mastoiditisSide,
          isOtitisComplication,
          mastoiditisOperationType,
          sinusitisSide,
          sinusitisType,
          sinusitisVariety,
          sinusitisCT,
          septumCurvatureSide,
          otitisTypeOperation,
          hearingLossType,
          hearingLossSide,
          hearingLossDegree,
          spokenRight,
          spokenLeft,
          whisperRight,
          whisperLeft,
          complaintsContent: complaintsCreator(
            disease,
            woundArea,
            woundSide,
            abscessType,
            abscessArea,
            abscessSide,
            neoplasmPoignancy,
            neoplasmArea,
            neoplasmSide,
            sinusitisType,
            sinusitisSide,
            paratonsilarAbscessSide,
            hearingLossSide,
            age
          ),
          anamnesisMorbiContent: anamnesisMorbiCreator(
            disease,
            start1,
            start2,
            injuryDate,
            injuryTime,
            injuryReason,
            abscessType,
            abscessReason,
            growthRate,
            sinusitisType,
            sinusitisVariety
          ),
          anamnesisVitaeContent: anamnesisVitaeCreator(
            pregnancy,
            childbirth,
            birthWeight
          ),
          statusPraesensContent: statusPraesensCreator(
            condition,
            age
          ),
          nose: noseCreator(
            disease,
            noseFractureSide,
            sinusitisType
          ),
          rhinoscopy: rhinoscopyCreator(
            disease,
            noseFractureSide,
            septumCurvatureSide,
            sinusitisType,
            sinusitisSide,
            sinusitisVariety
          ),
          oropharyngoscopy: oropharyngoscopyCreator(
            disease,
            paratonsilarAbscessSide
          ),
          laryngoscopy: laryngoscopyCreator(disease),
          otoscopy: otoscopyCreator(
            disease,
            acuteOtitisSide,
            mastoiditisSide,
            acuteOtitisType
          ),

          shortStatusContent: shortStatusCreator(
            disease,
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
          ),
          additionStatus: additionStatusCreator(
            disease,
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
          ),
          diagnosis: diagnosisCreator(
            disease,
            woundType,
            woundArea,
            woundSide,
            abscessType,
            abscessArea,
            abscessSide,
            abscessReason,
            neoplasmType,
            neoplasmArea,
            neoplasmSide,
            acuteOtitisSide,
            mastoiditisSide,
            isOtitisComplication,
            sinusitisType,
            sinusitisSide,
            sinusitisVariety,
            acuteOtitisType,
            paratonsilarAbscessSide,
            hearingLossType,
            hearingLossSide,
            hearingLossDegree
          ),
          finalDiagnosis: diagnosisCreator(
            disease,
            woundType,
            woundArea,
            woundSide,
            abscessType,
            abscessArea,
            abscessSide,
            abscessReason,
            neoplasmType,
            neoplasmArea,
            neoplasmSide,
            acuteOtitisSide,
            mastoiditisSide,
            isOtitisComplication,
            sinusitisType,
            sinusitisSide,
            sinusitisVariety,
            acuteOtitisType,
            paratonsilarAbscessSide,
            hearingLossType,
            hearingLossSide,
            hearingLossDegree
          ),
          operationName: operationNameCreator(
            disease,
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
            mastoiditisOperationType,
            acuteOtitisType,
            paratonsilarAbscessSide
          ),
          operationContent: operationContentCreator(
            disease,
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
            mastoiditisOperationType,
            paratonsilarAbscessSide
          ),
          heartRate: heartRateCounter(age),
          respiratoryRate: respiratoryRateCounter(age),
          lastTime: lastTimeChecker(operationTime),
          someDayContent: someDayCreator(
            disease,
            abscessArea,
            abscessSide,
            acuteOtitisSide,
            mastoiditisSide,
            mastoiditisOperationType,
            sinusitisType,
            sinusitisSide,
            acuteOtitisType,
            sinusitisVariety,
            age
          ),
          lastDayContent: lastDayCreator(
            disease,
            mastoiditisSide,
            mastoiditisOperationType,
            age
          ),
          diaryList: [
            {
              date: `${startDay}.${startMonth}.${startYear}`,
              workDay: true,
              id: Math.random(),
              generalStatus: "Загальний стан дитини близький до задовільного.",
              localStatus: "Обличчя симетричне",
            },]
        },
        ...patients
      ];
    case PATIENTS_ACTIONS.REMOVE:
      return patients.filter((patient) => _id !== patient._id);
    case PATIENTS_ACTIONS.DISCHARGEADD:
      return patients.map((patient) =>
        patient._id === _id
          ? {
              ...patient,
              recommendations: recommendationsCreator(patient.disease),
              dischargeDate: `${lastDay}.${lastMonth}.${lastYear}`,
              diaryList: diaryListCreator(
                patient.startDay,
                patient.startMonth,
                patient.startYear,
                lastDay,
                lastMonth,
                lastYear,
                patient
              ),
              hb,
              er,
              colorIndex: colorIndexCounter(hb, er),
              leu,
              pal,
              segm,
              eoz,
              limf,
              mono: monoCounter(
                pal,
                segm,
                eoz,
                limf
              ),
              rse,
              bloodTest: [
                hb,
                er,
                colorIndexCounter(hb, er),
                leu,
                pal,
                segm,
                eoz,
                limf,
                monoCounter(pal, segm, eoz, limf),
                rse
              ],
              uColor,
              uOpacity,
              uWeight,
              uPh,
              uProtein,
              uLeu,
              uEp1,
              uEp2,
              urineTest: [
                uColor,
                uOpacity,
                uWeight,
                uPh,
                uProtein,
                uLeu,
                uEp1,
                uEp2,
                uOther
              ],
              glucose: `${glucose} ммоль/л`,
              enterobioz,
              dung,
              bloodGroup,
              rezusFactor,
              wasViolation,
              analyseHiddenFields,
              epicrisisDataSend: true,
              finalDiagnosis,
              anestesiaTypeModified: `${patient.anestesiaType[0].toLowerCase()}${patient.anestesiaType.slice(
                1,
                patient.anestesiaType.length - 1
              )}им`
            }
          : patient
      );
    case PATIENTS_ACTIONS.EXTRACTADD:
      return patients.map((patient) =>
        patient._id === _id
          ? {
              ...patient,
              birthDate,
              residence,
              extractDataSend: true,
              anestesiaTypeModified: `${patient.anestesiaType[0].toLowerCase()}${patient.anestesiaType.slice(
                1,
                patient.anestesiaType.length - 1
              )}им`
            }
          : patient
      );
    case PATIENTS_ACTIONS.OPERATIONADD:
      return patients.map((patient) =>
        patient._id === _id
          ? {
              ...patient,
               protocolNumber,
               anestesiaType,
               operationDate,
               operationTime,
              operationContent: operationContentCreator(
                patient.disease,
                sutureType,
                sutureMaterial,
                sutureSize,
                anestesiaType,
                patient.abscessType,
                patient.abscessArea,
                patient.abscessSide,
                patient.abscessReason,
                patient.coblation,
                patient.acuteOtitisSide,
                patient.tampon,
                patient.septumCurvatureSide,
                patient.otitisTypeOperation,
                patient.mastoiditisSide,
                patient.mastoiditisOperationType,
                patient.paratonsilarAbscessSide
              ),
              duration: minutesToHoursConverter(duration),
              surgeon,
              assistant,
              anesthetist,
              lastTime: lastTimeChecker(operationTime),
              operationDataSend: true,
              finalDiagnosis
            }
          : patient
      );
    case PATIENTS_ACTIONS.EDIT:
      return patients.map((patient) =>
        patient._id === _id
          ? patientEditor(editType, patient, editedValue)
          : patient
      );
      case PATIENTS_ACTIONS.EDITDAY:
        return patients.map((patient) =>
          patient._id === patientId
            ? {
                ...patient,
                diaryList: patient.diaryList.map((item) => {
                  if (Number(day.id) === Number(item.id)) {
                    return day;
                  } else {
                    return item;
                  }
                }),
              }
            : patient
        );
    default:
      throw new Error();
  }
};
