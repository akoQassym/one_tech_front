import React from 'react';

import { LandingWrapper } from '../../components/wrappers';
import Header from './header/index';
import Subheader from './subheader/index';
import Banner from './banner/index';
import CreditCards from './creditCards/index';
import CreditCalculator from './creditCalculator/index';
import Features from './features/index';
import Faq from './faq/index';
import MobileBannerSection from './mobileBanner/index';
import Currency from './currency/index';
import Footer from './footer/index';

const MainFile: React.FC = () => {
    return (
        <LandingWrapper>
            <Header />
            <Subheader />
            <Banner />
            <CreditCards />
            <CreditCalculator />
            <Features />
            <Faq />
            <MobileBannerSection />
            <Currency />
            <Footer />
        </LandingWrapper>
    )
}

export default MainFile;