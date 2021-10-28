import React from 'react';
import { SectionWrapper } from '../../../components/wrappers';
import { BlockTitle } from '../../../components/titles';
import { CreditButton, WhiteBlueButton } from '../../../components/buttons';

// Images
import Clouds from '../../../assets/clouds.png';
import Payments from '../../../assets/payments.png';

export default function FeaturesSection() {
    return (
        <SectionWrapper>
            <div className="features-div">
                <div className="feature-element">
                    <div>
                        <BlockTitle>Переводы с карты на любую карту мира</BlockTitle>
                        <WhiteBlueButton>Подробнее</WhiteBlueButton>
                    </div> 
                    <img src={Clouds}/>
                </div>
                <div className="feature-element">
                    <div>
                        <BlockTitle>Оплата платежей online</BlockTitle>
                        <p>Оплата штрафов, коммунальных услуг, услуг сотовых операторов и многое другое</p>
                        <CreditButton>Произвести платеж</CreditButton>
                    </div> 
                    <img src={Payments} className="unique-feature-img"/>
                </div>
            </div>
        </SectionWrapper>
    )
}