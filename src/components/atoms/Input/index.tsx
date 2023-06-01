import React, { FunctionComponent, forwardRef} from "react";
import { Input } from "./styles";
import { AppState } from "../../../store/rootReducer";
import { useSelector } from "react-redux";
import { IInputProps } from "./InputTypes";


export const AtomInput: FunctionComponent<IInputProps> = forwardRef<
  HTMLInputElement,
  IInputProps
>(
  (
    { id, name, styles = {}, className, error = false, placeholder, ...props },
    ref
  ) => {
    const { theme } = useSelector((state: AppState) => state.setup);

    return (
      <Input
        colorPalette={theme}
        type="email"
        hasError={error}
        id={id}
        ref={ref}
        name={name}
        placeholder={placeholder}
        styles={styles}
        {...props}
      />
    );
  }
);
