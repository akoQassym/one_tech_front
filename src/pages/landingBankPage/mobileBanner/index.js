import React from 'react';
import { MobileBannerWrapper } from '../../../components/wrappers';
import { BlockTitle } from '../../../components/titles';

// Images
import ForteMobile from '../../../assets/forteMobile.png';
import AppStore from '../../../assets/appStore.png';
import GooglePlay from '../../../assets/googlePlay.png';

const APP_STORE_LINK = 'https://apps.apple.com/kz/app/forte/id1501520153';
const GOOGLE_PLAY_LINK = 'https://play.google.com/store/apps/details?id=kz.forte.app.store&hl=ru&gl=US';

export default function MobileBannerSection() {
    return (
        <MobileBannerWrapper>
            <div className="left-content">
                <BlockTitle>Попробуйте мобильное приложение Forte</BlockTitle>
                <ul>
                    <li>Оплата платежей</li>
                    <li>Денежные переводы</li>
                    <li>Управление лимитами</li>
                </ul>
                <div className="image-group">
                    <a href={APP_STORE_LINK} target="_blank" rel="noopener noreferrer">
                        <img src={AppStore} />
                    </a>
                    <a href={GOOGLE_PLAY_LINK} target="_blank" rel="noopener noreferrer">
                        <img src={GooglePlay} />
                    </a>
                </div> 
            </div>
            <img src={ForteMobile}/>
        </MobileBannerWrapper>
    )
}