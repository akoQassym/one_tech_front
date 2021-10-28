import React from 'react';
import { 
    FooterWrapper
} from '../../../components/wrappers';
import Button from '@mui/material/Button';
import { LogoWrapper } from '../../../components/images';

// Images
import Instagram from '../../../assets/instagram.svg';
import Facebook from '../../../assets/facebook.svg';
import Youtube from '../../../assets/youtube.svg';
import Tiktok from '../../../assets/tiktok.svg';
import Eyes from '../../../assets/eyes.svg';

export default function Header() {
    return (
        <FooterWrapper>
            <div className="footer">
                <div className="footer-nav">
                    <div className="footer-nav-element">
                        <p className="footer-nav-title">Банк</p>
                        <p className="footer-nav-content">Кредиты</p>
                        <p className="footer-nav-content">Карты</p>
                        <p className="footer-nav-content">Депозиты</p>
                        <p className="footer-nav-content">Переводы</p>
                        <p className="footer-nav-content">Мобильное приложение</p>
                        <p className="footer-nav-content">Тарифы</p>
                        <p className="footer-nav-content">Сейфовые ячейки</p>
                    </div>
                    <div className="footer-nav-element">
                        <p className="footer-nav-title">О нас</p>
                        <p className="footer-nav-content">Информация</p>
                        <p className="footer-nav-content">Руководство</p>
                        <p className="footer-nav-content">Отчетность</p>
                        <p className="footer-nav-content">Документы</p>
                        <p className="footer-nav-content">Контакты</p>
                        <p className="footer-nav-content">Отделения и банкоматы</p>
                        <p className="footer-nav-content">Отделения в период карантина</p>
                        <p className="footer-nav-content">Вакансии</p>
                    </div>
                    <div className="footer-nav-element">
                        <p className="footer-nav-title">Пресс-Центр</p>
                        <p className="footer-nav-content">Новости</p>
                        <p className="footer-nav-content">Пресс-релизы</p>
                        <p className="footer-nav-content">press@forte.kz</p>
                    </div>
                    <div className="footer-nav-element">
                        <p className="footer-nav-title">Дополнительно</p>
                        <p className="footer-nav-content">Premier</p>
                        <p className="footer-nav-content">International Relations</p>
                        <p className="footer-nav-content">Реализация имущества</p>
                        <p className="footer-nav-content">175-летие Абая</p>
                        <p className="footer-nav-content">Apple Pay</p>
                        <p className="footer-nav-content">Samsung Pay</p>
                        <p className="footer-nav-content">ForteForex</p>
                        <p className="footer-nav-content">Социальные предложения</p>
                    </div>
                </div>
                <div className="footer-bottom">
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
                    {/* <div>
                        <Button variant="contained" endIcon={<Eyes />}>
                            Версия для слабовидящих
                        </Button>
                    </div>     */}
                </div>
            </div>    
            
        </FooterWrapper>
    )
}