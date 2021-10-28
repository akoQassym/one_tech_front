import React, { useState } from 'react';
import { Switch, Slider } from '@mui/material';
import { 
    CreditCalculatorWrapper,
    CreditCalculatorGrid,
    SliderWrapper,
    SwitchWrapper
} from '../../../components/wrappers';
import { CreditButton } from '../../../components/buttons';
import { UnfocusedText, SectionTitle } from '../../../components/titles';

const MIN_AMOUNT = 10000;
const MIN_PERIOD = 6;

export default function CreditCalculator() {
    const [moneyAmount, setMoneyAmount] = useState(MIN_AMOUNT)
    const [creditPeriod, setCreditPeriod] = useState(MIN_PERIOD)
    const [discount, setDiscount] = useState(false)
    const creditRate = discount ? 16.99 : 18.99
    
    const handleSwitchChange = (value) => {
        setDiscount(value);
    }

    const monthlyPaymentCalculation = () => {
        let monthlyRate = creditRate / (100 * 12);
        let resultOfPower = Math.pow(1+monthlyRate, creditPeriod);
        let monthlyPayment = moneyAmount * (monthlyRate*resultOfPower) / (resultOfPower-1);
        return monthlyPayment;
    }

    return (
        <CreditCalculatorWrapper>
            <SectionTitle>Кредиты на любые цели</SectionTitle>
            <p>Предварительный расчет не является публичной офертой</p>
            <CreditCalculatorGrid>
                <div className="left-slider">
                    <p className="left-title">Сколько вам нужно?</p>

                    <SliderWrapper>
                        <div className="slider">
                            <Slider
                                size="small"
                                color="secondary"
                                value={moneyAmount}
                                step={10_000}
                                min={10000}
                                max={10_000_000}
                                onChange={(e) => setMoneyAmount(e.target.value)}
                            />
                            <div className="range">
                                <span>10 000 ₸</span>
                                <span>10 000 000 ₸</span>
                            </div>
                        </div>
                        <p className="slider-value">{moneyAmount.toLocaleString('ru-RU')} ₸</p>
                    </SliderWrapper>

                    <p className="left-title">Срок кредитования</p>

                    <SliderWrapper>
                        <div className="slider">
                        <Slider
                            size="small"
                            color="secondary"
                            value={creditPeriod}
                            step={1}
                            min={6}
                            max={60}
                            onChange={(e) => setCreditPeriod(e.target.value)}
                        />
                        <div className="range">
                            <span>6 месяцев</span>
                            <span>5 лет</span>
                        </div>
                        </div>
                        <p className="slider-value">{creditPeriod} месяцев</p>
                    </SliderWrapper>

                    <SwitchWrapper>
                        <Switch
                            checked={discount}
                            onChange={(e) => handleSwitchChange(e.target.checked)}
                            inputProps={{ 'aria-label': 'Switch demo' }}
                            size='small'
                            edge='start'
                            color='secondary'
                            sx={{
                                padding: '4px 4px 3px 0',
                                borderRadius: '10px',
                                backgroundColor: 'lightGray'
                            }}
                        />
                        <p>Я получаю запрплату по карте ForteBank</p>
                    </SwitchWrapper>

                    <UnfocusedText>
                        Для точного расчета необходимо оставить заявку
                    </UnfocusedText>
                </div>

                <div className="right-result">
                    <div>
                        <p className="right-title">Ежемесячный платеж</p>
                        <p className="credit-month">
                            {Math.round(monthlyPaymentCalculation()).toLocaleString('ru-RU')} ₸
                        </p>
                    </div>

                    <div>
                        <p className="right-title">Ставка вознаграждения</p>
                        <p className="credit-rate">{creditRate}%</p>
                    </div>

                    <CreditButton>Оформить кредит</CreditButton>
                </div>
            </CreditCalculatorGrid>
            
        </CreditCalculatorWrapper>
    )
}