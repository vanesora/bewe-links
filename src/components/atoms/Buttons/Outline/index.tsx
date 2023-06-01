import React from "react";
import { IProps } from "../ButtonProps";
import { GeneralStyledBtn } from "./styles";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/rootReducer";

export const AtomButtonOutline = ({
  disabled,
  onClick,
  color,
  text,
  type,
  width = "144px",
  customColor = "light",
  size = "small",
  styles = {},
  ...props
}: IProps) => {
  const { theme } = useSelector((state: AppState) => state.setup);

  return (
    <GeneralStyledBtn
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
    </GeneralStyledBtn>
  );
};
