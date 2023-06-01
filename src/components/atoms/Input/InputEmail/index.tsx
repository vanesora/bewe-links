import React, { useContext, useEffect, useState } from "react";
import { InputEmail } from "./styles";
import { AppState } from "../../../../store/rootReducer";
import { useSelector } from "react-redux";
import { IInputProps } from "../InputTypes";

export interface IInputEmailProps extends IInputProps {
  value?: string;
}

export const AtomInputEmail = ({
  disabled = false,
  placeholder = "Email",
  readOnly = false,
  required = false,
  value = "",
  regex,
  styles = {},
  onChange = () => {},
  errorCallback = () => {},
  hasCustomValidationError = false,
}: IInputEmailProps) => {

  const { theme } = useSelector((state: AppState) => state.setup);
  const [val, setVal] = useState<string>(value);
  const [hasError, setHasError] = useState<boolean>(false);
  const [shouldValidate, setShouldValidate] = useState<boolean>(true);
  const [mailRegex, setMailRegex] = useState<RegExp | null>(
    regex ? new RegExp(regex) : null
  );

  useEffect(() => {
    const timer = setTimeout(() => validateInput(), 800);
    return () => clearTimeout(timer);
  }, [val, required]);

  useEffect(() => {
    setVal(value);
  }, [value]);

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+?/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3}){1,2}$/;

  const validateInput = () => {
    setHasError(false);
    if (shouldValidate) {
      if (required && val === "") {
        setHasError(true);
        errorCallback("required");
      }

      if (val !== "" && mailRegex !== null && !mailRegex.test(val)) {
        setHasError(true);
        errorCallback("regExp");
      }

      if (val !== "" && !emailRegex.test(val)) {
        setHasError(true);
        errorCallback("regExp");
      }
    }
  };

  return (
    <InputEmail
      colorPalette={theme}
      type="email"
      hasError={hasError || hasCustomValidationError}
      disabled={disabled}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      value={val}
      styles={styles}
      onChange={(e) => {
        setShouldValidate(true);
        setVal(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
};
