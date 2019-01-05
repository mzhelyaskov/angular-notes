import {TransactionModel} from '../models/transaction.model';

export const transactionsFor2017: TransactionModel[] = [
  {id: 1, date: '01-01-2017', title: 'CARREFOUR', description: 'Płatność kartą: xxxx-1235', sum: 25.9},
  {id: 2, date: '11-03-2017', title: 'LIDL WOLOSKA', description: 'Płatność kartą: xxxx-1235', sum: 77},
  {id: 3, date: '12-05-2017', title: 'ALLEGRO', description: 'Płatność kartą: xxxx-1235', sum: 44.9},
  {id: 4, date: '27-08-2017', title: 'DELIKATESY', description: 'Płatność kartą: xxxx-1235', sum: 4.9}
];

export const transactionsFor2018: TransactionModel[] = [
  {id: 5, date: '01-01-2018', title: 'PRZELEW WLASNY', description: 'Płatność kartą: xxxx-1235', sum: 33},
  {id: 6, date: '02-03-2018', title: 'LIDL', description: 'Płatność kartą: xxxx-1235', sum: 2.5},
  {id: 7, date: '22-06-2018', title: 'CARREFOUR', description: 'Płatność kartą: xxxx-1235', sum: 65.44},
];
