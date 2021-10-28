import React, { useState, useEffect } from 'react';
import { 
    SectionWrapper,
    TableWrapper,
    ConverterWrapper
} from '../../../components/wrappers';
import { 
    SectionTitle, 
    BlockTitle 
} from '../../../components/titles';
import { CurrencyInput } from '../../../components/textFields';

import { getTodaysDate } from '../../../utils/getTodaysDate';
import { Loading } from '../../../components/loading';

// Images
import Dollar from '../../../assets/USD_KZT.svg';
import Euro from '../../../assets/EUR_KZT.svg';
import Ruble from '../../../assets/RUB_KZT.svg';
import Sterling from '../../../assets/GBP_KZT.svg';
import Tenge from '../../../assets/KZT.svg';
import Converter from '../../../assets/Convert.png';

const API_KEY = process.env.REACT_APP_CURRENCY_API_KEY;
const BUY_SELL_RATIO = 0.98012087

const currencies_for_search = [
    'USD',
    'EUR',
    'RUB',
    'GBP'
]

const currencies_img = [
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


export default function Currency() {
    const [currencyToKZT, setCurrencyToKZT] = useState([]);
    const [loading, setLoading] = useState(true);
    const [convertFrom, setConvertFrom] = useState('');
    const [convertTo, setConvertTo] = useState('');
    const [convertationResult, setConvertationResult] = useState('');
    const [convertAmount, setConvertAmount] = useState('');

    const startFetching = () => {
        currencies_for_search.map(currency => fetchCurrencies(currency));
        setLoading(false);
    }

    async function fetchCurrencies(currency) {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }
        await fetch(`https://free.currconv.com/api/v7/convert?q=${currency}_KZT&compact=ultra&apiKey=${API_KEY}`, requestOptions)
            .then(res => res.json())
            .then(data => setCurrencyToKZT(prev => [...prev, {data: data}]));
    }

    async function handleConvertingCurrencies() {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }
        await fetch(`https://free.currconv.com/api/v7/convert?q=${convertFrom}_${convertTo}&compact=ultra&apiKey=${API_KEY}`, requestOptions)
            .then(res => res.json())
            .then(data => {
                let objKey = Object.keys(data);
                setConvertationResult((data[objKey]*convertAmount).toFixed(2));
            });
    }

    useEffect(() => {
        startFetching();
    }, [])

    const handleLoading = () => {
        if (loading) {
            return (
                <Loading/>
            )
        } else {
            return (
                <div className="flex-div">
                    <TableWrapper>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Покупка</th>
                            <th>Продажа</th>
                        </tr>
                        {currencyToKZT.map((currency, key) => {
                            let currencyObjKey = Object.keys(currency.data);
                            let currencyInfoObj = currencies_img.find(o => o.pair === currencyObjKey[0]);
                            return (
                                <tr key={key}>
                                    <td><img src={currencyInfoObj.img}/></td>
                                    <td>{currencyInfoObj.ticker}</td>
                                    <td>{(currency.data[currencyObjKey] * BUY_SELL_RATIO).toFixed(2)}</td>
                                    <td>{currency.data[currencyObjKey].toFixed(2)}</td>
                                </tr>
                            )
                        })}
                    </TableWrapper>
                    <ConverterWrapper>
                        <BlockTitle>Конвертация валюты</BlockTitle>
                        <table>
                            <tbody>
                                <tr className="tr">
                                    <td><CurrencyInput onChange={(e) => setConvertAmount(e.target.value)}/></td>
                                    <td className="cur-btn" onClick={() => setConvertFrom('USD')}>
                                        <img src={Dollar} className={convertFrom === 'USD' ? 'selected' : ''}/>
                                    </td>
                                    <td className="cur-btn" onClick={() => setConvertFrom('EUR')}>
                                        <img src={Euro} className={convertFrom === 'EUR' ? 'selected' : ''}/>
                                    </td>
                                    <td className="cur-btn" onClick={() => setConvertFrom('RUB')}>
                                        <img src={Ruble} className={convertFrom === 'RUB' ? 'selected' : ''}/>
                                    </td>
                                    <td className="cur-btn" onClick={() => setConvertFrom('GBP')}>
                                        <img src={Sterling} className={convertFrom === 'GBP' ? 'selected' : ''}/>
                                    </td>
                                    <td className="cur-btn" onClick={() => setConvertFrom('KZT')}>
                                        <img src={Tenge} className={convertFrom === 'KZT' ? 'selected' : ''}/>
                                    </td>
                                </tr>
                                <tr className="tr">
                                    <td><CurrencyInput disabled={true} value={convertationResult}/></td>
                                    <td className="cur-btn" onClick={() => setConvertTo('USD')}>
                                        <img src={Dollar} className={convertTo === 'USD' ? 'selected' : ''}/>
                                    </td>
                                    <td className="cur-btn" onClick={() => setConvertTo('EUR')}>
                                        <img src={Euro} className={convertTo === 'EUR' ? 'selected' : ''}/>
                                    </td>
                                    <td className="cur-btn" onClick={() => setConvertTo('RUB')}>
                                        <img src={Ruble} className={convertTo === 'RUB' ? 'selected' : ''}/>
                                    </td>
                                    <td className="cur-btn" onClick={() => setConvertTo('GBP')}>
                                        <img src={Sterling} className={convertTo === 'GBP' ? 'selected' : ''}/>
                                    </td>
                                    <td className="cur-btn" onClick={() => setConvertTo('KZT')}>
                                        <img src={Tenge} className={convertTo === 'KZT' ? 'selected' : ''}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <img src={Converter} onClick={() => handleConvertingCurrencies()}/>
                    </ConverterWrapper>
                </div>
            )
        }
    }

    return (
        <SectionWrapper>
            <SectionTitle>Курсы безналичной конвертации валют</SectionTitle>
            <p>Курс актуален на {getTodaysDate()} </p>
            {handleLoading()}
        </SectionWrapper>
    )
}