import React, { FunctionComponent } from "react";
import { GeneralStyledBtn, IconContainer } from "./styles";
import {
  ButtonHeight,
  IProps,
} from "../ButtonProps";
import { getColorFromButtonIcon } from "../ButtonHelpers";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/rootReducer";
import { AtomIcon, IconType } from "../../Icon";

export interface IIconButtonProps extends IProps {
  /** Name icon in button */
  icon: IconType;
  /* If there is text, it is possible to add a margin to the left of the icon (default 5px) */
  iconMarginLeft?: string;
  /* If there is text, it is possible to add a margin to the right of the icon (default 5px) */
  iconMarginRight?: string;
}

export const AtomButtonIcon: FunctionComponent<IIconButtonProps> = ({
  disabled,
  onClick,
  color,
  text,
  type,
  width = ButtonHeight.small,
  icon,
  iconMarginLeft,
  iconMarginRight,
  customColor = "light",
  size = "small",
  styles = {},
  ...props
}: IIconButtonProps) => {
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
        <IconContainer>
          <AtomIcon
            size={size == "large" ? 40 : size == "medium" ? 25 : 15}
            color={getColorFromButtonIcon(color, customColor)}
            icon={icon}
          />
        </IconContainer>
    </GeneralStyledBtn>
  );
};
