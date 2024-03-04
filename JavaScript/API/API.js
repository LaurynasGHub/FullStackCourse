//async funkcija- vyksta paraleliai kitom funkcijom
setTimeout(() => {
  console.log('timeout funkcija');
}, 2000);

//promise- pazadas kad ateity gausim kazkokia info ir jei pavyks vykdysim resolve, jei ne tada darysim reject
const getSomething = () => {
  return new Promise((resolve, reject) => {
    resolve('pavyko');
    reject('nepavyko');
  });
};

//funkcija kazka gauti
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
