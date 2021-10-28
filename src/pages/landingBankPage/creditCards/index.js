import React from 'react';
import Carousel from 'react-material-ui-carousel';

import { SectionWrapper, CardWrapper } from '../../../components/wrappers';
import { CardImgWrapper } from '../../../components/images';
import { BuyCardButton } from '../../../components/buttons';
import { SectionTitle } from '../../../components/titles';

// Images
import ClassicCard from '../../../assets/classicCard.png';
import GoldCard from '../../../assets/goldCard.png';
import PlatinumCard from '../../../assets/platinumCard.png';

export default function CardsSection() {
    return (
        <SectionWrapper>
            <SectionTitle>Forte карты</SectionTitle>
            <div className="card-div">
                <CardWrapper>
                    <CardImgWrapper src={ClassicCard} alt="Classic Card" />
                    <p className="card-name">Classic</p>
                    <p className="card-price">Выпуск карты бесплатно</p>
                    <p className="card-capacity">Снятие до 300 000 ₸ в месяц Казахстана бесплатно</p>
                    <p className="card-cashback">CashBack до 15%</p>
                    <BuyCardButton>Заказать карту</BuyCardButton>
                </CardWrapper>
                <CardWrapper>
                    <CardImgWrapper src={GoldCard} alt="Gold Card" />
                    <p className="card-name">Gold</p>
                    <p className="card-price">Выпуск карты бесплатно</p>
                    <p className="card-capacity">Снятие до 500 000 ₸ в месяц Казахстана бесплатно</p>
                    <p className="card-cashback">CashBack до 15%</p>
                    <BuyCardButton>Заказать карту</BuyCardButton>
                </CardWrapper>
                <CardWrapper>
                    <CardImgWrapper src={PlatinumCard} alt="Platinum Card" />
                    <p className="card-name">Platinum</p>
                    <p className="card-price">Выпуск карты бесплатно</p>
                    <p className="card-capacity">Снятие до 3 000 000 ₸ в месяц Казахстана бесплатно</p>
                    <p className="card-cashback">CashBack до 15%</p>
                    <BuyCardButton>Заказать карту</BuyCardButton>
                </CardWrapper>
            </div>
            <Carousel
                autoPlay={false}
                navButtonsAlwaysInisible={true}
            >
                <div></div>
                <div></div>
                <div></div>
            </Carousel>
        </SectionWrapper>
    )
}