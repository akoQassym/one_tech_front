import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { theme } from '../../../utils/theme';
import { faqs } from './faqs';
import { cards } from './cards';
import { SectionWrapper } from '../../../components/wrappers';
import { BlockTitle } from '../../../components/titles';
import { 
    CardTitle, 
    CardContent, 
    AccordionFaqQuestion, 
    AccordionFaqAnswer, 
    FaqAccordion, 
    SubContent 
} from './style.module';

const MainFile: React.FC = () => {
    return (
        <SectionWrapper>
            <p className="section-title">Кредит выдаём гражданам Казахстана</p>
            <Stack
                direction= {document.documentElement.clientWidth < 550 ? 'column' : 'row'}
                justifyContent="left"
                alignItems="baseline"
                spacing={2}
            >
                {
                    cards.map((cardElement) => {
                        return (
                            <Paper
                                sx={{
                                    backgroundColor: theme.colors.gray,
                                    padding: '24px',
                                    width: '220px'
                                }}
                            >
                                <CardTitle>{cardElement.cardTitle}</CardTitle>
                                <CardContent>{cardElement.cardContent}</CardContent>
                            </Paper>
                        )
                    })
                }
            </Stack>

            <FaqAccordion>
                <BlockTitle>Частые вопросы про кредит</BlockTitle>
                {
                    faqs.map((faqElement, key) => {
                        return (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    area-controls={'panel' + key + 'a-content'}
                                    id={'panel' + key + 'a-header'}
                                >
                                    <AccordionFaqQuestion>{faqElement.question}</AccordionFaqQuestion>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <AccordionFaqAnswer>{faqElement.answer}</AccordionFaqAnswer>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            <SubContent>
                Если не нашли ответа на свой вопрос, позвоните на <a href="#" style={{fontWeight: 500}}>7575</a> или напишите на электронный адрес <a href="#" style={{fontWeight: 500}}>callcenter@forte.bank</a>
            </SubContent>
            </FaqAccordion>

            
        </SectionWrapper>
    )
}

export default MainFile;