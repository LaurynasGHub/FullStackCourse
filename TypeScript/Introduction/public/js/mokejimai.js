import { CSVWriter } from './CSVWriter.js';
const paymentWriter = new CSVWriter([
    'id',
    'suma',
    'gavejas',
    'paskirtis',
]);
paymentWriter.pridetiEilute([
    { id: 1, suma: 30, gavejas: 'Vardenis Pavardenis', paskirtis: 'maistas' },
    { id: 2, suma: 500, gavejas: 'Topo centras', paskirtis: 'imoka' },
]);
paymentWriter.save('./mokejimai.csv');
//# sourceMappingURL=mokejimai.js.map