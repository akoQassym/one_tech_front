import React from 'react';
import { 
    BannerWrapper
} from '../../../components/wrappers';
import { BannerButton } from '../../../components/buttons';

// Images
import BannerImg from '../../../assets/bannerImg.png';

export default function Header() {
    return (
        <BannerWrapper>
            <div className="left">
                <p className="page-name">Fotre - Банк</p>
                <p className="section-title-huge">До 3 000 000 ₸</p>
                <p className="section-desc">Покупки без процентов</p>
                <BannerButton>Подробнее</BannerButton>
                <div className="span-div">
                    <span className="selected"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div>
                <img src={BannerImg} />
            </div>
        </BannerWrapper>
    )
}