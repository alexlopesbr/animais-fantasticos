export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((bitcoinJson) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcoinJson.BRL.sell).toFixed(4);
    })
    .catch((error) => console.log(Error(error)));
}
