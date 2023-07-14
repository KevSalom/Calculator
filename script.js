let SCREEN = document.querySelector('.numbers');
const BOTONES = ['7','8','9',' / ','4','5','6',' x ','1','2','3',' - ','0','.','AC',' + ','='];
const teclado = document.querySelector('.buttons');

function click (e){
    if(e.target.textContent === '+') {
      SCREEN.textContent = SCREEN.textContent + ' ' + e.target.textContent + ' ';
    } else {SCREEN.textContent = SCREEN.textContent + e.target.textContent} 
}

function clear (){
    SCREEN.textContent = '';
}

function iqual (){
    console.log('fui llamado')

    const arraySCREEN = SCREEN.textContent.split(' ')
    let newScreen = {
        num1: arraySCREEN[0],
        num2: arraySCREEN[2],
        operator: arraySCREEN[1]
    }

    if(newScreen.operator === '+'){
        return SCREEN.textContent = Number(newScreen.num1) + Number(newScreen.num2);
    }
}

BOTONES.forEach(b => {
    let newB = document.createElement('button');
    newB.textContent = b;
    
   (b !== '=')? newB.id = b : newB.id = 'iqual';
   
    (b !== 'AC') ? newB.onclick = click : newB.onclick = clear;

    (b !== '=') ? newB.onclick = click : newB.onclick = iqual;
    
    teclado.appendChild(newB)
})
// const clearB = document.getElementById('c');
// const number5 = document.getElementById('5');
// const number6 = document.getElementById('6');
// const operatorPlus = document.getElementById('+');
// const operatorIqual = document.getElementById('=');




