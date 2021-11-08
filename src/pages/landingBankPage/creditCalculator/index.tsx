import React from 'react';
import { 
    CreditCalculatorWrapper
} from './style.module';

import DesktopCalculator from './desktopCalculator';
import MobileCalculator from './mobileCalculator';

const CreditCalculator: React.FC = () => {
    return (
        <CreditCalculatorWrapper>
            {document.documentElement.clientWidth < 550 ?
                <MobileCalculator />
            :
                <DesktopCalculator />
            }
        </CreditCalculatorWrapper>
    )
}

export default CreditCalculator;