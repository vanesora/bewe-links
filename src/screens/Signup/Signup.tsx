import React, { FunctionComponent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store/rootReducer';

import { getItem, setItem, setItemObject } from '../../helpers/storage';


interface IProps {
}

const mapStateToProps = (state: AppState) => ({
});

const mapDispatchToProps = {

}

const Signup: FunctionComponent<IProps> = ({

}) => {
  return (
    <>
    <div>signup</div></>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
