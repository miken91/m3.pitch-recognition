import {FC, useState} from 'react';
import { styled } from '@mui/material';
import Container from './Container';
import BaseballContextProvider from './BaseballContext';

const StyledContainer = styled(Container)({
  height: '100%'
})
const App : FC<{}> = () => {
  return (
    <BaseballContextProvider>
      <StyledContainer/>
    </BaseballContextProvider>
  )
}

export default App;
