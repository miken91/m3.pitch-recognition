import React, { FC, useContext } from 'react';
import { Button, Menu, MenuItem, styled } from '@mui/material';
import { BaseballContext, Pitch } from './BaseballContext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledButton = styled(Button) ({
    color: 'black',
})

const PitchOptions : FC <{}> = () => {
    const { handleSetPitchType, pitch } = useContext(BaseballContext)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        const { myValue } = event.currentTarget.dataset;
        handleSetPitchType(myValue as Pitch || pitch);
        setAnchorEl(null);
    };

    return (
            <>  
                <StyledButton
                     id='Pitch Options'
                     aria-label='Pitch Options'
                     variant='outlined'
                     disableElevation
                     onClick={handleClick}
                     endIcon={<KeyboardArrowDownIcon/>}
                >
                    Type
                </StyledButton>
                <Menu
                    id="demo-customized-menu"
                    MenuListProps={{
                    'aria-labelledby': 'Pitch Options',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem 
                        aria-label='4 Seam Fastball'
                        onClick={handleClose}
                        data-my-value={'4_SEAM_FASTBALL'}
                    >
                        4 Seam Fastball
                    </MenuItem>
                    <MenuItem 
                        aria-label='2 Seam Fastball'
                        onClick={handleClose}
                        data-my-value={'2_SEAM_FASTBALL'}
                    >
                        2 Seam Fastball
                    </MenuItem>
                    <MenuItem 
                        aria-label='Curveball'
                        onClick={handleClose}
                        data-my-value={'CURVEBALL'}
                    >
                        Curveball
                    </MenuItem>
                    <MenuItem 
                        aria-label='Slider'
                        onClick={handleClose}
                        data-my-value={'SLIDER'}
                    >
                        Slider
                    </MenuItem>
                    <MenuItem 
                        aria-label='Changeup'
                        onClick={handleClose}
                        data-my-value={'CHANGEUP'}
                    >
                        Changeup
                    </MenuItem>
                </Menu>
            </>
    )
}

export default PitchOptions;