import React from 'react';
import { Stack } from '@mui/material';

import { BlockTitle } from '../../../components/titles';
import { GraphicBlockContent, AdditionalContent } from './style.module';

import MoneyMiniIcon from '../../../assets/moneyMini.svg';
import CalendarIcon from '../../../assets/calendar.svg';
import PercentIcon from '../../../assets/percent.svg';

const InfoGraphics: React.FC = () => {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{
                textAlign: 'center',
                margin: '2% 0 5% 0'
            }}
        >
            <BlockTitle>Получить кредит на выгодных условиях</BlockTitle>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                sx={{
                    padding: '0 0 1% 0'
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <img src={MoneyMiniIcon} />
                    <GraphicBlockContent>До 7 000 000 ₸</GraphicBlockContent>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <img src={CalendarIcon} />
                    <GraphicBlockContent>До 5 лет</GraphicBlockContent>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <img src={PercentIcon} />
                    <GraphicBlockContent>От 7% годовых</GraphicBlockContent>
                </Stack>
            </Stack>
            <AdditionalContent>Рассчитаем займ с минимальной ставкой в тот же день <br/>и сразу сообщим о решении</AdditionalContent>
        </Stack>            
    )
}

export default InfoGraphics;