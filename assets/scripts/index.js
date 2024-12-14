// Seleciona todos os slides e inicializa o índice atual
const slides = document.querySelectorAll('.slide');

// Seleciona os inputs de radio
const neutroCheck = document.getElementById('neutro');
const programadorCheck = document.getElementById('programador');
const professorCheck = document.getElementById('professor');


neutroCheck.addEventListener('change', changeSlide);
professorCheck.addEventListener('change', changeSlide);
programadorCheck.addEventListener('change', changeSlide);


function changeSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'left', 'right'); // Remove as classes existentes

        if (index == this.value) {
          slide.classList.add('active'); // Centraliza o slide ativo
        } else if(index <= this.value) {
            slide.classList.add('left'); // Move o slide anterior para a esquerda
        }else if(index >= this.value) {
            slide.classList.add('right'); // Move o slide anterior para a esquerda
        }
      });
}





function navigateTo(nameSide){

    if(nameSide == 'programador'){

        programadorCheck.checked = true;
        changeSlide.call(programadorCheck);
    }
    if(nameSide == 'dancarino'){
        professorCheck.checked = true;
        changeSlide.call(professorCheck);
    }
}
