import { Product } from './product';


export const BONUSES: Product[] = [
    {
        id: 'BNS0001',
        name: 'Це Торба!',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Зручна, містка, симпатична та гігієнінічно чиста, дружня до довкілля, витривала до довгого використання Торбинка',
        description: `<b>Торбинка</b>
            <ul>
            <li>Склад: бязь (100% бавовна), щільність 147 г/м2</li>
            <li>Розмір: 35х40х10 см, ручки 60 см, малюнок 20х23 см</li>
            <li>Еко</li>
            <li>Містка та витривала</li>
            </ul>`,
        logo: './assets/images/1.1.jpg',
        // tslint:disable-next-line:max-line-length
        images: ['./assets/images/1.2.jpg', './assets/images/1.3.jpg', './assets/images/1.4.jpg', './assets/images/1.5.jpg', './assets/images/1.6.jpg', './assets/images/1.1.jpg'],
        options: {type: 'bonus'},
        price: {uah: '0 грн. Подарунок! При купівлі двох і більше футболок', usd: '$10'},
        inStock: 7,
    }
];
