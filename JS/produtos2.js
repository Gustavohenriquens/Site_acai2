let preveiwContainer2 = document.querySelector('.products-preview2');
let previewBox2 = preveiwContainer2.querySelectorAll('.preview2');

document.querySelectorAll('.products-container2 .product2').forEach(product2 =>{
  product2.onclick = () =>{
    preveiwContainer2.style.display = 'flex';
    let name = product2.getAttribute('data-name');
    previewBox2.forEach(preview2 =>{
      let target = preview2.getAttribute('data-target');
      if(name == target){
        preview2.classList.add('active');
      }
    });
  };
});

previewBox2.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer2.style.display = 'none';
  };
});


$(document).ready(function(){
  $('.products-container2').slick({
     slidesToShow: 2, // Número de produtos a serem exibidos ao mesmo tempo
     slidesToScroll: 1, // Número de produtos a serem percorridos ao avançar ou retroceder
     dots: true, // Adiciona navegação por pontos (indicadores)
     prevArrow: '<button type="button" class="slick-prev">Previous</button>', // Botão de navegação anterior
     nextArrow: '<button type="button" class="slick-next">Next</button>' // Botão de navegação seguinte
  });
});






