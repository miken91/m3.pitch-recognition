import { FC } from 'react'
import BaseballModel from './BaseballModel';
import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import PitchOptions from './PitchOptions';
import PitcherHand from './PitcherHand';
const StyledContainer = styled('div')({
    display: 'flex',
    height: '100%'
});

const Container : FC <{}> = () => {
    return (
        <>
            <StyledContainer>
                <AppBar>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, flexGrow: 1 }}
                        >
                        Pitch Recoginition
                        </Typography>
                        <PitcherHand/>
                        <PitchOptions/>
                    </Toolbar>
                </AppBar>
                <BaseballModel/>
            </StyledContainer>
        </>
    )
}

export default Container;