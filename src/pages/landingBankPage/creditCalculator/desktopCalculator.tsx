import React, { useState } from 'react';
import { Slider } from '@mui/material';

import { UnfocusedText, SectionTitle } from '../../../components/titles';
import { StyledSwitch } from '../../../components/textFields';
import { 
    CreditCalculatorGrid,
    SliderWrapper,
    SwitchWrapper,
    CreditButton,
    CreditCalculatorLeft,
    CreditCalculatorRight,
    SliderDiv,
    SliderRange,
    CreditMonthlyValue,
    CreditRateValue,
    SliderValue,
    CreditRightBlockTitle,
    CreditLeftTitle
} from './style.module';

const MIN_AMOUNT = 10000;
const MIN_PERIOD = 6;

const DesktopCalculator: React.FC = () => {
    const [moneyAmount, setMoneyAmount] = useState<number>(MIN_AMOUNT);
    const [creditPeriod, setCreditPeriod] = useState<number>(MIN_PERIOD);
    const [discount, setDiscount] = useState<boolean>(false);
    const creditRate = discount ? 16.99 : 18.99;

    const handleMoneyChange = (e: any) => {
        setMoneyAmount(parseInt(e.target.value));
    }

    const handlePeriodChange = (e: any) => {
        setCreditPeriod(parseInt(e.target.value));
    }
    
    const handleSwitchChange = () => {
        setDiscount(prev => !prev);
    }

    const monthlyPaymentCalculation = () => {
        let monthlyRate = creditRate / (100 * 12);
        let resultOfPower = Math.pow(1+monthlyRate, creditPeriod);
        let monthlyPayment = moneyAmount * (monthlyRate*resultOfPower) / (resultOfPower-1);
        return monthlyPayment;
    }

    return (
        <>
            <SectionTitle>Кредиты на любые цели</SectionTitle>
            <p>Предварительный расчет не является публичной офертой</p>
            <CreditCalculatorGrid>
                <CreditCalculatorLeft>
                    <CreditLeftTitle>Сколько вам нужно?</CreditLeftTitle>

                    <SliderWrapper>
                        <SliderDiv>
                            <Slider
                                size="small"
                                color="secondary"
                                value={moneyAmount}
                                step={10_000}
                                min={10000}
                                max={10_000_000}
                                onChange={(e) => handleMoneyChange(e)}
                            />
                            <SliderRange>
                                <span>10 000 ₸</span>
                                <span>10 000 000 ₸</span>
                            </SliderRange>
                        </SliderDiv>
                        <SliderValue>{moneyAmount.toLocaleString('ru-RU')} ₸</SliderValue>
                    </SliderWrapper>

                    <CreditLeftTitle>Срок кредитования</CreditLeftTitle>

                    <SliderWrapper>
                        <SliderDiv>
                            <Slider
                                size="small"
                                color="secondary"
                                value={creditPeriod}
                                step={1}
                                min={6}
                                max={60}
                                onChange={(e) => handlePeriodChange(e)}
                            />
                            <div className="range">
                                <span>6 месяцев</span>
                                <span>5 лет</span>
                            </div>
                        </SliderDiv>
                        <SliderValue>{creditPeriod} месяцев</SliderValue>
                    </SliderWrapper>

                    <SwitchWrapper>
                        <StyledSwitch checked={discount} onChange={handleSwitchChange}/>
                        <p>Я получаю запрплату по карте ForteBank</p>
                    </SwitchWrapper>

                    <UnfocusedText>
                        Для точного расчета необходимо оставить заявку
                    </UnfocusedText>
                </CreditCalculatorLeft>

                <CreditCalculatorRight>
                    <div>
                        <CreditRightBlockTitle>Ежемесячный платеж</CreditRightBlockTitle>
                        <CreditMonthlyValue>
                            {Math.round(monthlyPaymentCalculation()).toLocaleString('ru-RU')} ₸
                        </CreditMonthlyValue>
                    </div>

                    <div>
                        <CreditRightBlockTitle>Ставка вознаграждения</CreditRightBlockTitle>
                        <CreditRateValue>{creditRate}%</CreditRateValue>
                    </div>

                    <CreditButton>Оформить кредит</CreditButton>
                </CreditCalculatorRight>
            </CreditCalculatorGrid>
        </>
    )
}

export default DesktopCalculator;