import React from 'react';
import { 
    HeaderWrapper, 
    HeaderLinksWrapper 
} from '../../../components/wrappers';
import { LogoWrapper } from '../../../components/images';

// Images
import Logo from '../../../assets/logo.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function Header() {
    return (
        <HeaderWrapper>
            <div className="header-block">
                <div>
                    <a href="#">
                        <LogoWrapper src={Logo} alt="Forte Logo"/>
                    </a>
                </div>
                <div>
                    <p>Рус ⯆</p>
                </div>
                <div className="header-icon-group">
                    <LocationOnOutlinedIcon />
                    <p>Усть-Каменогорск</p>
                </div>
            </div>

            <HeaderLinksWrapper>
                <li className="selected">Банк</li>
                <li>Маркет</li>
                <li>Mobile</li>
                <li>Путешествия</li>
                <li>Бизнес</li>
                <li>Club</li>
            </HeaderLinksWrapper>

            <div className="header-block">
                <div className="header-icon-group">
                    <PhoneInTalkOutlinedIcon />
                    <p>7575</p>
                </div>
                <div className="header-icon-group">
                    <PersonOutlineOutlinedIcon />
                    <p>Войти</p>
                </div>
            </div>

        </HeaderWrapper>
    )
}