import React from "react";
import "./styles.css";
import { Block } from "./block";

export const Diary = ({
  current,
  firstIndex,
  lastIndex,
  patient, 
  params
}) => {
  const { mutualExamination } = params;
  const hrCounter = (rate) => {
    let numRate = Number(rate);
    let randomInc = Number((Math.random() * 3).toFixed(0));
    numRate = numRate + randomInc;
    return numRate;
  };
  const rrCounter = (rate) => {
    let numRate = Number(rate);
    let randomInc = Number((Math.random() * 5).toFixed(0));
    numRate = numRate + randomInc;
    return numRate;
  };
  const {heartRate, respiratoryRate, lastDayContent, disease,
    someDayContent, doctor
  } = patient;
  return (
    <div id="diary">
      <div className="flexi flexDiary">
        <Block header="Дата:" content={current.date} />
      </div>
      {current.workDay && (
        <div id="workdayBlock">
          <div className="flexi flexDiaryMiddle">
            <Block
              header={mutualExamination}
              content=""
            />
          </div>
          <div className="flexi flexDiaryMiddle">
            <Block
              header=""
              content={`ЧСС=${hrCounter(heartRate)}/хв; ЧДР=${rrCounter(
                respiratoryRate
              )}/хв; t ̊- N`}
            />
          </div>

          {lastIndex && (
            <div className="diary">
              <Block
                header=""
                content="Загальний стан дитини задовільний. Скарги відсутні. Свідомість ясна, шкірні покриви чисті. Серцева діяльність ритмічна, тони чисті, звучні. Перкуторно ясний легеневий звук. Везикулярне дихання. Живіт при пальпації м’який, безболісний. Печінка не збільшена. Нирки та селезінка не пальпуються. Фізіологічні відправлення не порушені."
              />
            </div>
          )}
          {!lastIndex && (
            <div className="diary">
              <Block
                header=""
                content="Загальний стан дитини близький до задовільного. Свідомість ясна, шкірні покриви чисті. Серцева діяльність ритмічна, тони чисті, звучні. Перкуторно ясний легеневий звук. Везикулярне дихання. Живіт при пальпації м’який, безболісний. Печінка не збільшена. Нирки та селезінка не пальпуються. Фізіологічні відправлення не порушені."
              />
            </div>
          )}

          {lastIndex && (
            <div className="diary">
              <Block header="" content={lastDayContent} />
            </div>
          )}
          {!lastIndex && disease !== "septumCurvature" && (
            <div className="diary">
              <Block header="" content={someDayContent} />
            </div>
          )}
          {!lastIndex && !firstIndex && disease === "septumCurvature" && (
            <div className="diary">
              <Block header="" content={someDayContent} />
            </div>
          )}
          {firstIndex && disease === "septumCurvature" && (
            <div className="diary">
              <Block
                header=""
                content="Розтампоновано ніс. Скарги на дещо утруднене носове дихання. Кровотеча відсутня. 
Риноскопія: слизова блідо-рожева, набрякла, носові ходи вільні, незначні слизові виділення. 
Інші ЛОР органи в нормі.
"
              />
            </div>
          )}
          <div className="flexEnd headers">
            <div className="lastLine">
              <Block header="" content={`Лікар ________ ${doctor}`} />
            </div>
          </div>
        </div>
      )}
      {!current.workDay && (
        <div className="flexi">
          <Block
            header=""
            content="Вихідний день. Дитина перебуває під наглядом чергового медичного персоналу."
          />
        </div>
      )}
    </div>
  );
};
