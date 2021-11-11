import React, { useState } from 'react';
import Stack from '@mui/material/Stack';

import { NAV_ELEMENTS } from './navbarElements';
import Requirements from './requirements/index'; 
import { NavBlock } from './style.module';


const ContentNav: React.FC = () => {
    const [nav, setNav] = useState<string>(NAV_ELEMENTS[0].navTitle);

    const handleNavBlockClick = (value: string) => {
        setNav(value);
    }

    return (
        <>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    padding: '4% 0 2% 0',
                    width: '100%'
                }}
            >
                {
                    NAV_ELEMENTS.map((navElement, key) => {
                        return (
                            <NavBlock
                                style={{
                                    opacity: navElement.navTitle === nav ? '100%' : '60%'
                                }}
                                onClick={() => handleNavBlockClick(navElement.navTitle)}
                                key={key}
                            >
                                {navElement.navTitle}
                            </NavBlock>
                        )
                    })
                }
            </Stack>
            <Requirements />
        </>
    )

}

export default ContentNav;