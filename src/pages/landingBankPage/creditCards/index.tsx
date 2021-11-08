import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Stack from '@mui/material/Stack';

import { SectionWrapper } from '../../../components/wrappers';
import { SectionTitle } from '../../../components/titles';
import { CardWrapper, CardImgWrapper, BuyCardButton } from './style.module';
import { cards } from './cards';

const CardsSection: React.FC = () => {
    return (
        <SectionWrapper>
            <SectionTitle>Forte карты</SectionTitle>
            {
                document.documentElement.clientWidth > 550 ?
                    <>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="baseline"
                            spacing={2}
                        >
                            {cards.map((cardElement, key) => {
                                return (
                                    <CardWrapper key={key}>
                                        <CardImgWrapper src={cardElement.img} alt="Classic Card" />
                                        <p className="card-name">{cardElement.name}</p>
                                        <p className="card-price">{cardElement.price}</p>
                                        <p className="card-capacity">{cardElement.capacity}</p>
                                        <p className="card-cashback">{cardElement.cashback}</p>
                                        <BuyCardButton>Заказать карту</BuyCardButton>
                                    </CardWrapper>
                                )
                            })}
                        </Stack>
                        <Carousel
                            autoPlay={false}
                            navButtonsAlwaysInvisible={true}
                            indicatorIconButtonProps={{
                                style: {
                                    margin: '0 10px',
                                }
                            }}
                        >
                            <div></div>
                            <div></div>
                            <div></div>
                        </Carousel>
                    </>
                :
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="baseline"
                    >
                        <Carousel
                            autoPlay={false}
                            navButtonsAlwaysInvisible={true}
                            swipe={true}
                            animation="slide"
                            indicatorIconButtonProps={{
                                style: {
                                    margin: '0 10px',
                                }
                            }}
                        >
                            {cards.map((cardElement, key) => {
                                return (
                                    <CardWrapper key={key}>
                                        <CardImgWrapper src={cardElement.img} alt="Classic Card" />
                                        <p className="card-name">{cardElement.name}</p>
                                        <p className="card-price">{cardElement.price}</p>
                                        <p className="card-capacity">{cardElement.capacity}</p>
                                        <p className="card-cashback">{cardElement.cashback}</p>
                                        <BuyCardButton>Заказать карту</BuyCardButton>
                                    </CardWrapper>
                                )
                            })}
                        </Carousel>
                    </Stack>
            }
        </SectionWrapper>
    )
}

export default CardsSection;