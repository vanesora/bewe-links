import React, { FunctionComponent } from "react";
import { IProps } from "../ButtonProps";
import { GeneralStyledBtn } from "./styles";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/rootReducer";

export const AtomButtonGhost: FunctionComponent<IProps> = ({
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
      disabled={disabled}
      colorPalette={theme}
      onClick={onClick}
      color={color}
      type={type}
      width={width}
      customColor={customColor}
      size={size}
      styles={styles}
      {...props}
    >
      {text}
    </GeneralStyledBtn>
  );
};
