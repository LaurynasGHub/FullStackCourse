import { CSVWriter } from './CSVWriter.js';

//sukuriam elementa kuriame yra nustatyti reikalingu objektu tipai
interface Mokejimas {
  id: number;
  suma: number;
  gavejas: string;
  paskirtis: string;
}

//sukuriamas naujas objektas palei klase
const paymentWriter = new CSVWriter<Mokejimas>([
  'id',
  'suma',
  'gavejas',
  'paskirtis',
]);

//pridedami elementai
paymentWriter.pridetiEilute([
  { id: 1, suma: 30, gavejas: 'Vardenis Pavardenis', paskirtis: 'maistas' },
  { id: 2, suma: 500, gavejas: 'Topo centras', paskirtis: 'imoka' },
]);

paymentWriter.save('./mokejimai.csv');
