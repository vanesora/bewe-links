import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store/rootReducer";

interface IProps {
}

const mapStateToProps = (state: AppState) => ({
  setup: state.pathActual,
});

const mapDispatchToProps = {
};


const User: FunctionComponent<IProps> = ({
}: IProps) => {
  
  return (
    <><div>User</div></>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
