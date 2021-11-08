import React from 'react';
import Stack from '@mui/material/Stack';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import { VisuallyImpairedButton } from '../../../components/buttons';
import { LogoWrapper } from '../../../components/images';

import {
    FooterWrapper,
    FooterNavElement,
    FooterNavTitle,
    FooterNavLinkMail,
    FooterNavLink,
    FooterBottom,
    FooterBootomLeft,
    FooterBottomRight,
    AccordionSummaryText,
    StyledAccordion
} from './style.module';
import { footer_nav_content } from './footerContent';

// Images
import Instagram from '../../../assets/instagram.svg';
import Facebook from '../../../assets/facebook.svg';
import Youtube from '../../../assets/youtube.svg';
import Tiktok from '../../../assets/tiktok.svg';

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <Stack
                direction="column"
                justifyContent="center"
            >
                { document.documentElement.clientWidth < 550 ?
                    footer_nav_content.map((footerElement) => {
                        return (
                            <StyledAccordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        display: 'flex !important',
                                        justifyContent: 'space-between' 
                                    }}
                                >
                                    <AccordionSummaryText>{footerElement.title}</AccordionSummaryText>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        padding: 0,
                                    }}
                                >
                                    {footerElement.links.map((footerLink, footerLinkKey) => {
                                        return (
                                            footerLink.link_type === 'mailLink' ?
                                                <FooterNavLinkMail key={footerLinkKey}>{footerLink.name}</FooterNavLinkMail>
                                            :
                                                <FooterNavLink key={footerLinkKey}>{footerLink.name}</FooterNavLink>
                                        )
                                    })}
                                </AccordionDetails>
                            </StyledAccordion>
                        )
                    })
                    
                :
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        sx={{
                            padding: '3% 0 2% 0',
                            borderBottom: '1px solid #BDBDBD'
                        }}
                    >
                        {
                            footer_nav_content.map((footerElement, footerElemKey) => {
                                return (
                                    <FooterNavElement key={footerElemKey}>
                                        <FooterNavTitle>{footerElement.title}</FooterNavTitle>
                                        {footerElement.links.map((footerLink, footerLinkKey) => {
                                            return (
                                                footerLink.link_type === 'mailLink' ?
                                                    <FooterNavLinkMail key={footerLinkKey}>{footerLink.name}</FooterNavLinkMail>
                                                :
                                                    <FooterNavLink key={footerLinkKey}>{footerLink.name}</FooterNavLink>
                                            )
                                        })}
                                    </FooterNavElement>
                                )
                            })
                        }
                    </Stack>
                }
                

                <FooterBottom>
                    <FooterBootomLeft>
                        <div className="text">
                            <p className="call-to-action">Оставить обратную связь</p>
                            <p>Все права защищены © forte 2020</p>
                        </div>
                        <div className="social-media">
                            <LogoWrapper src={Instagram}/>
                            <LogoWrapper src={Facebook}/>
                            <LogoWrapper src={Youtube}/>
                            <LogoWrapper src={Tiktok}/>
                        </div>
                    </FooterBootomLeft>
                    <FooterBottomRight>
                        <VisuallyImpairedButton endIcon={<RemoveRedEyeIcon/>}>
                            Версия для слабовидящих:
                        </VisuallyImpairedButton>
                    </FooterBottomRight>    
                </FooterBottom>
            </Stack>
        </FooterWrapper>
    )
}

export default Footer;