let SCREEN = document.querySelector('.numbers');
const BOTONES = ['7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', 'AC', '+', '='];
const teclado = document.querySelector('.buttons');
let operatorSelected = [];

function print(e) {
    const current = e.target.textContent;
    if (current === '+' || current === '-' || current === 'x' || current
        === '/') {
        SCREEN.textContent = SCREEN.textContent + ' ' + current + ' ';
        operatorSelected.push(current);
    } else {
        SCREEN.textContent = SCREEN.textContent + current
    }
}

function clear() {
    SCREEN.textContent = '';
    operatorSelected = [];
}

function result() {
 let arraySCREEN = SCREEN.textContent.split(' ');
  
  while(arraySCREEN.length !== 1) {

    if(operatorSelected.includes('/')){
        const iOp = arraySCREEN.indexOf('/');
        arraySCREEN[iOp -1] = arraySCREEN[iOp -1] / arraySCREEN[iOp +1];
        arraySCREEN.splice(iOp,iOp + 1);
        delete(operatorSelected[operatorSelected.indexOf('/')])
    } else if(operatorSelected.includes('x')){
        const iOp = arraySCREEN.indexOf('x');
        arraySCREEN[iOp -1] = arraySCREEN[iOp -1] * arraySCREEN[iOp +1];
        arraySCREEN.splice(iOp,iOp + 1);
        delete(operatorSelected[operatorSelected.indexOf('x')])
    } else if (operatorSelected.includes('+')){
        const iOp = arraySCREEN.indexOf('+');
        arraySCREEN[iOp -1] = Number(arraySCREEN[iOp -1]) + Number(arraySCREEN[iOp +1]);
        arraySCREEN.splice(iOp,iOp + 1);
        delete(operatorSelected[operatorSelected.indexOf('+')])
    } else if(operatorSelected.includes('-')){
        const iOp = arraySCREEN.indexOf('-');
        arraySCREEN[iOp -1] = arraySCREEN[iOp -1] - arraySCREEN[iOp +1];
        arraySCREEN.splice(iOp,iOp + 1);
        delete(operatorSelected[operatorSelected.indexOf('-')])
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
    teclado.appendChild(newB)
})



