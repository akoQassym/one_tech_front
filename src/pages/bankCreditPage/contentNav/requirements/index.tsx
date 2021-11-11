import React from 'react';
import Stack from '@mui/material/Stack';

import { requirements } from './requirements';
import { SectionWrapper } from '../../../../components/wrappers';
import { RequirementWrapper, UpperBlockWrapper, LowerBlockWrapper, LowerBlockTitle, LowerBlockContent } from './style.module';

const Requirements: React.FC = () => {
    return (
        <SectionWrapper>
            <p className="section-title">Получить кредит на выгодных условиях</p>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                {
                    requirements.map((requirementElement, key) => {
                        return (
                            <RequirementWrapper key={key}>
                                <UpperBlockWrapper>
                                    <p style={{fontSize: '24px', fontWeight: 500}}>{requirementElement.title}</p>
                                </UpperBlockWrapper>
                                <LowerBlockWrapper>
                                    {
                                        requirementElement.content.map(contentElement => {
                                            return (
                                                <>
                                                    <LowerBlockTitle>{contentElement.lowerTitle}</LowerBlockTitle>
                                                    <LowerBlockContent>{contentElement.lowerContent}</LowerBlockContent>
                                                </>
                                            )
                                        })
                                    }
                                </LowerBlockWrapper>
                            </RequirementWrapper>
                        )
                        
                    })
                }
                
            </Stack>
        </SectionWrapper>
    )

}

export default Requirements;