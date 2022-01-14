import React from "react";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { checkPropTypes } from "prop-types";

export const DateTimeComponent = (props) => {
  const dateVal = Date("1/10/2021 12:00 AM");
  return (
    <DateTimePickerComponent
      id={props.idt}
      placeholder="Choose a date and time"
    />
  );
};
