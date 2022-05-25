import React from "react";
import { TextField } from "@material-ui/core";

const DateComponent = ({ time, setTime }) => {
  return (
    <TextField
      id="datetime-local"
      label="To"
      type="datetime-local"
      //   onMouseLeave={setTime}
      //   onMouseLeave
      //   className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default React.memo(DateComponent);
