document.querySelector('.flipCoin').addEventListener('click', coinFlip)

function coinFlip(){
    let x = Math.random()
    let heads = 'Heads'
    let tails = 'Tails'
    let result = document.querySelector('.result')
    if (x < .50){
        console.log('heads')
        result.innerText = heads
    }else{
        console.log('tails')
        result.innerText = tails
    }
}
