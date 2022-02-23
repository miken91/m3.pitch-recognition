import React, { FC, useContext } from 'react';
import { Button, Menu, MenuItem, styled } from '@mui/material';
import { BaseballContext, Pitch } from './BaseballContext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledButton = styled(Button) ({
    color: 'white',
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
                     aria-controls={open ? 'demo-customized-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? 'true' : undefined}
                     variant="contained"
                     disableElevation
                     onClick={handleClick}
                     endIcon={<KeyboardArrowDownIcon/>}
                >
                    Pitch Options
                </StyledButton>
                <Menu
                    id="demo-customized-menu"
                    MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem 
                        onClick={handleClose}
                        data-my-value={'4_SEAM_FASTBALL'}
                    >
                        4 Seam Fastball
                    </MenuItem>
                    <MenuItem 
                        onClick={handleClose}
                        data-my-value={'2_SEAM_FASTBALL'}
                    >
                        2 Seam Fastball
                    </MenuItem>
                    <MenuItem 
                        onClick={handleClose}
                        data-my-value={'CURVEBALL'}
                    >
                        Curveball
                    </MenuItem>
                    <MenuItem 
                        onClick={handleClose}
                        data-my-value={'SLIDER'}
                    >
                        Slider
                    </MenuItem>
                </Menu>
            </>
    )
}

export default PitchOptions;