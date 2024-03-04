//funkcija priims objektu masyva ir sukurs csv faila kuri galesime issaugoti kompiuteryje

//importuojam frameworka kuris issaugos musu faila CSV formatu

import { appendFileSync } from 'fs';

//sukuriam elementa kuriame yra nustatyti reikalingu objektu tipai
interface Mokejimas {
  id: number;
  suma: number;
  gavejas: string;
  paskirtis: string;
}

type MokejimoStulpeliai = ('id' | 'suma' | 'gavejas' | 'paskirtis')[];

class CSVWriter {
  constructor(private stulpeliai: MokejimoStulpeliai) {
    this.csv = this.stulpeliai.join(',') + '\n';
  }

  private csv: string;

  pridetiEilute(values: Mokejimas[]): void {
    let eilutes = values.map((v) => this.formatuotiEilute(v));
    this.csv += eilutes.join('\n');
    console.log(this.csv);
  }

  private formatuotiEilute(m: Mokejimas): string {
    return this.stulpeliai.map((stul) => m[stul]).join(',');
  }

  save(filename: string): void {
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
