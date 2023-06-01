/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from "react";
import { InputContainer, InputPassword } from "./styles";
import { IInputProps } from "../InputTypes";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/rootReducer";

export interface IInputPasswordProps extends IInputProps {
  value?: string;
}

export const AtomInputPassword = ({
  disabled = false,
  placeholder = "",
  required = false,
  value = "",
  regex,
  styles = {},
  onChange = () => {},
  errorCallback = () => {},
  hasCustomValidationError = false,
}: IInputPasswordProps): JSX.Element => {
  const { theme } = useSelector((state: AppState) => state.setup);

  const [val, setVal] = useState<string>(value);
  const [hasError, setHasError] = useState<boolean>(false);
  const [shouldValidate, setShouldValidate] = useState<boolean>(true);
  const [passwordRegex, setpasswordRegex] = useState<RegExp | null>(
    regex != null ? new RegExp(regex) : null
  );

  useEffect(() => {
    setVal(value);
    setpasswordRegex(regex ? new RegExp(regex) : null);
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => validateInput(), 800);
    return () => clearTimeout(timer);
  }, [val, required]);

  const validateInput = () => {
    setHasError(false);
    if (shouldValidate) {
      if (val && passwordRegex !== null && !passwordRegex.test(val)) {
        setHasError(true);
        errorCallback("regExp");
      }
      if (required && val === "") {
        setHasError(true);
        errorCallback("required");
      }
    }
  };

  return (
    <>
      <InputContainer>
        <InputPassword
          data-testid="input-password"
          type={"password"}
          disabled={disabled}
          placeholder={placeholder}
          hasError={hasError || hasCustomValidationError}
          required={required}
          value={val}
          colors={theme}
          onChange={(e) => {
            setShouldValidate(true);
            setVal(e.target.value);
            onChange(e.target.value);
          }}
          styles={styles}
        />
      </InputContainer>
    </>
  );
};
