const requirements: {
    title: string,
    content: {
        lowerTitle: string,
        lowerContent: string
    }[]
}[] = [
    {
        title: 'Минимальная ставка по кредиту с комиссиями',
        content: [
            {
                lowerTitle: 'Сумма',
                lowerContent: 'от 100 000 до 7 000 000 тенге'
            },
            {
                lowerTitle: 'Ставки вознаграждения:',
                lowerContent: 'от 7% (ГЭСВ от 7,3%)'
            },
            {
                lowerTitle: 'Срок',
                lowerContent: 'до 5 лет'
            },
            {
                lowerTitle: 'Комиссия за организацию займа:',
                lowerContent: 'от 2,25%'
            },
            {
                lowerTitle: 'Комиссия за выдачу наличных:',
                lowerContent: 'По тарифам платежных карточек для физических лиц'
            },
        ]
    },
    {
        title: 'Стандартная ставка по кредиту без комиссий',
        content: [
            {
                lowerTitle: 'Сумма',
                lowerContent: 'от 100 000 до 7 000 000 тенге'
            },
            {
                lowerTitle: 'Ставки вознаграждения:',
                lowerContent: 'от 21,99% (ГЭСВ от 24,4%)'
            },
            {
                lowerTitle: 'Срок',
                lowerContent: 'до 5 лет'
            },
            {
                lowerTitle: 'Комиссия за организацию займа:',
                lowerContent: '0%'
            },
            {
                lowerTitle: 'Комиссия за выдачу наличных:',
                lowerContent: 'По тарифам платежных карточек для физических лиц'
            },
        ]
    }
]

export { requirements }