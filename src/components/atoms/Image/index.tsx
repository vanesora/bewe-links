import React, { useState, useEffect, FunctionComponent } from "react";
import ImageDefault from "../../../assets/images/default.png";
import { Img } from "./styles";
import { CSSObject } from "styled-components";

export type ResizeImageTypes = "contain" | "cover" | "scale-down";

export interface IImageProps
  extends React.ButtonHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  imgWidth?: string;
  imgHeight?: string;
  resizeMode?: ResizeImageTypes;
  borderRadius?: string;
  styles?: CSSObject;
}

export const AtomImage: FunctionComponent<IImageProps> = ({
  src,
  alt,
  borderRadius = "0px",
  imgWidth = "auto",
  imgHeight = "auto",
  resizeMode = "contain",
  styles = {},
  ...props
}: IImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  useEffect(() => {
    const img = src || ImageDefault;
    setImgSrc(img);
    
  }, [src]);
  return (
    <Img
      resizeMode={resizeMode}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      src={imgSrc}
      onError={() => setImgSrc(ImageDefault)}
      alt={alt}
      borderRadius={borderRadius}
      styles={styles}
      {...props}
    />
  );
};
