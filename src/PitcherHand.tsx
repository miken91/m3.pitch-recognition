import { ToggleButtonGroup, ToggleButton, styled } from '@mui/material';
import React, { FC, useContext } from 'react';
import { BaseballContext } from './BaseballContext';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
    paddingRight: 8
})

const StyledToggleButton = styled(ToggleButton)({
    color: 'white'
})
const PitcherHand : FC <{}> = () => {
    const { handleSetPitcherHand } = useContext(BaseballContext)

    const [alignment, setAlignment] = React.useState<boolean>(true);

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: boolean,
    ) => {
        handleSetPitcherHand(newAlignment);
        setAlignment(newAlignment);
    };

    return(
        <StyledToggleButtonGroup
            value={alignment}
            onChange={handleAlignment}
            exclusive
            aria-label='Pitcher Hand'
            size='small'
        >
            <StyledToggleButton 
                aria-label='Left'
                value={false}>
                Left
            </StyledToggleButton>
            <StyledToggleButton
                aria-label='Right' 
                value={true}>
                Right
            </StyledToggleButton>
        </StyledToggleButtonGroup>
    )
}

export default PitcherHand