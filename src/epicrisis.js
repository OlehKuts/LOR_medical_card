import React from "react";
import "./styles.css";
import { Block } from "./block";
import { BlockList } from "./blockList";
import { Table } from "./table";
import { Text } from "./text";
import {
  bloodTestExponents,
  urineTestExponents,
  biochemicalTestExponents,
} from "./database";
import { bloodTestChecker } from "./functions/bloodTestChecker";
import { stringCapitalizer } from "./utils/utils";

export const Epicrisis = ({ params, current }) => {
  const {
    drugs,
    analyseHiddenFields,
    bloodGroup,
    bloodTest,
    epicrisisDataSend,
    cardNumber,
    dischargeDate,
    complaintsContent,
    shortStatusContent,
    anamnesisMorbiContent,
    reviewDate,
    condition,
    finalDiagnosis,
    operationFree,
    anestesiaTypeModified,
    operationDate,
    operationName,
    diagnosis,
    recommendations,
    secondOperation,
    urineTest,
    glucose,
    enterobioz,
    dung,
    otherExaminations,
    wasViolation,
    rezusFactor,
    planned,
    doctor,
    biochemicalData,
  } = current;
  const filteredDrugs = drugs.filter((drug) => drug !== "");
  const {
    bloodTestHidden = false,
    urineHidden = false,
    glucoseHidden = false,
    biochemicalHidden = false,
  } = analyseHiddenFields || {};
  const abNormalList = bloodTestChecker(bloodTest);
  return (
    <div id="epicrisis">
      {epicrisisDataSend && (
        <>
          <div className="flexi headers">
            <Block header={`${params.medicalCard} №:`} content={cardNumber} />
            <Block header={`${params.patientType}:`} content={current.name} />
          </div>
          <div className="flexi headers">
            <Block header="ЕПІКРИЗ" content={""} size="28px" />
          </div>
          <Block
            header=""
            content={`${params.treatmentLocation} з ${reviewDate} по ${dischargeDate}.`}
          />
          <Block header="Скарги:" content={complaintsContent} />
          <Block
            header="Анамнез захворювання:"
            content={anamnesisMorbiContent}
          />
          <Block
            header="Об'єктивно:"
            content={`загальний стан дитини ${
              condition
            }. ${stringCapitalizer(shortStatusContent)}`}
          />

          <Block header="Діагноз:" content={finalDiagnosis || diagnosis} />
          {!operationFree && (
            <>
              <Block
                header=""
                content={`${operationDate} під ${anestesiaTypeModified} знеболенням проведено оперативне втручання - ${operationName} Післяопераційний період без ускладнень.`}
              />
              <Block header="" content={secondOperation || null} />
              <Block
                header="Післяопераційний діагноз:"
                content={finalDiagnosis || diagnosis}
              />
            </>
          )}
          {filteredDrugs.length !== 0 ? (
            <BlockList
              header="Медикаментозне лікування:"
              content={filteredDrugs}
            />
          ) : (
            <Block header="Медикаментозне лікування відсутнє." content="" />
          )}

          <Block
            header=""
            content={` ${
              wasViolation
                ? "Дитина виписана за вимогою батьків."
                : "Дитина виписана в задовільному загальному стані."
            } Виписка видана батькам на руки. В контакті з інфекційними хворими не перебувала.`}
          />
          <Block header="Рекомендації:" content={recommendations} />
          <div className="flexi headers">
            <Block header="ДАНІ ОБСТЕЖЕНЬ" content="" size="22px" />
          </div>
          {!bloodTestHidden && (
            <>
              <div className="flexi headers">
                <Block header="ЗАГАЛЬНИЙ АНАЛІЗ КРОВІ" content="" size="22px" />
              </div>
              <div className="flexi headers">
                <Table
                  headerList={bloodTestExponents}
                  contentList={bloodTest}
                  abNormalList={abNormalList}
                />
              </div>
            </>
          )}
          {!urineHidden && (
            <>
              <div className="flexi headers">
                <Block header="ЗАГАЛЬНИЙ АНАЛІЗ СЕЧІ" content="" size="22px" />
              </div>
              <div className="flexi headers">
                <Table
                  headerList={urineTestExponents}
                  contentList={urineTest}
                />
              </div>
            </>
          )}
          {!biochemicalHidden && planned ? (
            <>
              <div className="flexi headers">
                <Block
                  header="Біохімічний аналіз крові"
                  content=""
                  size="22px"
                />
              </div>
              <div className="flexi headers">
                <Table
                  headerList={biochemicalTestExponents}
                  contentList={Object.values(biochemicalData)}
                  size="18px"
                />
              </div>
            </>
          ) : null}
          {!glucoseHidden && (
            <Block header="Глюкоза крові:" content={`${glucose}.`} />
          )}
          {planned && bloodGroup && rezusFactor ? (
            <div className="block">
              <Text fontWeight="bold">Група крові:</Text>
              {""}
              <span id="content"> {bloodGroup}, </span>
              <Text fontWeight="bold">резус-фактор:</Text>
              {""}
              <span id="content"> {rezusFactor}. </span>
            </div>
          ) : null}
          {otherExaminations && (
            <div className="block">
              <Text fontWeight="bold">Інші обстеження:</Text>
              {""}
              <span id="content"> {otherExaminations}</span>
            </div>
          )}
          <div className="flexEnd headers">
            <div className="lastLine">
              <Block header="" content={`Лікар ________ ${doctor}`} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
