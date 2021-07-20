let numero = Math.floor(Math.random() * 16000);
const promise = (randomNumber) => {
  const promesa = new Promise ((resolve, reject) => {
    if (randomNumber > 8000) return reject();
    return resolve();
  });
  promesa
    .then(() => console.log(`Promise resolvida, o número era ${numero}`))
    .catch(() => console.log(`Promise rejeitada, o número era ${numero}`));
}
promise(numero);