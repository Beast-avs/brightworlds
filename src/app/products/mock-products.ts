import { Product } from './product';


export const PRODUCTS: Product[] = [
    {
        id: 'PRD0001',
        name: 'Собаця і чайник на орбіті',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Продовження пригоди Собаці у космосі. На цей раз вона разом із Капітаном Сідом запалює зірки',
        description: `<b>Футболки</b>
        <ul>
        <li>Склад: льон 90%, віскоза 10%</li>
        <li>Ручна робота</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        // tslint:disable-next-line:max-line-length
        logo: './assets/images/space_1.jpg',
        images: ['./assets/images/space_1.jpg', './assets/images/space_2.jpg'],
        options: {color: ['#000000', '#ffffff']},
        price: {uah: '399 грн', usd: '$20'},
        inStock: 10
    },
    {
        id: 'PRD0002',
        name: 'Собаця і чайник на орбіті',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Продовження пригоди Собаці у космосі. На цей раз вона разом із Капітаном Сідом запалює зірки',
        description: `<b>Футболки</b>
        <ul>
        <li>Склад: льон 90%, віскоза 10%</li>
        <li>Ручна робота</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        // tslint:disable-next-line:max-line-length
        logo: './assets/images/space_2.jpg',
        images: ['./assets/images/space_1.jpg', './assets/images/space_2.jpg'],
        options: {color: ['#000000', '#ffffff']},
        price: {uah: '399 грн', usd: '$20'},
        inStock: 10
    },
    {
        id: 'PRD0003',
        name: 'Собаця з офіційним візитом',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'І таке траплялося у житті Собаці. З місією миру делегація відлетіла на далеку планету у сузір\'ї Ореона',
        description: `<b>Футболки</b>
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
        price: {uah: '399 грн', usd: '$20'},
        inStock: 2
    },
    {
        id: 'PRD0004',
        name: 'Собаця з офіційним візитом',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'І таке траплялося у житті Собаці. З місією миру делегація відлетіла на далеку планету у сузір\'ї Ореона',
        description: `<b>Футболки</b>
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
        price: {uah: '399 грн', usd: '$20'},
        inStock: 2
    },
    {
        id: 'PRD0005',
        name: 'Собаця чинить шкоду',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Казочка про те як Собацю підставили на чужині кляті ...',
        description: `<b>Футболки</b>
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
        price: {uah: '399 грн', usd: '$20'},
        inStock: 33
    },
    {
        id: 'PRD0006',
        name: 'Собаця чинить шкоду',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Казочка про те як Собацю підставили на чужині кляті ...',
        description: `<b>Футболки</b>
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
        price: {uah: '399 грн', usd: '$20'},
        inStock: 33
    },
    {
        id: 'PRD0007',
        name: 'Це Торба!',
        // tslint:disable-next-line:max-line-length
        shortDescription: 'Зручна, містка, симпатична та гігієнінічно чиста, дружня до довкілля, витривала до довгого використання Торбинка',
        description: `<b>Футболки</b>
        <ul>
        <li>Склад: льон 90%, віскоза 10%</li>
        <li>Ручна робота</li>
        <li>Гарний настрій гарантовано</li>
        </ul>`,
        // tslint:disable-next-line:max-line-length
        logo: `data:image/jpeg;base64,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V/LmR3yjZmgeR47da372F5nmoZwUJWzin0KdHWx52fSiI68uL91bASG2/Ans2AeY0t1KSxy05lqtmvhM+E/sq/GYkoOr5epUPNR+1Ioyod2d6vbKvpnb0oAQSORpbmu5nKmI3okG9q4BfapfI7nz+un2bcuF+UVhb5KFPL5Vomws7uaY4NmdhtVz2FEQcQCki6y/lH4c+v3U9LTpSncxPH+nWpTXo3sMlTEtQI4Dh4KUxpaclxcV2YFIBfNcO+BuavS1g/xS1MShaAHOLUvEbCmudaDIxM6VkOZK+eTzpeSsJ9iakJDsnmoTpOSz7nlWMNAwHR+64bpiORj8niGmCvkvnSKbkd6b61b0cEpOX4oxSrNWVfEDFMHYN8mkl13t7jQNygZVt5Paj4bNl708U/T1uaY3jKSv/lzyNc5orIR01/8AwCTdNoG60aWZvE8vz4GNLQUiKNk+8/hr9YblOKHdrwrlb8OVJYXLftijwpGNLUUqqt1+8VCkS4mlYsKEh/8AOP/aAAwDAAABEQIRAAAQ99999999999999999999999999999999999x9999999999999999999Nd9999599999999V999999999tt999x999991999999999999919999p4l999999951999999pJ5ws59l99999999tVBF08o8oN9Nd95d995x5dZpR008sV99999999xMV99JE888A999999999d1999548YkYgk1999999NV999l44Qc88gR999999px999UYN0Q0ktld99999t9Z58wRJ84wZh1999999999FhNNthht999999999999999999999919999999999999999999999999999V995V999999999t99999999999999999999999999999999999999999/8QAFBEBAAAAAAAAAAAAAAAAAAAAgP/aAAgBAhEBPxBIf//EABQRAQAAAAAAAAAAAAAAAAAAAID/2gAIAQERAT8QSH//xAAsEAEAAQMDAwQCAgIDAQAAAAABEQAhMUFRYXGBkSAwobEQQMHRUGBw4fDx/9oACAEAAAE/EP8AhZYJqfcPkDckYSVvNJGeZBkGd4QbaJz/AIZvRJZDYFgiIhaSZjSnYOTEuyRYgsEuXf8A0S1ftx5hs8GkWQt/1bz4NiWgvtek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`,
        // tslint:disable-next-line:max-line-length
        images: ['./assets/images/sobacsia_logo.jpg'],
        options: {color: ['#000000']},
        price: {uah: '200 грн', usd: '$10'},
        inStock: 30
    }
];
