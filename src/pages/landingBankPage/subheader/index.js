import React from 'react';
import { SubheaderWrapper } from '../../../components/wrappers';
import { LogoWrapper } from '../../../components/images';

// Images
import CreditCard from '../../../assets/creditCard.svg';
import Deposit from '../../../assets/deposit.svg';
import Transaction from '../../../assets/transaction.svg';
import Insurance from '../../../assets/insurance.svg';
import Premier from '../../../assets/diamond.svg';
import ForteFamily from '../../../assets/forteFamily.svg';
import Contacts from '../../../assets/contacts.svg';

export default function Subheader() {
    return (
        <SubheaderWrapper>
            <div className="subheader-element">
                <LogoWrapper src={CreditCard} alt="Credit Card"/>
                <p>Карты</p>
            </div>

            <div className="subheader-element">
                <LogoWrapper src={Deposit} alt="Deposit"/>
                <p>Депозиты</p>
            </div>

            <div className="subheader-element">
                <LogoWrapper src={Transaction} alt="Transaction"/>
                <p>Переводы</p>
            </div>

            <div className="subheader-element">
                <LogoWrapper src={Insurance} alt="Insurance"/>
                <p>Insurance</p>
            </div>

            <div className="subheader-element">
                <LogoWrapper src={Premier} alt="Premier"/>
                <p>Premier</p>
            </div>

            <div className="subheader-element">
                <LogoWrapper src={ForteFamily} alt="Forte Family"/>
                <p>ForteFamily</p>
            </div>

            <div className="subheader-element">
                <LogoWrapper src={Contacts}/>
                <p>Контакты</p>
            </div>

        </SubheaderWrapper>
    )
}