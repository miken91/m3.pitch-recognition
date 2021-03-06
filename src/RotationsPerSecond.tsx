import React, { FC, useContext } from 'react';
import { TextField, styled } from '@mui/material';
import { BaseballContext } from './BaseballContext';

const StyledRotationsPerMinute = styled(TextField)({
    paddingRight: '8px'
})

const RotationsPerMinute : FC<{}> = () => {
    const { rotationsPerSecond, handleSetRotationsPerSecond } = useContext(BaseballContext);
    return (
        <StyledRotationsPerMinute 
            sx={{maxWidth: {xs: '50px', md: '100px'}}} 
            label='RPS'
            aria-label='Rotations Per Minute'
            variant='outlined' 
            size='small' 
            type='number' 
            value={rotationsPerSecond}
            inputProps={{min: 0, inputMode: 'numeric', pattern: '[0-9]*',  }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {
                handleSetRotationsPerSecond(Number(event.target.value));
            }} />
    )
}

export default RotationsPerMinute;