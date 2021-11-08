import React from 'react';
import Stack from '@mui/material/Stack';

import { SectionWrapper } from '../../../components/wrappers';
import { BlockTitle, BlockContent } from '../../../components/titles';
import { FeaturesButton, WhiteBlueButton, FeatureBlock } from './style.module'; 

// Images
import Clouds from '../../../assets/clouds.png';
import Payments from '../../../assets/payments.png';

const FeaturesSection: React.FC = () => {
    return (
        <SectionWrapper>
            <Stack 
                direction= {document.documentElement.clientWidth < 550 ? 'column' : 'row'}
                justifyContent="center"
                alignItems="baseline"
                spacing={2}
            >
                <FeatureBlock>
                    <div>
                        <BlockTitle>Переводы с карты на любую карту мира</BlockTitle>
                        {document.documentElement.clientWidth < 550 ? '' : 
                            <WhiteBlueButton>Подробнее</WhiteBlueButton>
                        }
                    </div> 
                    <img src={Clouds} className="feature-img"/>
                    {document.documentElement.clientWidth < 550 ? 
                        <WhiteBlueButton>Подробнее</WhiteBlueButton> : ''
                    }
                </FeatureBlock>
                <FeatureBlock>
                    <div>
                        <div>
                            <BlockTitle>Оплата платежей online</BlockTitle>
                            <BlockContent>Оплата штрафов, коммунальных услуг, услуг сотовых операторов и многое другое</BlockContent>
                        </div>
                        <FeaturesButton>Произвести платеж</FeaturesButton>
                    </div> 
                    <img src={Payments} className="unique-feature-img"/>
                </FeatureBlock>
            </Stack>
        </SectionWrapper>
    )
}

export default FeaturesSection;