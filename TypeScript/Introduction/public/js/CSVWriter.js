import { appendFileSync } from 'fs';
class CSVWriter {
    constructor(stulpeliai) {
        this.stulpeliai = stulpeliai;
        this.csv = this.stulpeliai.join(',') + '\n';
    }
    pridetiEilute(values) {
        let eilutes = values.map((v) => this.formatuotiEilute(v));
        this.csv += eilutes.join('\n');
        console.log(this.csv);
    }
    formatuotiEilute(m) {
        return this.stulpeliai.map((stul) => m[stul]).join(',');
    }
    save(filename) {
        appendFileSync(filename, this.csv);
        this.csv = '\n';
        console.log('File saved-', filename);
    }
}
const writer = new CSVWriter(['id', 'suma', 'gavejas', 'paskirtis']);
writer.pridetiEilute([
    { id: 1, suma: 30, gavejas: 'Vardenis Pavardenis', paskirtis: 'maistas' },
    { id: 2, suma: 500, gavejas: 'Topo centras', paskirtis: 'imoka' },
]);
writer.save('./mokejimai.csv');
//# sourceMappingURL=CSVWriter.js.map