import React, { FunctionComponent } from "react";

import { AppState } from "../../store/rootReducer";
import { connect } from "react-redux";

interface IProps {}

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = {};

const Login: FunctionComponent<IProps> = ({}) => {
  return <div>login</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
