import React, { FunctionComponent } from "react";
import { GeneralStyledButton } from "./styles";
import { IProps } from "../ButtonProps";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/rootReducer";

export const AtomButtonDefault: FunctionComponent<IProps> = ({
  disabled,
  onClick,
  color,
  text,
  type,
  width = "144px",
  size = "small",
  customColor = 'light',
  styles = {},
  ...props
}: IProps) => {
  const { theme } = useSelector((state: AppState) => state.setup);

  return (
    <GeneralStyledButton
      colorPalette={theme}
      disabled={disabled}
      onClick={onClick}
      color={color}
      width={width}
      type={type}
      customColor={customColor}
      size={size}
      styles={styles}
      {...props}
    >
      {text}
    </GeneralStyledButton>
  );
};
