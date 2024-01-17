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