import affgato from '../assets/affgato-coffee.jpg';
import expresso from '../assets/american-expresso.jpg';
import cafe from '../assets/cafe-au-liat.jpg';
import capuccino from '../assets/capuccino.jpg';
import cortado from '../assets/cortado.jpg';
import doppio from '../assets/doppio-coffee.jpg';
import galao from '../assets/galao.jpg';
import irish from '../assets/irish-coffee.jpg';
import lungo from '../assets/lungo.jpg';
import mocha from '../assets/mocha-coffee.jpg';
import ristretto from '../assets/ristretto-coffee.jpg';

export const coffeeDataOrders = [
  {
    id: 1,
    coffeName: 'Affgato Coffe',
    itemsAvailable: 90,
    price: 20.9,
    status: 'Available',
    coffeImage: affgato,
  },
  {
    id: 2,
    coffeName: 'Expresso Coffe',
    itemsAvailable: 10,
    price: 30.9,
    status: 'Inadequate',
    coffeImage: expresso,
  },
  {
    id: 3,
    coffeName: 'Cafe Au Liat',
    itemsAvailable: 20,
    price: 20.9,
    status: 'Available',
    coffeImage: cafe,
  },
  {
    id: 4,
    coffeName: 'Capuccino',
    itemsAvailable: 0,
    price: 60.9,
    status: 'Not Available',
    coffeImage: capuccino,
  },
  {
    id: 5,
    coffeName: 'Cortado',
    itemsAvailable: 50,
    price: 60.9,
    status: 'Available',
    coffeImage: cortado,
  },
  {
    id: 6,
    coffeName: 'Doppio Coffee',
    itemsAvailable: 5,
    price: 10.9,
    status: 'Inadequate',
    coffeImage: doppio,
  },
  {
    id: 7,
    coffeName: 'Galao Coffee',
    itemsAvailable: 15,
    price: 10.9,
    status: 'Available',
    coffeImage: galao,
  },
  {
    id: 8,
    coffeName: 'Irish Coffee',
    itemsAvailable: 0,
    price: 10.9,
    status: 'Available',
    coffeImage: irish,
  },
  // {
  //   id: 9,
  //   coffeName: 'Lungo Coffee',
  //   itemsAvailable: 15,
  //   price: 10.9,
  //   status: 'Available',
  //   coffeImage: lungo,
  // },
  // {
  //   id: 10,
  //   coffeName: 'Mocha Coffee',
  //   itemsAvailable: 25,
  //   price: 20.9,
  //   status: 'Available',
  //   coffeImage: mocha,
  // },
  // {
  //   id: 11,
  //   coffeName: 'Ristretto Coffee',
  //   itemsAvailable: 0,
  //   price: 80.9,
  //   status: 'Available',
  //   coffeImage: ristretto,
  // },
];

export const customersData = [
  {
    id: 1,
    name: 'Vincent Run',
    email: 'vincent_run@gmail.com',
    order: 'Affgato Coffee',
    quantity: '5',
  },
  {
    id: 2,
    name: 'LebRon Ron',
    email: 'ron@gmail.com',
    order: 'Galao Coffee',
    quantity: '5',
  },
  {
    id: 3,
    name: 'Gwen Simmons',
    email: 'simmons@gmail.com',
    order: 'Expresso Coffee',
    quantity: '5',
  },
  {
    id: 4,
    name: 'Andrew McLaugh',
    email: 'andrew@gmail.com',
    order: 'Mocha Coffee',
    quantity: '1',
  },
  {
    id: 5,
    name: 'Sunnew Sune',
    email: 'Suneewrun@gmail.com',
    order: 'Doppio Coffee',
    quantity: '5',
  },
  {
    id: 6,
    name: 'Micheal James',
    email: 'michealJ22@gmail.com',
    order: 'Cafe Au Liat',
    quantity: '3',
  },
  {
    id: 7,
    name: 'Michelle James',
    email: 'michJ22@gmail.com',
    order: 'Capuccino',
    quantity: '3',
  },
];
