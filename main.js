import { socialMediaComments } from './comments.js';
import { productCards } from './product-cards.js';
import { Device } from './Device.js';
import { Laptop } from './Laptop.js';
import './oldmain.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';

const macbookAir = new Laptop('Macbook', 'Air M1', 100);
macbookAir.unpack();
macbookAir.charge();

const kettleXiaomi = new Device('Kettle', 'Xiaomi');
kettleXiaomi.unpack();


