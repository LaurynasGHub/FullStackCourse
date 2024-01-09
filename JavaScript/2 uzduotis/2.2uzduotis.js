let pirmasSk = 6;
let antrasSk = 5;

if (pirmasSk > antrasSk || pirmasSk === 0) {
  console.log('pirmas skaicius didesnis uz antra arba lygus 0');
}

if (antrasSk > pirmasSk || antrasSk === 5) {
  console.log('antras skaicius didesnis uz pirmaji arba lygus 5');
}

if (pirmasSk > antrasSk && pirmasSk === 20) {
  console.log('pirmas skaicius didesnis uz antra ir lygus 20');
}

if (antrasSk > pirmasSk && antrasSk < 100) {
  console.log('antras skaicius yra didesnis uz pirmaji ir mazesnis uz 100');
}
