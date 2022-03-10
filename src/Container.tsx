import { FC } from 'react'
import BaseballModel from './BaseballModel';
import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import PitchOptions from './PitchOptions';
import PitcherHand from './PitcherHand';
import RotationsPerMinute from './RotationsPerSecond';
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
                            sx={{display: {xs: 'none', md: 'flex'}, mr: 2, flexGrow: 1 }}
                        >
                        Pitch Recoginition
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{display: {md: 'none'}, mr: 2, flexGrow: 1 }}
                        >
                        PR
                        </Typography>
                        <RotationsPerMinute/>
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