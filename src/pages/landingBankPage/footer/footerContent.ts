const footer_nav_content: {
    title: string,
    links: {
        name: string,
        link_type: string,
        href: string
    }[]
}[] = [
    {
        title: 'Банк',
        links: [
            {name: 'Кредиты', link_type: '', href: ''},
            {name: 'Карты', link_type: '', href: ''},
            {name: 'Депозиты', link_type: '', href: ''},
            {name: 'Переводы', link_type: '', href: ''},
            {name: 'Мобильное приложение', link_type: '', href: ''},
            {name: 'Тарифы', link_type: '', href: ''},
            {name: 'Сейфовые ячейки', link_type: '', href: ''}
        ]
    },
    {
        title: 'О нас',
        links: [
            {name: 'Информация', link_type: '', href: ''},
            {name: 'Руководство', link_type: '', href: ''},
            {name: 'Отчетность', link_type: '', href: ''},
            {name: 'Документы', link_type: '', href: ''},
            {name: 'Контакты', link_type: '', href: ''},
            {name: 'Отделения и банкоматы', link_type: '', href: ''},
            {name: 'Отделения в период карантина', link_type: '', href: ''},
            {name: 'Вакансии', link_type: '', href: ''},
        ]
    },
    {
        title: 'Пресс-Центр',
        links: [
            {name: 'Новости', link_type: '', href: ''},
            {name: 'Пресс-релизы', link_type: '', href: ''},
            {name: 'press@forte.kz', link_type: 'mailLink', href: ''},
        ]
    },
    {
        title: 'Дополнительно',
        links: [
            {name: 'Premier', link_type: '', href: ''},
            {name: 'International Relations', link_type: '', href: ''},
            {name: 'Реализация имущества', link_type: '', href: ''},
            {name: '175-летие Абая', link_type: '', href: ''},
            {name: 'Apple Pay', link_type: '', href: ''},
            {name: 'Samsung Pay', link_type: '', href: ''},
            {name: 'ForteForex', link_type: '', href: ''},
            {name: 'Социальные предложения', link_type: '', href: ''},
        ]
    }
]

export {footer_nav_content};