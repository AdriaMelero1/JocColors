const botons = document.querySelector('.botons');
const botoJoc = document.querySelector('.boto-joc');

const botoProvar = document.querySelector('.boto-provar');



function comensarJoc() {
    generaCombinacio();

}

botons.addEventListener('click', (e) => {
    if(e.target.classList.contains('boto')) {
            e.target.classList.toggle('blau');
    }
});

botoJoc.addEventListener('click', (e) => {
    if(!botoJoc.disabled){
        botoJoc.disabled = true;
        botoProvar.disabled = false;
        comensarJoc();
    }
});

function generaCombinacio() {
    const combinacio = [];
    const colors = ["blau", "vermell"];

    for(let i = 0; i<2; i++){
        const rand = Math.floor(Math.random()*colors.length);
        const colRand = colors[rand];

        combinacio.push(colRand);
    }

    console.log(combinacio);

    resetejarJoc();
}

function resetejarJoc() {
    const botons = document.querySelectorAll('.boto');

    botons.forEach((boto) => {

        const botons = document.querySelectorAll('.boto');
        boto.classList.remove("blau");
    });

    botoJoc.disabled = false;
    botoProvar.disabled = true;
}