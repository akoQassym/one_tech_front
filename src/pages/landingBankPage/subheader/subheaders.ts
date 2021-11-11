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
    alt: string,
    href: string
}[] = [
    {
        img: Credits,
        name: 'Кредиты',
        alt: 'Credits',
        href: '/bank/credits'
    },
    {
        img: CreditCard,
        name: 'Карты',
        alt: 'Credit Card',
        href: '/bank'
    },
    {
        img: Deposit,
        name: 'Депозиты',
        alt: 'Deposit',
        href: '/bank'
    },
    {
        img: Transaction,
        name: 'Переводы',
        alt: 'Transaction',
        href: '/bank'
    },
    {
        img: Insurance,
        name: 'Insurance',
        alt: 'Insurance',
        href: '/bank'
    },
    {
        img: Premier,
        name: 'Premier',
        alt: 'Premier',
        href: '/bank'
    },
    {
        img: ForteFamily,
        name: 'ForteFamily',
        alt: 'Forte Family',
        href: '/bank'
    },
    {
        img: Contacts,
        name: 'Контакты',
        alt: 'Contacts',
        href: '/bank'
    }
]

export {subheaders}