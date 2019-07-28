import { Product } from './product';


export const PRODUCTS: Product[] = [
    {
        id: 'PRD0001',
        name: 'Собаця і чайник на орбіті',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Продовження пригоди Собаці у космосі. На цей раз вона разом із Капітаном Сідом запалює зірки',
        description: `<b>Футболка</b>
        <ul>
        <li>Склад: льон 90%, віскоза 10%</li>
        <li>Ручна робота</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        // tslint:disable-next-line:max-line-length
        logo: './assets/images/space_1.jpg',
        images: ['./assets/images/space_1.jpg', './assets/images/space_2.jpg'],
        options: {color: ['#000000', '#ffffff']},
        price: {uah: '<s>399 грн</s>  299 грн', usd: '$20'},
        inStock: 10
    },
    {
        id: 'PRD0002',
        name: 'Собаця і чайник на орбіті',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Продовження пригоди Собаці у космосі. На цей раз вона разом із Капітаном Сідом запалює зірки',
        description: `<b>Футболка</b>
        <ul>
        <li>Склад: льон 90%, віскоза 10%</li>
        <li>Ручна робота</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        // tslint:disable-next-line:max-line-length
        logo: './assets/images/space_2.jpg',
        images: ['./assets/images/space_1.jpg', './assets/images/space_2.jpg'],
        options: {color: ['#000000', '#ffffff']},
        price: {uah: '<s>399 грн</s>  299 грн', usd: '$20'},
        inStock: 10
    },
    {
        id: 'PRD0003',
        name: 'Собаця з офіційним візитом',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'І таке траплялося у житті Собаці. З місією миру делегація відлетіла на далеку планету у сузір\'ї Ореона',
        description: `<b>Футболка</b>
        <ul>
        <li>Склад: льон 90%, віскоза 10%</li>
        <li>Ручна робота</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        // tslint:disable-next-line:max-line-length
        logo: './assets/images/planet_1.jpg',
        // tslint:disable-next-line:max-line-length
        images: ['./assets/images/planet_1.jpg', './assets/images/planet_2.jpg'],
        options: {color: ['#000000', '#ffffff']},
        price: {uah: '<s>399 грн</s>  299 грн', usd: '$20'},
        inStock: 2
    },
    {
        id: 'PRD0004',
        name: 'Собаця з офіційним візитом',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'І таке траплялося у житті Собаці. З місією миру делегація відлетіла на далеку планету у сузір\'ї Ореона',
        description: `<b>Футболка</b>
        <ul>
        <li>Склад: льон 90%, віскоза 10%</li>
        <li>Ручна робота</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        // tslint:disable-next-line:max-line-length
        logo: './assets/images/planet_2.jpg',
        // tslint:disable-next-line:max-line-length
        images: ['./assets/images/planet_.jpg', './assets/images/planet_2.jpg'],
        options: {color: ['#000000', '#ffffff']},
        price: {uah: '<s>399 грн</s>  299 грн', usd: '$20'},
        inStock: 2
    },
    {
        id: 'PRD0005',
        name: 'Собаця чинить шкоду',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Казочка про те як Собацю підставили на чужині кляті ...',
        description: `<b>Футболка</b>
        <ul>
        <li>Склад: льон 90%, віскоза 10%</li>
        <li>Ручна робота</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        // tslint:disable-next-line:max-line-length
        logo: './assets/images/trouble_1.jpg',
        // tslint:disable-next-line:max-line-length
        images: ['./assets/images/trouble_1.jpg', './assets/images/trouble_2.jpg'],
        options: {color: ['#000000', '#ffffff']},
        price: {uah: '<s>399 грн</s>  299 грн', usd: '$20'},
        inStock: 33
    },
    {
        id: 'PRD0006',
        name: 'Собаця чинить шкоду',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Казочка про те як Собацю підставили на чужині кляті ...',
        description: `<b>Футболка</b>
        <ul>
        <li>Склад: льон 90%, віскоза 10%</li>
        <li>Ручна робота</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        // tslint:disable-next-line:max-line-length
        logo: './assets/images/trouble_2.jpg',
        // tslint:disable-next-line:max-line-length
        images: ['./assets/images/trouble_1.jpg', './assets/images/trouble_2.jpg'],
        options: {color: ['#000000', '#ffffff']},
        price: {uah: '<s>399 грн</s>  299 грн', usd: '$20'},
        inStock: 33
    },
    {
        id: 'PRD0007',
        name: 'Це Торба!',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Зручна, містка, симпатична та гігієнінічно чиста, дружня до довкілля, витривала до довгого використання Торбинка',
        description: `<b>Торбинка</b>
        <ul>
        <li>Склад: льон 100%</li>
        <li>Еко</li>
        <li>Містка та витривала</li>
        </ul>`,
        // tslint:disable-next-line:max-line-length
        logo: './assets/images/1.1.jpg',
        // tslint:disable-next-line:max-line-length
        images: ['./assets/images/1.1.jpg', './assets/images/1.2.jpg', './assets/images/1.3.jpg', './assets/images/1.4.jpg', './assets/images/1.5.jpg', './assets/images/1.6.jpg'],
        options: {color: ['#000000']},
        price: {uah: '<s>299 грн</s>  Подарунок! При купівлі двох і більше футболок', usd: '$10'},
        inStock: 30
    }
];
