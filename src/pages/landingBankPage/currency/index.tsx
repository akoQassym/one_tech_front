import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { SectionWrapper } from '../../../components/wrappers';
import { SectionTitle } from '../../../components/titles';
import { Loading } from '../../../components/loading';

import { 
    StyledTableCell, 
    StyledTableRow, 
    ConverterWrapper, 
    CurrencyInput, 
    ConverterTitle 
} from './style.module';
import { getTodaysDate } from '../../../utils/getTodaysDate';
import { currencies_img } from './currencyImg';

// Images
import Dollar from '../../../assets/USD_KZT.svg';
import Euro from '../../../assets/EUR_KZT.svg';
import Ruble from '../../../assets/RUB_KZT.svg';
import Sterling from '../../../assets/GBP_KZT.svg';
import Tenge from '../../../assets/KZT.svg';
import Converter from '../../../assets/Convert.png';
import ConverterMini from '../../../assets/ConvertMini.svg';

const API_KEY = process.env.REACT_APP_CURRENCY_API_KEY;
const BUY_SELL_RATIO = 0.98012087

const currencies_for_search = [
    'USD',
    'EUR',
    'RUB',
    'GBP'
]

const Currency: React.FC = () => {
    const [currencyToKZT, setCurrencyToKZT] = useState<{data: []}[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [convertFrom, setConvertFrom] = useState<string>('');
    const [convertTo, setConvertTo] = useState<string>('');
    const [convertationResult, setConvertationResult] = useState<number>();
    const [convertAmount, setConvertAmount] = useState<number>();

    const startFetching = () => {
        currencies_for_search.map(currency => fetchCurrencies(currency));
        setLoading(false);
    }

    const handleCurrencyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConvertAmount(parseInt(e.target.value));
    }

    const fetchCurrencies = async (currency: string) => {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }
        await fetch(`https://free.currconv.com/api/v7/convert?q=${currency}_KZT&compact=ultra&apiKey=${API_KEY}`, requestOptions)
            .then(res => res.json())
            .then(data => setCurrencyToKZT(prev => [...prev, {data: data}]));
    }

    const handleConvertingCurrencies = async () => {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }
        await fetch(`https://free.currconv.com/api/v7/convert?q=${convertFrom}_${convertTo}&compact=ultra&apiKey=${API_KEY}`, requestOptions)
            .then(res => res.json())
            .then(data => {
                let objKey: Array<string> = Object.keys(data);
                let searchByKey: number = data.find(objKey);
                let result: string = (searchByKey*convertAmount!).toFixed(2);
                setConvertationResult(parseInt(result));
            });
    }

    useEffect(() => {
        // startFetching();
    }, [])

    const handleLoading = () => {
        if (loading) {
            return (
                <Loading/>
            )
        } else {
            return (
                <Stack
                    direction= { document.documentElement.clientWidth < 550 ? "column" : "row" }
                    justifyContent="space-between"
                    alignItems={ document.documentElement.clientWidth < 550 ? "center" : "baseline" } 
                    spacing={10}
                >
                    <TableContainer>
                        <Table aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell align="left">Покупка</StyledTableCell>
                                <StyledTableCell align="left">Продажа</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {currencyToKZT.map((currency, key) => {
                                let currencyObjKey: Array<string> = Object.keys(currency.data);
                                let currencyInfoObj: any = currencies_img.find(o => o.pair === currencyObjKey[0]);
                                let searchByKey: number | undefined = currency.data.find(currencyInfoObj);
                                return (
                                    <StyledTableRow key={key}>
                                        <StyledTableCell align="right"><img src={currencyInfoObj.img}/></StyledTableCell>
                                        <StyledTableCell align="left">{currencyInfoObj.ticker}</StyledTableCell>
                                        <StyledTableCell align="left">{(searchByKey! * BUY_SELL_RATIO).toFixed(2)}</StyledTableCell>
                                        <StyledTableCell align="left">{searchByKey!.toFixed(2)}</StyledTableCell>
                                    </StyledTableRow>
                                )
                                
                            })}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <ConverterWrapper>
                        <ConverterTitle>Конвертация валюты</ConverterTitle>
                        <table>
                            <tbody>
                                <tr className="tr">
                                    <Stack
                                        direction= { document.documentElement.clientWidth < 550 ? "column" : "row" }
                                        justifyContent="center"
                                        alignItems="baseline" 
                                        spacing={0}
                                    >
                                        <td><CurrencyInput onChange={(e) => handleCurrencyInput(e)}/></td>
                                        <div>
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
                                        </div>
                                    </Stack>
                                </tr>
                                <tr className="tr">
                                    <Stack
                                        direction= { document.documentElement.clientWidth < 550 ? "column" : "row" }
                                        justifyContent="center"
                                        alignItems="baseline" 
                                        spacing={0}
                                    >
                                        <td><CurrencyInput disabled={true} value={convertationResult}/></td>
                                        <div>
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
                                        </div>
                                    </Stack>
                                </tr>
                            </tbody>
                        </table>
                        <img 
                            src={ document.documentElement.clientWidth < 550 ? ConverterMini : Converter } 
                            onClick={() => handleConvertingCurrencies()}
                        />
                    </ConverterWrapper>
                </Stack>
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

export default Currency;