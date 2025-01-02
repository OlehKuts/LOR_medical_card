import React, { useState } from "react";
import { patientListPropTypes } from "./propTypes";

export const Checkbox = ({ patient, onSwitch }) => {
  const [checked, setChecked] = useState(patient.completed);
  const onChange = e => {
    onSwitch(e.target.value);
    setChecked(!checked);
  };

  return (
    <input
      type="checkbox"
      value={patient._id}
      {...{ onChange }}
      {...{ checked }}
    />
  );
};

Checkbox.propTypes = patientListPropTypes;
