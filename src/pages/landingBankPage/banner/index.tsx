import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Indicator from '../../../assets/Indicator.svg';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { 
    BannerWrapper,
    TextBlock,
    PageName,
    BannerTitle,
    BannerDescription,
    BannerImage,
    BannerButton
} from './style.module';
import { bannerElements } from './bannerElements';

console.log(Indicator, FiberManualRecordIcon)

const Banner: React.FC = () => {
    return (
        <Carousel
            autoPlay={true}
            animation={'slide'}
            navButtonsAlwaysVisible={document.documentElement.clientWidth < 550 ? false : true}
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
            IndicatorIcon={<img src={Indicator} />}
            activeIndicatorIconButtonProps={{
                style: {
                    filter: 'invert(13%) sepia(11%) saturate(2910%) hue-rotate(181deg) brightness(20%) contrast(89%)'
                }
            }}
            indicatorIconButtonProps={{
                style: {
                    paddingRight: '10px',
                }
            }}
            indicatorContainerProps={{
                style: {
                    position: 'absolute',
                    textAlign: document.documentElement.clientWidth < 550 ? 'center' : 'left',
                    bottom: '6%',
                    marginLeft: document.documentElement.clientWidth < 550 ? '0px' : '15%',
                }
            }}
        >
            {
                bannerElements.map((item, key) => 
                    <BannerWrapper key={key}>
                        <TextBlock>
                            <PageName>{item.page_name}</PageName>
                            <BannerTitle>{item.section_title}</BannerTitle>
                            <BannerDescription>{item.section_desc}</BannerDescription>
                            <BannerButton>Подробнее</BannerButton>
                        </TextBlock>
                        <BannerImage src={item.image} />
                    </BannerWrapper>
                )
            }
        </Carousel>
    )
}

export default Banner;