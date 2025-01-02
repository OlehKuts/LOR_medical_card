import React from "react";
import "./styles.css";
import { Block } from "./block";
import { Text } from "./text";
import { BlockList } from "./blockList";
import { Table } from "./table";
import { bloodTestExponents, urineTestExponents } from "./database";
import { bloodTestChecker } from "./functions/bloodTestChecker";
import { stringCapitalizer } from "./utils/utils";

export const Extract = ({  params, current }) => {
  const {drugs, bloodTest, analyseHiddenFields,
    cardNumber, birthDate, residence, fullAdress, dischargeDate,
    extractDataSend, reviewDate, complaintsContent, anamnesisMorbiContent,
    condition, shortStatusContent, finalDiagnosis, diagnosis, operationFree,
    operationDate, anestesiaTypeModified, wasViolation, operationName,
    glucose, recommendations, urineTest, enterobioz, dung, planned,
    bloodGroup, otherExaminations, rezusFactor, doctor
  } = current;
  const filteredDrugs = drugs.filter((drug) => drug !== "");
  const abNormalList = bloodTestChecker(bloodTest);
  const {
    bloodTestHidden = false,
    urineHidden = false,
    glucoseHidden = false
  } = analyseHiddenFields || {};
  return (
    <div id="extract">
      {extractDataSend && (
        <>
          <div className="super">
            <div className="main">
              <div className="header">
                <div className="headerPart headerPart1">
                  <div className="nameAdress">{params.institution}</div>
                  <div className="code">Код за ЄДРПОУ {params.edrpouCode}</div>
                </div>
                <div className="headerPart">
                  <div className="headerLine">Медична документація</div>
                  <div className="headerLine">
                    Форма первинної облікової документації
                  </div>
                  <div className="headerLine">№027/о</div>
                  <div className="headerLine">ЗАТВЕРДЖЕНО</div>
                  <div className="headerLine">Наказ МОЗ України</div>
                  <div className="headerLine">
                    |1|4|0|2|2|0|1|2| <span className="spanNumber">№110</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flexi headers">
            <Block header="ВИПИСКА" content={""} size="30px" />
          </div>
          <div className="flexi headers">
            <Block
              header={`${params.medicalCard} №:`}
              content={cardNumber}
            />
          </div>
          <Block header="П.І.Б хворого: " content={current.name} />
          <Block header="Дата народження: " content={birthDate} />
          <Block
            header="Адреса проживання: "
            content={residence || fullAdress}
          />
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
              <Block
                header="Післяопераційний діагноз:"
                content={finalDiagnosis || diagnosis}
              />
            </>
          )}
          {filteredDrugs.length === 0 ? (
            <Block header="Медикаментозне лікування відсутнє." content="" />
          ) : (
            <BlockList header="Медикаментозне лікування:" content={filteredDrugs} />
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
                <Text size="18px" fontWeight="bold">
                  Зішкріб на ентеробіоз:
                </Text>
                {""}
                <span id="content"> {enterobioz}. </span>
              </>
            )}
            {dung !== `не визначався` && (
              <>
                <Text size="18px" fontWeight="bold">
                  Кал на я/г:
                </Text>
                {""}
                <span id="content"> {dung}. </span>
              </>
            )}
          </div>
          {planned && (
            <div className="block">
              <Text size="18px" fontWeight="bold">
                Група крові:
              </Text>
              {""}
              <span id="content"> {bloodGroup}, </span>
              <Text size="18px" fontWeight="bold">
                резус-фактор:
              </Text>
              {""}
              <span id="content"> {rezusFactor}. </span>
            </div>
          )}
          {otherExaminations && (
            <div className="block">
              <Text size="18px" fontWeight="bold">
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
//
