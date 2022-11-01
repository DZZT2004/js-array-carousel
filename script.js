// Crea l'HTML
const corpo = document.getElementById("corpo");
const container = document.createElement('div');
const containerImmagine = document.createElement('div');
const bottoneSopra = document.createElement('button');
const bottoneSotto = document.createElement('button');
const iconaSu = document.createElement('i');
const iconaGiu = document.createElement('i');
container.classList.add("container-fluid", "contenitore");
containerImmagine.classList.add("image", "m-auto");
containerImmagine.setAttribute("id", "image");
container.append(containerImmagine);
bottoneSopra.classList.add("b1", "mt-3", "rounded-circle");
bottoneSopra.setAttribute("id", "b1");
bottoneSotto.classList.add("b2", "mb-3", "rounded-circle");
bottoneSotto.setAttribute("id", "b2");

iconaSu.classList.add("fa-solid", "fa-angle-up");
iconaGiu.classList.add("fa-solid", "fa-chevron-down");
bottoneSopra.append(iconaSu);
bottoneSotto.append(iconaGiu);


corpo.append(container);
containerImmagine.append(bottoneSopra);
containerImmagine.append(bottoneSotto);

// Aggiunge gli event listener ai bottoni
const immagini = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'];
var numero = 0;
bottoneSopra.addEventListener("click", function(){
    numero--;
    if(numero < 0){
        numero = 4;
    }
    containerImmagine.style.backgroundImage = `url('${immagini[numero]}')`;
})

bottoneSotto.addEventListener("click", function(){
    numero++;
    if(numero > 4){
        numero = 0;
    }
    containerImmagine.style.backgroundImage = `url('${immagini[numero]}')`;
})