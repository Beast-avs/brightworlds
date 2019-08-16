import { Product } from './product';


export const PRODUCTS: Product[] = [
    {
        id: 'PRD0001',
        name: 'Собаця і чайник на орбіті (біла)',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Продовження пригоди Собаці у космосі. На цей раз вона разом із Капітаном Сідом запалює зірки',
        description: `<b>Футболка</b>
        <ul>
        <li>Склад: 95% бавовна, 5% еластан</li>
        <li>Метод насення: прямий цифровий друк</li>
        <li>Модель розроблена і пошита в Україні</li>
        <li>Авторський малюнок та дизайн</li>
        <li>Onesize - від S до XXL, unisex</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        logo: './assets/images/space_1_1.jpg',
        // tslint:disable-next-line:max-line-length
        images: ['./assets/images/space_1_1.jpg', './assets/images/space_1_2.jpg', './assets/images/space_0.jpg', './assets/images/label.jpg'],
        options: {color: ['#000000', '#ffffff']},
        price: {uah: '400 грн', usd: '$25'},
        inStock: 33
    },
    {
        id: 'PRD0002',
        name: 'Собаця і чайник на орбіті (чорна)',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Продовження пригоди Собаці у космосі. На цей раз вона разом із Капітаном Сідом запалює зірки',
        description: `<b>Футболка</b>
        <ul>
        <li>Склад: 95% бавовна, 5% еластан</li>
        <li>Метод насення: флекс плівка</li>
        <li>Модель розроблена і пошита в Україні</li>
        <li>Авторський малюнок та дизайн</li>
        <li>Onesize - від S до XXL, unisex</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        logo: './assets/images/space_2_1.jpg',
        // tslint:disable-next-line:max-line-length
        images: ['./assets/images/space_2_1.jpg', './assets/images/space_2_2.jpg', './assets/images/space_0.jpg', './assets/images/label.jpg'],
        options: {color: ['#000000', '#ffffff']},
        price: {uah: '400 грн', usd: '$25'},
        inStock: 33
    },
    {
        id: 'PRD0003',
        name: 'Собаця з офіційним візитом (біла)',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'І таке траплялося у житті Собаці. З місією миру делегація відвідала далеку планету у сузір\'ї Ореона',
        description: `<b>Футболка</b>
        <ul>
        <li>Склад: 95% бавовна, 5% еластан</li>
        <li>Метод насення: прямий цифровий друк</li>
        <li>Модель розроблена і пошита в Україні</li>
        <li>Авторський малюнок та дизайн</li>
        <li>Onesize - від S до XXL, unisex</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        // tslint:disable-next-line:max-line-length
        logo: './assets/images/planet_1_1.jpg',
        // tslint:disable-next-line:max-line-length
        images: ['./assets/images/planet_1_1.jpg', './assets/images/planet_1_2.jpg', './assets/images/planet_0.jpg', './assets/images/label.jpg'],
        options: {color: ['#000000', '#ffffff']},
        price: {uah: '400 грн', usd: '$25'},
        inStock: 33
    },
    {
        id: 'PRD0004',
        name: 'Собаця з офіційним візитом (чорна)',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'І таке траплялося у житті Собаці. З місією миру делегація відвідала далеку планету у сузір\'ї Ореона',
        description: `<b>Футболка</b>
        <ul>
        <li>Склад: 95% бавовна, 5% еластан</li>
        <li>Метод насення: флекс плівка</li>
        <li>Модель розроблена і пошита в Україні</li>
        <li>Авторський малюнок та дизайн</li>
        <li>Onesize - від S до XXL, unisex</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        // tslint:disable-next-line:max-line-length
        logo: './assets/images/planet_2_1.jpg',
        // tslint:disable-next-line:max-line-length
        images: ['./assets/images/planet_2_1.jpg', './assets/images/planet_2_2.jpg', './assets/images/planet_0.jpg', './assets/images/label.jpg'],
        options: {color: ['#000000', '#ffffff']},
        price: {uah: '400 грн', usd: '$25'},
        inStock: 33
    },
    {
        id: 'PRD0005',
        name: 'Собаця чинить шкоду (біла)',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Історія про залучення Собаці у спецоперації з розкриття схем поставок контрабандних харчових продуктів',
        description: `<b>Футболка</b>
        <ul>
        <li>Склад: 95% бавовна, 5% еластан</li>
        <li>Метод насення: прямий цифровий друк</li>
        <li>Модель розроблена і пошита в Україні</li>
        <li>Авторський малюнок та дизайн</li>
        <li>Onesize - від S до XXL, unisex</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        // tslint:disable-next-line:max-line-length
        logo: './assets/images/trouble_1_1.jpg',
        // tslint:disable-next-line:max-line-length
        images: ['./assets/images/trouble_1_1.jpg', './assets/images/trouble_1_2.jpg', './assets/images/trouble_0.jpg', './assets/images/label.jpg'],
        options: {color: ['#000000', '#ffffff']},
        price: {uah: '400 грн', usd: '$25'},
        inStock: 33
    },
    {
        id: 'PRD0006',
        name: 'Собаця під прикриттям (чорна)',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Історія про залучення Собаці у спецоперації з розкриття схем поставок контрабандних харчових продуктів',
        description: `<b>Футболка</b>
        <ul>
        <li>Склад: 95% бавовна, 5% еластан</li>
        <li>Метод насення: флекс плівка</li>
        <li>Модель розроблена і пошита в Україні</li>
        <li>Авторський малюнок та дизайн</li>
        <li>Onesize - від S до XXL, unisex</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        // tslint:disable-next-line:max-line-length
        logo: './assets/images/trouble_2_1.jpg',
        // tslint:disable-next-line:max-line-length
        images: ['./assets/images/trouble_2_1.jpg', './assets/images/trouble_2_2.jpg', './assets/images/trouble_0.jpg', './assets/images/label.jpg'],
        options: {color: ['#000000', '#ffffff']},
        price: {uah: '400 грн', usd: '$25'},
        inStock: 33
    }
];
