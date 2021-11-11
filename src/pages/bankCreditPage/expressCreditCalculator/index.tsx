import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Slider } from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { theme } from '../../../utils/theme';

import { SectionWrapper } from '../../../components/wrappers';
import { StyledSwitch } from '../../../components/textFields';
import { 
    CalculatorTitle,
    SliderBlock,
    SliderDiv,
    FormButton,
    SliderRange,
    CalculationResultsBlock,
    CalculationResultDiv,
    SwitchWrapper,
    SwitchValue,
    PeriodBlock,
    AdditionalInfo,
    FormWrapper
} from './style.module';

const MIN_AMOUNT = 10000;
const PERIOD_ARR = [6, 12, 18, 24, 36, 48, 60];

const ExpressCreditCalculator: React.FC = () => {
    const [moneyAmount, setMoneyAmount] = useState<number>(MIN_AMOUNT);
    const [periodValue, setPeriodValue] = useState<number | null>(PERIOD_ARR[0]);
    const [discount, setDiscount] = useState<boolean>(false);
    const [showFlag, setShowFlag] = useState<boolean>(false);
    const [iin, setIin] = useState<string | null>(null);
    const creditRate = discount ? 16.99 : 18.99;

    const handleMoneyChange = (e: any) => {
        setMoneyAmount(parseInt(e.target.value));
    }

    const handlePeriodBlockClick = (period: number) => {
        setPeriodValue(period);
    }

    const handleSwitchChange = () => {
        setDiscount(prev => !prev);
    }

    const handleClickShowFlag = () => {
        setShowFlag(!showFlag);
    };

    const monthlyPaymentCalculation = () => {
        let monthlyRate = creditRate / (100 * 12);
        let resultOfPower = Math.pow(1+monthlyRate, periodValue);
        let monthlyPayment = moneyAmount * (monthlyRate*resultOfPower) / (resultOfPower-1);
        return monthlyPayment;
    }

    const handleIinChange = (e: any) => {
        setIin(e.target.value);
    }

    return (
        <SectionWrapper>
            <CalculatorTitle>Рассчитать Экспресс-кредит</CalculatorTitle>
            <Paper
                sx={{
                    backgroundColor: theme.colors.milkyGray,
                    padding: '4% 7%',
                    borderRadius: '4px',
                    maxWidth: '700px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{
                        width: '100%'
                    }}
                >
                    <SliderBlock>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <p style={{fontWeight: 400}}>Сумма кредита</p>
                            <SwitchValue><p>{moneyAmount.toLocaleString('ru-RU')} ₸</p></SwitchValue>
                        </Stack>
                        <SliderDiv>
                            <Slider
                                size="small"
                                color="secondary"
                                value={moneyAmount}
                                step={10_000}
                                min={100_000}
                                max={7_000_000}
                                onChange={(e) => handleMoneyChange(e)}
                            />
                            <SliderRange>
                                <span>100 000 ₸</span>
                                <span>7 000 000 ₸</span>
                            </SliderRange>
                        </SliderDiv>
                        <p>Срок кредита</p>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{
                                padding: '2% 0'
                            }}
                        >
                            {
                                PERIOD_ARR.map((period, key) => {
                                    return (
                                        <PeriodBlock
                                            style={{
                                                opacity: periodValue === period ? '100%' : '60%'
                                            }}
                                            onClick={() => handlePeriodBlockClick(period)}
                                            key={key}
                                        >{period}</PeriodBlock>
                                    )
                                })
                            }
                        </Stack>
                        <AdditionalInfo>Срок в месяцах</AdditionalInfo>
                    </SliderBlock>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={2}
                        sx={{
                            width: '100%',
                            borderTop: `1px solid ${theme.colors.lightGray}`,
                            padding: '4% 0' 
                        }}
                    >
                        <CalculationResultsBlock>
                            <CalculationResultDiv>
                                <p className="resultTitle">Ежемесячный платеж</p>
                                <p className="resultValue">{Math.round(monthlyPaymentCalculation()).toLocaleString('ru-RU')} ₸</p>
                            </CalculationResultDiv>
                            <CalculationResultDiv>
                                <p className="resultTitle">Ставка вознаграждения</p>
                                <p className="resultValue">{creditRate}%</p>
                            </CalculationResultDiv>
                        </CalculationResultsBlock>
                        <SwitchWrapper>
                            <StyledSwitch checked={discount} onChange={handleSwitchChange}/>
                            <p>Я получаю запрплату по карте ForteBank</p>
                        </SwitchWrapper>
                    </Stack>
                    <FormWrapper>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showFlag ? 'text' : 'password'}
                            value={iin}
                            onChange={(e) => handleIinChange(e)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowFlag}
                                        edge="end"
                                    >
                                    {showFlag ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            required={true}
                            sx={{
                                width: '100%',
                            }}
                            placeholder="ИИН *"
                        />
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{
                                padding: '4% 0 2% 0',
                                width: '100%'
                            }}
                        >
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type="text"
                                value={iin}
                                onChange={(e) => handleIinChange(e)}
                                required={true}
                                placeholder="Номер телефона *"
                                sx={{
                                    width: '48%'
                                }}
                            />
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type="number"
                                value={iin}
                                onChange={(e) => handleIinChange(e)}
                                required={true}
                                placeholder="Основной ежемесяч. доход, ₸ *"
                                sx={{
                                    width: '48%'
                                }}
                            />
                        </Stack>
                        <p style={{fontSize: '14px'}}>Продолжая я подтверждаю, что ознакомился с <a href="#">условиями соглашения</a> и даю согласие на обработку своих персональных данных</p>
                        <p style={{fontSize: '14px', color: '#737373'}}>Для точного расчета необходимо оставить заявку</p>
                        <FormButton>Получить кредит</FormButton>
                    </FormWrapper>
                    
                </Stack>
            </Paper>
        </SectionWrapper>
    )

}

export default ExpressCreditCalculator;