import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { 
    HeaderWrapper, 
    HeaderLinksWrapper,
    InputSelectLanWrapper,
    InputSelectCityWrapper
} from './style.module';
import { LogoWrapper } from '../../../components/images';
import { lan } from '../../../utils/lan';
import { cities } from '../../../utils/cities';
import Logo from '../../../assets/logo.png';


const DesktopHeader: React.FC = () => {
    return (
        <HeaderWrapper>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                >
                    <a href="#">
                        <LogoWrapper src={Logo} alt="Forte Logo"/>
                    </a>
                    <InputSelectLanWrapper
                        defaultValue={'ru'}
                        inputProps={{
                            name: 'lan',
                            id: 'uncontrolled-native',
                        }}
                    >
                        {lan.map((lanElement, key) => {
                            return <option key={key} value={lanElement.code}>{lanElement.lan_name}</option>
                        })}
                    </InputSelectLanWrapper>
                    <Stack
                        direction="row"
                        alignItems="center"
                    >
                        <LocationOnOutlinedIcon />
                        <InputSelectCityWrapper
                            defaultValue={15}
                            inputProps={{
                                name: 'city',
                                id: 'uncontrolled-native',
                            }}
                        >
                            {cities.map((lanElement, key) => {
                                return <option key={key} value={lanElement.code}>{lanElement.city_name}</option>
                            })}
                        </InputSelectCityWrapper>
                    </Stack>
                </Stack>

                <HeaderLinksWrapper>
                    <li className="selected"><Link to="/bank">Банк</Link></li>
                    <li>Маркет</li>
                    <li>Mobile</li>
                    <li>Путешествия</li>
                    <li>Бизнес</li>
                    <li>Club</li>
                </HeaderLinksWrapper>

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={0.5}
                        sx={{
                            cursor: 'pointer'
                        }}
                    >
                        <PhoneInTalkOutlinedIcon />
                        <p>7575</p>
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
            </Stack>                    
        </HeaderWrapper>
    )
}

export default DesktopHeader;