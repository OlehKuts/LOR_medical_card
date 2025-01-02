import React from "react";
import "./styles.css";
import { Text } from "./text";

export const Table = ({
  abNormalList = [],
  size =  "22px",
  contentList = ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
  headerList = ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ...props
}) => (
  <div>
    <table className="table">
      <tbody>
        <tr>
          {headerList.map((item, idx) => (
            <td key={idx} className="tdNarrow">
              <Text size={size} fontWeight="bold" {...props}>
                {item}
              </Text>
            </td>
          ))}
        </tr>
      </tbody>
      <tbody>
        <tr>
          {contentList.map((item, idx) => (
            <td key={idx} className="td">
              <Text
                size={size}
                fontWeight="bold"
                textDecoration={abNormalList[idx] ? "underline" : "none"}
                {...props}
              >
                {item}
              </Text>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);


export const HearingPassport = ({
  size,
  spokenLeft,
  spokenRight,
  whisperLeft,
  whisperRight,
  ...props
}) => {
  const firstLine = ["АD", "-", spokenRight, whisperRight, "↓", "+", "N"];
  const secondLine = ["", "СШ", "РМ", "ШМ", "W", "R", "Sch"];
  const thirdLine = ["АS", "-", spokenLeft, whisperLeft, "↑", "+", "N"];

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            {firstLine.map((item, idx) => (
              <td key={idx}>
                <Text size={size} fontWeight="bold" {...props}>
                  {item}
                </Text>
              </td>
            ))}
          </tr>
        </tbody>
        <tbody>
          <tr>
            {secondLine.map((item, idx) => (
              <td key={idx}>
                <Text size={size} fontWeight="bold" {...props}>
                  {item}
                </Text>
              </td>
            ))}
          </tr>
        </tbody>
        <tbody>
          <tr>
            {thirdLine.map((item, idx) => (
              <td key={idx}>
                <Text size={size} fontWeight="bold" {...props}>
                  {item}
                </Text>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
