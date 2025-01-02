import React from "react";
import "./styles.css";
import { Block } from "./block";
import { BlockList } from "./blockList";
import { HearingPassport } from "./table";
import { initialExaminations, baseIndications } from "./database";
import { stringCapitalizer } from "./utils/utils";

export const Review = ({ params, current }) => {
  const {diagnosis, anestesiaType, disease, operationName,
    doctor, reviewDate, cardNumber, complaintsContent, anamnesisMorbiContent,
    anamnesisVitaeContent, nose, statusPraesensContent, rhinoscopy,
    oropharyngoscopy, laryngoscopy, otoscopy, additionStatus,
    spokenLeft, spokenRight, whisperLeft, whisperRight, operationDataSend,
    planned, operationFree, shortStatusContent, protocolNumber,
    operationDate, operationTime, operationContent, duration, surgeon,
    assistant, anesthetist, lastTime, finalDiagnosis, drugs, examinations
  } = current;
  const splittedExaminations = examinations ? examinations.split(",") : initialExaminations.split(",");
  const _anestesiaType =
    anestesiaType === "Місцеве"
      ? "Місцеве знеболення."
      : "Загальне знеболення.";
  const preIndications = [
    stringCapitalizer(diagnosis),
    stringCapitalizer(operationName),
    _anestesiaType
  ];
  const features =
    disease === `adenoids` || disease === `septumCurvature`
      ? `Особливості захворювання: порушене носове дихання.`
      : ``;
  preIndications.splice(1, 0, features);
  const finalIndications = preIndications.filter((i) => i !== ``);
  const indications = finalIndications.concat(baseIndications);
  const preDrugs = [
    "Режим палатний",
    "Стіл загальний",
    stringCapitalizer(operationName)
  ].concat(drugs);
  const filteredDrugs = preDrugs.filter((drug) => drug !== "");

  return (
    <div id="review">
      <div className="flexi headers">
        <Block
          header={`${params.mutualExamination}`}
          content=""
        />
      </div>
      <div className="flexi headers">
        <Block header="Дата:" content={reviewDate} />
        <Block header={`${params.doctorType}:`} content={doctor} />
      </div>
      <div className="flexi headers">
        <Block
          header={`${params.medicalCard} №:`}
          content={cardNumber}
        />
        <Block header={`${params.patientType}:`} content={current.name} />
      </div>
      <Block header="Скарги:" content={complaintsContent} />
      <Block
        header="Анамнез захворювання:"
        content={anamnesisMorbiContent}
      />
      <Block header="Анамнез життя:" content={anamnesisVitaeContent} />
      <Block
        header="Об'єктивний стан:"
        content={statusPraesensContent}
      />
      <Block header="Стан ЛОР-органів" content="" />
      <Block header="Ніс: " content={nose} />
      <Block header="Риноскопія: " content={rhinoscopy} />
      <Block header="Орофарингоскопія: " content={oropharyngoscopy} />
      <Block header="Ларингоскопія: " content={laryngoscopy} />
      <Block header="Отоскопія: " content={otoscopy} />
      <Block header="" content={additionStatus} />
      <Block header="Слуховий паспорт" content="" />
      <div className="headers" id="passport">
        <HearingPassport
          spokenLeft={spokenLeft}
          spokenRight={spokenRight}
          whisperLeft={whisperLeft}
          whisperRight={whisperRight}
        />
      </div>

      <div id="secondPage">
        {!operationDataSend && (
          <>
            <div id="diagnosis">
              <Block header="Діагноз:" content={diagnosis} />
            </div>
            <div className="flexBetween headers">
              <div className="examinationList">
          <BlockList header="План обстеження:" content={splittedExaminations} />
        </div>
              <div className="examinationList">
                <BlockList header="План лікування:" content={filteredDrugs} />
              </div>
            </div>
          </>
        )}
        {!operationFree && !operationDataSend && (
          <>
            <div className="flexi headers">
              <Block header="СПІЛЬНИЙ ОГЛЯД" content="" />
            </div>
            <div className="flexi headers">
              <Block
                header={`у складі: ${params.preOperationExamination}, лікар ${doctor}`}   
                 content=""
              />
            </div>
            <div className="flexi headers">
              <Block header="(ОБГРУНТУВАННЯ КЛІНІЧНОГО ДІАГНОЗУ)" content="" />
            </div>
            <Block
              header="Зважаючи на скарги: "
              content={`${complaintsContent.slice(0, -1)};`}
            />
            <Block
              header="дані анамнезу захворювання:"
              content={anamnesisMorbiContent}
            />
            <Block
              header="Дані об'єктивного обстеження: "
              content={shortStatusContent}
            />
            <Block header="Рекомендовано: " content={`оперативне втручання.`} />

            <div className="flexEnd headers">
              <div className="lastLine">
                {" "}
                <Block
                  header=""
                  content={`Лікар ________ ${doctor}`}
                />{" "}
              </div>
            </div>
            <div className="flexStart headers">
              <BlockList
                header="Показання до операції:"
                content={indications}
              />
            </div>
          </>
        )}
        {operationDataSend && <div className="emptyField"></div>}
        {!operationFree &&
          (!planned ||
            (planned && operationDataSend)) && (
            <>
              <div className="flexi headers" id="protocol">
                <Block
                  header="Протокол операції № "
                  content={protocolNumber}
                />
              </div>
              <div className="flexi headers">
                <Block header="Дата: " content={operationDate} />
                <Block header="Час: " content={operationTime} />
              </div>
              <div className="flexi headers">
                <Block
                  header={stringCapitalizer(operationName)}
                  content={""}
                />
              </div>
              <div className="flexi protocolContent headers">
                <Block header={""} content={operationContent} />
              </div>
              <div className="flexEnd headers">
                {" "}
                <Block
                  header="Тривалість:"
                  content={`${duration}.`}
                />{" "}
              </div>
              <div className="flexEnd headers">
                <Block header="Оперував:" content={surgeon} />
              </div>
              <div className="flexEnd headers">
                <Block header="Асистент:" content={assistant} />
              </div>
              <div className="flexEnd headers">
                <Block header="Анестезіолог:" content={anesthetist} />
              </div>
              <div id="postDiagnosis">
                {" "}
                <Block
                  header="Післяопераційний діагноз:"
                  content={finalDiagnosis}
                />{" "}
              </div>
              <Block header="Дата:" content={operationDate} />
              <Block header="Час:" content={lastTime} />
              <Block
                header=""
                content="Дитина притомна. Серцева діяльність та дихання не порушені. Кровотечі не спостерігається. Призначення виконуються."
              />
            </>
          )}
        <div className="flexEnd headers">
          <div className="lastLine">
            {" "}
            <Block
              header=""
              content={`Лікар ________ ${doctor}`}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
//
