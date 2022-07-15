const diceType = document.querySelector('.dicetype')
const diceNum= document.querySelector('.dicenum')
const result = document.querySelector('.result')
let btn = document.querySelector('.btn')

function randomNumber(num){
    return Math.floor(Math.random() * num +1);
}

function rollDice(e){
    e.preventDefault();
    result.innerHTML = ""
    const diceTypeVal = diceType.value;
    const diceNumVal = diceNum.value;
    if(!diceNumVal){
        alert("Enter Dice Number")
    }

    for(let i=0; i<diceNumVal; i++){
        console.log("clicked")
        const box = document.createElement('button')
        box.classList.add('.box');
        box.innerHTML = randomNumber(diceTypeVal);
        box.style.fontSize = 26+"px"
        result.appendChild(box)
    }


}


btn.addEventListener('click', (e) =>{
   rollDice(e);
  
   
})
