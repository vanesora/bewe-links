import React, { FunctionComponent } from "react";
import { Load, Spinner, SquareLoad } from "./styles";

const Loading: FunctionComponent = () => {
  return (
    <Load className="loader-wrapper">
      <SquareLoad>
        <Spinner />
      </SquareLoad>
    </Load>
  );
};

export default Loading;
