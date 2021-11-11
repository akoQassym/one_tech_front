import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { 
    HeaderWrapper, 
    SideMenu
} from './style.module';
import { LogoWrapper } from '../../../components/images';
import { theme } from '../../../utils/theme';
import Logo from '../../../assets/logo.png';


const MobileHeader: React.FC = () => {
    const [menuClicked, setMenuClicked] = useState(false);

    const handleMenuBtnClick = () => {
        setMenuClicked(true);
    }

    const handleCloseBtnClick = () => {
        setMenuClicked(false);
    }

    return (
        <HeaderWrapper>
            <SideMenu style={{left: menuClicked ? '0px' : '-250px'}}>
                <Link to="/bank" className="selected">Банк</Link>
                <Link to="/#">Маркет</Link>
                <Link to="/#">Mobile</Link>
                <Link to="/#">Путешествия</Link>
                <Link to="/#">Бизнес</Link>
                <Link to="/#">Club</Link>
                <IconButton area-label="close" onClick={handleCloseBtnClick}>
                    <CloseIcon sx={{color: theme.colors.white}}/>
                </IconButton>
            </SideMenu>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                >
                    <IconButton area-label="menu" onClick={handleMenuBtnClick}>
                        <MenuIcon sx={{color: theme.colors.forteMain}}/>
                    </IconButton>
                    <LogoWrapper src={Logo} alt="Forte Logo"/>
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.5}
                    sx={{
                        cursor: 'pointer'
                    }}
                >
                    <PersonOutlineOutlinedIcon />
                    <p>Войти</p>
                </Stack>                
            </Stack>
        </HeaderWrapper>
    )
}

export default MobileHeader;