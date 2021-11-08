import Dollar from '../../../assets/USD_KZT.svg';
import Euro from '../../../assets/EUR_KZT.svg';
import Ruble from '../../../assets/RUB_KZT.svg';
import Sterling from '../../../assets/GBP_KZT.svg';

const currencies_img: {
    img: string,
    pair: string,
    ticker: string
}[] = [
    {
        img: Dollar,
        pair: 'USD_KZT',
        ticker: 'USD'
    },
    {
        img: Euro,
        pair: 'EUR_KZT',
        ticker: 'EUR'
    },
    {
        img: Ruble,
        pair: 'RUB_KZT',
        ticker: 'RUB'
    },
    {
        img: Sterling,
        pair: 'GBP_KZT',
        ticker: 'GBP'
    }
]

export {currencies_img}