let preveiwContainer3 = document.querySelector('.products-preview3');
let previewBox3 = preveiwContainer3.querySelectorAll('.preview3');

document.querySelectorAll('.products-container3 .product3').forEach(product3 =>{
  product3.onclick = () =>{
    preveiwContainer3.style.display = 'flex';
    let name = product3.getAttribute('data-name');
    previewBox3.forEach(preview3 =>{
      let target = preview3.getAttribute('data-target');
      if(name == target){
        preview3.classList.add('active');
      }
    });
  };
});

previewBox3.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer3.style.display = 'none';
  };
});


$(document).ready(function(){
  $('.products-container3').slick({
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






