import React, { useState, useEffect } from "react";
import { useRef, useImperativeHandle,forwardRef } from "react";

var DynamicText = (props,ref) => {
  const [value, setValue] = useState("Random Text");

  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    changeValue (newValue) {
      setValue(newValue);
    }
  }));
 


  return <h1 ref = {inputRef}>{value}</h1>;
};


DynamicText = forwardRef(DynamicText);
export default DynamicText;
