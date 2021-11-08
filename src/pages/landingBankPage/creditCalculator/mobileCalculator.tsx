import React, { useState } from 'react';
import { Slider } from '@mui/material';
import Stack from '@mui/material/Stack';

import { UnfocusedText, SectionTitle } from '../../../components/titles';
import { StyledSwitch } from '../../../components/textFields';
import { 
    CreditCalculatorGrid,
    SliderWrapper,
    SwitchWrapper,
    CreditButton,
    CreditCalculatorLeft,
    CreditCalculatorRight,
    MobileCreditRightBlock,
    MobileSwitchBlock,
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

const MobileCalculator: React.FC = () => {
    const [moneyAmount, setMoneyAmount] = useState<number>(MIN_AMOUNT)
    const [creditPeriod, setCreditPeriod] = useState<number>(MIN_PERIOD)
    const [discount, setDiscount] = useState<boolean>(false)
    const creditRate = discount ? 16.99 : 18.99

    const handleMoneyChange = (e: any) => {
        setMoneyAmount(parseInt(e.target.value));
    }

    const handlePeriodChange = (e: any) => {
        setCreditPeriod(parseInt(e.target.value));
    }
    
    const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDiscount(
            e.target.value === 'true' ? true : false
        );
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
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <CreditLeftTitle>Сколько вам нужно?</CreditLeftTitle>
                        <SliderValue>{moneyAmount.toLocaleString('ru-RU')} ₸</SliderValue>
                    </Stack>
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
                    </SliderWrapper>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <CreditLeftTitle>Срок кредитования</CreditLeftTitle>
                        <SliderValue>{creditPeriod} месяцев</SliderValue>
                    </Stack>
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
                            <SliderRange>
                                <span>6 месяцев</span>
                                <span>5 лет</span>
                            </SliderRange>
                        </SliderDiv>
                    </SliderWrapper>
                </CreditCalculatorLeft>

                <CreditCalculatorRight>
                    <MobileCreditRightBlock>
                        <CreditRightBlockTitle>Ежемесячный платеж</CreditRightBlockTitle>
                        <CreditMonthlyValue>
                            {Math.round(monthlyPaymentCalculation()).toLocaleString('ru-RU')} ₸
                        </CreditMonthlyValue>
                    </MobileCreditRightBlock>

                    <MobileCreditRightBlock>
                        <CreditRightBlockTitle>Ставка вознаграждения</CreditRightBlockTitle>
                        <CreditRateValue>{creditRate}%</CreditRateValue>
                    </MobileCreditRightBlock>

                    <MobileSwitchBlock>
                        <SwitchWrapper>
                            <StyledSwitch checked={discount} onChange={(e) => handleSwitchChange(e)}/>
                            <p>Я получаю запрплату по карте ForteBank</p>
                        </SwitchWrapper>
                        <UnfocusedText>
                            Для точного расчета необходимо оставить заявку
                        </UnfocusedText>
                    </MobileSwitchBlock>
                    <CreditButton>Оформить кредит</CreditButton>
                </CreditCalculatorRight>
            </CreditCalculatorGrid>
            
        </>
    )
}

export default MobileCalculator;