import React from 'react';

import { LandingWrapper } from '../../components/wrappers';
import Header from './header/index';
import Subheader from './subheader/index';
import Banner from './banner/index';
import CreditCards from './creditCards/index';

export default function MainFile() {
    return (
        <LandingWrapper>
            <Header />
            <Subheader />
            <Banner />
            <CreditCards />
        </LandingWrapper>
    )
}