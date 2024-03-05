import { appendFileSync } from 'fs';
class CSVWriter {
    constructor(stulpeliai) {
        this.stulpeliai = stulpeliai;
        this.csv = this.stulpeliai.join(',') + '\n';
    }
    save(filename) {
        appendFileSync(filename, this.csv);
        this.csv = '\n';
        console.log('File saved-', filename);
    }
    pridetiEilute(values) {
        let eilutes = values.map((v) => this.formatuotiEilute(v));
        this.csv += eilutes.join('\n');
        console.log(this.csv);
    }
    formatuotiEilute(value) {
        return this.stulpeliai.map((stul) => value[stul]).join(',');
    }
}
export { CSVWriter };
//# sourceMappingURL=CSVWriter.js.map