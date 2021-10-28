import React from 'react';
import { BannerWrapper } from '../../../components/wrappers';
import { BannerButton, BannerIndicator } from '../../../components/buttons';
import Carousel from 'react-material-ui-carousel';

// Images
import BannerImg from '../../../assets/bannerImg.png';
import BannerImg2 from '../../../assets/bannerImg2.webp';
import BannerImg3 from '../../../assets/bannerImg3.webp';
import BannerImg4 from '../../../assets/bannerImg4.webp';

const banners = [
    {
        page_name: 'Forte - Банк',
        section_title: 'До 3 000 000 ₸',
        section_desc: 'Покупки без процентов',
        image: <BannerImg/>
    },
    {
        page_name: 'Forte - Банк',
        section_title: 'До 5 000 000 ₸',
        section_desc: 'Покупки без процентов без смс',
        image: <BannerImg2/>
    },
    {
        page_name: 'Forte - Банк',
        section_title: 'До 7 000 000 ₸',
        section_desc: 'Покупки без процентов без смс и регистрации',
        image: <BannerImg3/>
    },
    {
        page_name: 'Forte - Банк',
        section_title: 'До 10 000 000 ₸',
        section_desc: 'Покупки с процентами',
        image: <BannerImg4/>
    },
]

export default function Banner() {
    return (
        <Carousel
            autoPlay={true}
            animation={'slide'}
            navButtonsAlwaysVisible={true}
            fullHeightHover={false}
            navButtonsProps={{
                style: {
                    backgroundColor: 'white',
                    color: 'purple',
                    marginTop: '1.5rem'
                }
            }} 
            navButtonsWrapperProps={{
                style: {
                    padding: '0 8%'
                }
            }}
            IndicatorIcon={<BannerIndicator/>}
            indicatorIconButtonProps={{
                style: {
                    paddingRight: '10px'
                }
            }}
            indicatorContainerProps={{
                style: {
                    position: 'absolute',
                    textAlign: 'left',
                    bottom: '6%',
                    marginLeft: '15%',
                }
        
            }}
        >
            {
                banners.map((item, key) => 
                    <BannerWrapper key={key}>
                        <div className="left">
                            <p className="page-name">{item.page_name}</p>
                            <p className="section-title-huge">{item.section_title}</p>
                            <p className="section-desc">{item.section_desc}</p>
                            <BannerButton>Подробнее</BannerButton>
                        </div>
                        <div>
                            <img src={item.image.type} />
                        </div>
                    </BannerWrapper>
                )
            }
        </Carousel>
        
    )
}