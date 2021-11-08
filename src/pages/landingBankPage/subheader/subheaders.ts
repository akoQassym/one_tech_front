import Credits from '../../../assets/credits.svg'
import CreditCard from '../../../assets/creditCard.svg';
import Deposit from '../../../assets/deposit.svg';
import Transaction from '../../../assets/transaction.svg';
import Insurance from '../../../assets/insurance.svg';
import Premier from '../../../assets/diamond.svg';
import ForteFamily from '../../../assets/forteFamily.svg';
import Contacts from '../../../assets/contacts.svg';

const subheaders: {
    img: string,
    name: string,
    alt: string
}[] = [
    {
        img: Credits,
        name: 'Кредиты',
        alt: 'Credits'
    },
    {
        img: CreditCard,
        name: 'Карты',
        alt: 'Credit Card'
    },
    {
        img: Deposit,
        name: 'Депозиты',
        alt: 'Deposit',
    },
    {
        img: Transaction,
        name: 'Переводы',
        alt: 'Transaction',
    },
    {
        img: Insurance,
        name: 'Insurance',
        alt: 'Insurance',
    },
    {
        img: Premier,
        name: 'Premier',
        alt: 'Premier',
    },
    {
        img: ForteFamily,
        name: 'ForteFamily',
        alt: 'Forte Family',
    },
    {
        img: Contacts,
        name: 'Контакты',
        alt: 'Contacts',
    }
]

export {subheaders}