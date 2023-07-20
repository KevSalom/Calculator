let SCREEN = document.querySelector('.numbers');
const BOTONES = ['7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', 'AC', '+', '<', '='];
const teclado = document.querySelector('.buttons');
let operatorSelected = [];

function print(e) {
    const current = e.target.textContent;
    const operators = ['+', '-', '/', 'x'];
    const dot = ['.'];
    if (operators.includes(current)) {
        if(!operators.includes(SCREEN.textContent[SCREEN.textContent.length -2])){
            SCREEN.textContent = SCREEN.textContent + ' ' + current + ' ';
            operatorSelected.push(current);
        } else {return } 
    } else if (dot.includes(current)){ //Si la ultima letra NO es un punto y la ultima cifra NO contiene un punto
        if(!dot.includes(SCREEN.textContent[SCREEN.textContent.length -1]) && !SCREEN.textContent.split(' ').at(-1).includes('.')){
            SCREEN.textContent = SCREEN.textContent + current ;
        } else {return}
    } else {
        SCREEN.textContent = SCREEN.textContent + current
    }
}

function clear() {
    SCREEN.textContent = '';
    operatorSelected = [];
}

function erase(){
    const operators = ['+', '-', '/', 'x'];
    if(operators.includes(SCREEN.textContent[SCREEN.textContent.length -2])){
        SCREEN.textContent = SCREEN.textContent.substring(0, SCREEN.textContent.length -3)
    } else{
        SCREEN.textContent = SCREEN.textContent.substring(0, SCREEN.textContent.length -1)
    }
    
}

function result() {
 let arraySCREEN = SCREEN.textContent.split(' ');
  
 console.log(arraySCREEN)
  while(arraySCREEN.length !== 1) {

    if(operatorSelected.includes('/')){
        const iOp = arraySCREEN.indexOf('/');
        arraySCREEN[iOp -1] = arraySCREEN[iOp -1] / arraySCREEN[iOp +1];
        arraySCREEN.splice(iOp,2);
        delete(operatorSelected[operatorSelected.indexOf('/')])
    } else if(operatorSelected.includes('x')){
        const iOp = arraySCREEN.indexOf('x');
        arraySCREEN[iOp -1] = arraySCREEN[iOp -1] * arraySCREEN[iOp +1];
        arraySCREEN.splice(iOp,2);
        delete(operatorSelected[operatorSelected.indexOf('x')])
    } else if(operatorSelected.includes('-')){
        const iOp = arraySCREEN.indexOf('-');
        arraySCREEN[iOp -1] = Number(arraySCREEN[iOp -1]) - Number(arraySCREEN[iOp +1]);
        arraySCREEN.splice(iOp,2);
        delete(operatorSelected[operatorSelected.indexOf('-')])
    } else if (operatorSelected.includes('+')){
        const iOp = arraySCREEN.indexOf('+');
        arraySCREEN[iOp -1] = Number(arraySCREEN[iOp -1]) + Number(arraySCREEN[iOp +1]);
        arraySCREEN.splice(iOp,2);
        delete(operatorSelected[operatorSelected.indexOf('+')])
    } 
  }

  return SCREEN.textContent = arraySCREEN;
}

BOTONES.forEach(b => {
    let newB = document.createElement('button');
    newB.textContent = b;

    (b !== '=') ? newB.id = b : newB.id = 'iqual';
    newB.onclick = print;
    if (b === 'AC') newB.onclick = clear;
    if (b === '=') newB.onclick = result;
    if (b === '<') newB.onclick = erase;

    const simbols = ['+', '-', '/', 'x'];

    if(simbols.includes(b)) newB.className = 'simbols';

   
    teclado.appendChild(newB)
})

