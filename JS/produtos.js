let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


$(document).ready(function(){
  $('.products-container').slick({
     slidesToShow: 2, // Número de produtos a serem exibidos ao mesmo tempo
     slidesToScroll: 1, // Número de produtos a serem percorridos ao avançar ou retroceder
     dots: true, // Adiciona navegação por pontos (indicadores)
     prevArrow: '<button type="button" class="slick-prev">Previous</button>', // Botão de navegação anterior
     nextArrow: '<button type="button" class="slick-next">Next</button>' // Botão de navegação seguinte
  });
});




function limitToppings() {
  var checkboxes = document.querySelectorAll('input[name="topping"]');
  var checkedCount = 0;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  checkboxes.forEach(function (checkbox) {
    checkbox.disabled = checkedCount === 2 && !checkbox.checked;
  });
}





// Obtenha informações dos contadores
var banana = document.getElementById('counter1').textContent;
var pacoca = document.getElementById('counter2').textContent;
var chocolate1 = document.getElementById('counter3').textContent;
var uva = document.getElementById('counter4').textContent;
var granola = document.getElementById('counter5').textContent;
var chocolate = document.getElementById('counter6').textContent;

// Crie a mensagem para o WhatsApp
var mensagem = 'Pedido de Açaí:\nEmbalagem = ' + quantidade + ' Embalagem' +
  '\nAcompanhamentos : ' + toppingsSelecionados.join(', ').toUpperCase() +
  '\nAcompanhamentos 2 :' +
  '\nBanana = ' + banana + 
  '\nPacoca = ' + pacoca +
  '\nMel = ' + mel +
  '\nChocolate = ' + chocolate1 +
  '\nUva = ' + uva +
  '\nGranola = ' + granola +
  '\nChocolate = ' + chocolate +
  '\nEndereço de entrega:\nBairro: ' + bairro +
  '\nRua: ' + rua +
  '\nNúmero da casa: ' + numeroCasa;

// Número de telefone para o qual você deseja enviar a mensagem (lembre-se de adicionar o código do país)
var numeroTelefone = '5581998396066';

// Crie o link para o WhatsApp
var linkWhatsApp = 'https://api.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);

// Abra o link em uma nova janela
window.open(linkWhatsApp, '_blank');

// Feche o modal após enviar o pedido (se necessário)
closeModal(modalId);
