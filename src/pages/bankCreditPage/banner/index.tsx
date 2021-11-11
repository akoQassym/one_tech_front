import React from 'react';

import BannerImg from '../../../assets/bankCreditBanner.png';
import { 
    BannerWrapper,
    TextBlock,
    PageName,
    BannerTitle,
    BannerDescription,
    BannerImage,
    BannerButton
} from './style.module';

const Banner: React.FC = () => {
    return (
        <BannerWrapper>
            {
                document.documentElement.clientWidth < 550 ?
                    <>
                        <TextBlock>
                            <BannerTitle>Экспресс-кредит</BannerTitle>
                            <BannerDescription>Кредит без залога</BannerDescription>
                            <BannerImage src={BannerImg} />
                            <BannerButton>Получить кредит</BannerButton>
                        </TextBlock> 
                    </>
                :
                    <>
                        <TextBlock>
                            <PageName>Forte - Банк - Кредиты - Экспресс-кредит</PageName>
                            <BannerTitle>Экспресс-кредит</BannerTitle>
                            <BannerDescription>Кредит без залога</BannerDescription>
                            <BannerButton>Получить кредит</BannerButton>
                        </TextBlock>
                        <BannerImage src={BannerImg} />
                    </>
            }
        </BannerWrapper>            
    )
}

export default Banner;