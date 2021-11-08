import React from 'react';
import DesktopHeader from './desktopHeader';
import MobileHeader from './mobileHeader';

const Header: React.FC = () => {
    return (
        <>
            {
                document.documentElement.clientWidth < 550 ?
                    <MobileHeader />
                : 
                    <DesktopHeader />
            }
        </>
    )
}

export default Header;