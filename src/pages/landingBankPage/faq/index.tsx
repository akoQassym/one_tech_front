import React from 'react';
import Stack from '@mui/material/Stack';

import { SectionWrapper } from '../../../components/wrappers';
import { FaqElementWrapper, FaqQuestion, FaqAnswer } from './style.module';

import { faqQuestions } from './faqQuestions';

const FaqSection: React.FC = () => {
    return (
        <SectionWrapper>
            <Stack
                direction= {document.documentElement.clientWidth < 550 ? 'column' : 'row'}
                justifyContent="center"
                alignItems="baseline"
                spacing={2}
            >
                {faqQuestions.map((faqElement, key) => {
                    return (
                        <FaqElementWrapper key={key}>
                            <img src={faqElement.img} alt="faq"/>
                            <FaqQuestion>{faqElement.question}</FaqQuestion>
                            <FaqAnswer>{faqElement.answer}</FaqAnswer>
                        </FaqElementWrapper>
                    )
                })}
            </Stack>
        </SectionWrapper>
    )
}

export default FaqSection;