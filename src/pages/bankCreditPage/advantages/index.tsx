import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { theme } from '../../../utils/theme';
import { advantages } from './advantages';
import { SectionWrapper } from '../../../components/wrappers';
import { BlockTitle } from '../../../components/titles';
import { 
    AdvantageTitle,
    AdvantageContent
} from './style.module';

const MainFile: React.FC = () => {
    return (
        <SectionWrapper>
            <BlockTitle>Частые вопросы про кредит</BlockTitle>
            <div style={{margin: '2% 0 3% 0'}}>
                {
                    advantages.map((advantageElement, key) => {
                        return (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    area-controls={'panel' + key + 'a-content'}
                                    id={'panel' + key + 'a-header'}
                                >
                                    <AdvantageTitle>{advantageElement.title}</AdvantageTitle>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <AdvantageContent>{advantageElement.info}</AdvantageContent>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </div>

        </SectionWrapper>
    )
}

export default MainFile;