import ClassicCard from '../../../assets/classicCard.png';
import GoldCard from '../../../assets/goldCard.png';
import PlatinumCard from '../../../assets/platinumCard.png';

const cards: {
    img: string,
    name: string,
    price: string,
    capacity: string,
    cashback: string
}[] = [
    {
        img: ClassicCard,
        name: 'Classic',
        price: 'Выпуск карты бесплатно',
        capacity: 'Снятие до 300 000 ₸ в месяц Казахстана бесплатно',
        cashback: 'CashBack до 15%'
    },
    {
        img: GoldCard,
        name: 'Gold',
        price: 'Выпуск карты бесплатно',
        capacity: 'Снятие до 500 000 ₸ в месяц Казахстана бесплатно',
        cashback: 'CashBack до 15%'
    },
    {
        img: PlatinumCard,
        name: 'Platinum',
        price: 'Выпуск карты бесплатно',
        capacity: 'Снятие до 3 000 000 ₸ в месяц Казахстана бесплатно',
        cashback: 'CashBack до 15%'
    }
]

export {cards}