const myModal = document.getElementById('modal')
const myInput = document.getElementById('calcular')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

const prods = [
  {id: 1, name: "Bife com batata frita", price: 30.00},
  {id: 2, name: "Coxa de frango crocante", price: 25.00},
  {id: 3, name: "Carne de panela", price: 22.00},
  {id: 4, name: "Farofa", price: 10.00},
  {id: 5, name: "Salada", price: 8.00},
  {id: 6, name: "Torresmo", price: 12.00},
]

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function calc () {
  const personName = document.getElementById('name').value;
  const quantities = document.getElementsByName('quantity');

  let outputHeader = document.getElementById('output-header');
  let outputBody = document.getElementById('output-body');
  let result = 0;

  outputHeader.innerHTML = `Caro <strong>${personName}</strong>`;
  outputBody.innerHTML = '';
  outputBody.innerHTML += 'Seguem os dados do seu pedido</br></br>';
  outputBody.innerHTML += 'O seu pedido é: </br>';
  outputBody.innerHTML += `<ul>`;

  for (let input of quantities) {
      if (input.value == 0) {
          continue;
      }

      let id = input.id;
      let total = prods[id - 1].price * input.value;

      const msg = `Prato: ${prods[id - 1].name} - Preço unitário: ${formatter.format(prods[id - 1].price)} - Quantidade: ${input.value} - Total: ${formatter.format(total)}</br>`;
      outputBody.innerHTML += `<li>${msg}</li>`;

      result += total;

  }

  outputBody.innerHTML += `</ul>`;
  outputBody.innerHTML += `<h4>Preço final: ${formatter.format(result)}</h4>`;
}