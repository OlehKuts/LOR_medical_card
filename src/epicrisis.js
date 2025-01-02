import React from "react";
import "./styles.css";
import { Block } from "./block";
import { BlockList } from "./blockList";
import { Table } from "./table";
import { Text } from "./text";
import { bloodTestExponents, urineTestExponents } from "./database";
import { bloodTestChecker } from "./functions/bloodTestChecker";
import { stringCapitalizer } from "./utils/utils";

export const Epicrisis = ({  params, current }) => {
  const {drugs, analyseHiddenFields, bloodGroup, bloodTest,
    epicrisisDataSend, cardNumber, dischargeDate, complaintsContent,
    shortStatusContent, anamnesisMorbiContent, reviewDate, condition,
    finalDiagnosis, operationFree, anestesiaTypeModified,
    operationDate, operationName, diagnosis, recommendations,
    secondOperation, urineTest, glucose, enterobioz, dung,
    otherExaminations, wasViolation, rezusFactor, planned, doctor
  } = current;
  const filteredDrugs = drugs.filter((drug) => drug !== "");
  const {
    bloodTestHidden = false,
    urineHidden = false,
    glucoseHidden = false,
  } = analyseHiddenFields || {};
  const abNormalList = bloodTestChecker(bloodTest);
  return (
    <div id="epicrisis">
      {epicrisisDataSend && (
        <>
          <div className="flexi headers">
            <Block
              header={`${params.medicalCard} №:`}
              content={cardNumber}
            />
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

          <Block
            header="Діагноз:"
            content={finalDiagnosis || diagnosis}
          />
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
            <BlockList header="Медикаментозне лікування:" content={filteredDrugs} />
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
          {!glucoseHidden && (
            <Block header="Глюкоза крові:" content={`${glucose}.`} />
          )}
          <div className="block">
            {enterobioz !== `не визначався` && (
              <>
                <Text fontWeight="bold">
                  Зішкріб на ентеробіоз:
                </Text>
                {""}
                <span id="content"> {enterobioz}. </span>
              </>
            )}
            {dung !== `не визначався` && (
              <>
                <Text fontWeight="bold">
                  Кал на я/г:
                </Text>
                {""}
                <span id="content"> {dung}. </span>
              </>
            )}
          </div>
          {planned && (
            <div className="block">
              <Text fontWeight="bold">
                Група крові:
              </Text>
              {""}
              <span id="content"> {bloodGroup}, </span>
              <Text fontWeight="bold">
                резус-фактор:
              </Text>
              {""}
              <span id="content"> {rezusFactor}. </span>
            </div>
          )}
          {otherExaminations && (
            <div className="block">
              <Text fontWeight="bold">
                Інші обстеження:
              </Text>
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
