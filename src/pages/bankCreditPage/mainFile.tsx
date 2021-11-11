import React from 'react';

import { LandingWrapper } from '../../components/wrappers';
import Header from '../landingBankPage/header/index';
import Subheader from '../landingBankPage/subheader/index';
import Banner from './banner/index';
import InfoGraphics from './infoGraphics/index';
import Advantages from './advantages/index';
import Calculator from './expressCreditCalculator/index';
import ContentNav from './contentNav/index';
import Documents from './documentsNeeded/index';
import Faq from './faq/index';
import Footer from '../landingBankPage/footer/index';

const MainFile: React.FC = () => {
    return (
        <LandingWrapper>
            <Header />
            <Subheader />
            <Banner />
            <InfoGraphics />
            <Advantages />
            <Calculator />
            <ContentNav />
            <Documents />
            <Faq />
            <Footer />
        </LandingWrapper>
    )
}

export default MainFile;