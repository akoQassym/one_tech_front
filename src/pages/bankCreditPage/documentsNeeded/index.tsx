import React from 'react';
import Stack from '@mui/material/Stack';

import { SectionWrapper } from '../../../components/wrappers';
import { BlockTitle } from '../../../components/titles';

import IdCard from '../../../assets/idCard.svg';
import Contract from '../../../assets/contract.svg';
import { AdditionalInfo } from './style.module';

const Documents: React.FC = () => {
    return (
        <SectionWrapper>
            <BlockTitle>Документы для получения кредита</BlockTitle>
            <Stack
                direction="row"
                justifyContent="left"
                alignItems="center"
                spacing={2}
                sx={{
                    margin: '3% 0'
                }}
            >
                <img src={IdCard}/>
                <p>Удостоверение личности</p>
            </Stack>
            <Stack
                direction="row"
                justifyContent="left"
                alignItems="center"
                spacing={2}
                sx={{
                    margin: '3% 0'
                }}
            >
                <img src={Contract}/>
                <p>Заполнить анкету</p>
            </Stack>
            <AdditionalInfo>Задать вопросы можете по номеру <a href="#">7575</a> или письмом на <br/>электронный адрес <a href="#">callcenter@forte.bank</a></AdditionalInfo>
        </SectionWrapper>
    )
}

export default Documents;