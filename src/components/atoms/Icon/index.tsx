import React, { FunctionComponent } from "react";
import { CSSObject } from "styled-components";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { FiChevronLeft } from "react-icons/fi";
import { keysTheme } from "../../../data/dataEn";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/rootReducer";

export type IconType = 'edit' | 'trash' | 'back';

export interface IIconProps {
  icon: IconType;
  size: string | number;
  color?: keysTheme;
  styles?: CSSObject;
}

export const AtomIcon: FunctionComponent<IIconProps> = ({
  size,
  icon,
  color = "neutral700",
  styles = {},
}: IIconProps) => {

  const { theme } = useSelector((state: AppState) => state.setup);
  
  const selectIcon = () => {
    // eslint-disable-next-line default-case
    switch (icon) {
      case 'back':
        return <BsTrash  style={{ height: size, color: theme[color] }}/>;
      case 'edit':
        return <BiEdit style={{ height: size, color: theme[color] }}/>;
      case 'trash':
        return <FiChevronLeft style={{ height: size, color: theme[color]}}/>;
    }
  }

  return (
    <>{selectIcon()}</>
  );
};
