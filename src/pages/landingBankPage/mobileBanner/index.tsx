import React from 'react';
import Stack from '@mui/material/Stack';

import {
    MobileBannerWrapper,
    MobileBannerContent,
    DownloadLink,
    MobileBannerImage
} from './style.module';
import { BlockTitle } from '../../../components/titles';

// Images
import ForteMobile from '../../../assets/forteMobile.png';
import AppStore from '../../../assets/appStore.png';
import GooglePlay from '../../../assets/googlePlay.png';

const APP_STORE_LINK = 'https://apps.apple.com/kz/app/forte/id1501520153';
const GOOGLE_PLAY_LINK = 'https://play.google.com/store/apps/details?id=kz.forte.app.store&hl=ru&gl=US';

const MobileBannerSection: React.FC = () => {
    return (
        <MobileBannerWrapper>
            <MobileBannerContent>
                <BlockTitle>Попробуйте мобильное приложение Forte</BlockTitle>
                <ul>
                    <li>Оплата платежей</li>
                    <li>Денежные переводы</li>
                    <li>Управление лимитами</li>
                </ul>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={document.documentElement.clientWidth < 550 ? 'center' : 'flex-start'}
                    spacing={3}
                >
                    <DownloadLink href={APP_STORE_LINK}>
                        <img src={AppStore} />
                    </DownloadLink>
                    <DownloadLink href={GOOGLE_PLAY_LINK}>
                        <img src={GooglePlay} />
                    </DownloadLink>
                </Stack> 
            </MobileBannerContent>
            <MobileBannerImage src={ForteMobile}/>
        </MobileBannerWrapper>
    )
}

export default MobileBannerSection;