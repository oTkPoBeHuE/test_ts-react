import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../../store/reduxStore';

import { MainPageComponent } from './MainPageComponent';

import './MaingPage.css';

const mapStateToProps = (state: State) => ({message: state.text})
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const MainPageContainerInner: React.FC<Props> = ({message}) => {
  return <MainPageComponent message={message}/>;
}


export const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPageContainerInner)