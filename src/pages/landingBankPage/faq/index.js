import React from 'react';
import { SectionWrapper, FaqElementWrapper, FaqWrapper } from '../../../components/wrappers';

// Images
import FAQ from '../../../assets/faq.png';

export default function FaqSection() {
    return (
        <SectionWrapper>
            <FaqWrapper>
                <FaqElementWrapper>
                    <img src={FAQ} alt="faq"/>
                    <p className="faq-question">Как проверить, наложен ли на счет арест/ПТП?</p>
                    <p className="faq-answer">Информацию о том, наложен ли арест на ваш счёт вы можете узнать: - на сайте Министерства юстиции РК в реестре должников по исполнительным производствам; - в личном кабинете на портале электронного правительства e-gov.kz.</p>
                </FaqElementWrapper>
                <FaqElementWrapper>
                    <img src={FAQ} alt="faq"/>
                    <p className="faq-question">Где посмотреть выписку по карте?</p>
                    <p className="faq-answer">Выписку по карте вы сможете посмотреть в своем Мобильном приложении либо, обратившись в ближайшее отделение Банка.</p>
                </FaqElementWrapper>
                <FaqElementWrapper>
                    <img src={FAQ} alt="faq"/>
                    <p className="faq-question">Что такое CVC2/CVV2?</p>
                    <p className="faq-answer">CVC2/CVV2 — это трехзначный код, указанный на оборотной стороне карты, на панели для подписи.</p>
                </FaqElementWrapper>
            </FaqWrapper>
        </SectionWrapper>
    )
}