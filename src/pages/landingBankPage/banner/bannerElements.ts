import BannerImg from '../../../assets/bannerImg.png';
import BannerImg2 from '../../../assets/bannerImg2.webp';
import BannerImg3 from '../../../assets/bannerImg3.webp';
import BannerImg4 from '../../../assets/bannerImg4.webp';

const bannerElements: {
    page_name: string, 
    section_title: string, 
    section_desc: string, 
    image: string
}[] = [
    {
        page_name: 'Forte - Банк',
        section_title: 'До 3 000 000 ₸',
        section_desc: 'Покупки без процентов',
        image: BannerImg
    },
    {
        page_name: 'Forte - Банк',
        section_title: 'До 5 000 000 ₸',
        section_desc: 'Покупки без процентов без смс',
        image: BannerImg2
    },
    {
        page_name: 'Forte - Банк',
        section_title: 'До 7 000 000 ₸',
        section_desc: 'Покупки без процентов без смс и регистрации',
        image: BannerImg3
    },
    {
        page_name: 'Forte - Банк',
        section_title: 'До 10 000 000 ₸',
        section_desc: 'Покупки с процентами',
        image: BannerImg4
    },
]

export {bannerElements}