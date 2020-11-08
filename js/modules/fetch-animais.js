import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Cria um div com informaçoes dos animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo json
  async function criarAnimais() {
    try {
      // Fetch, espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Ativa as funçoes para animar os numeros
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
