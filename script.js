const secondHand = document.querySelector('.second-hand')

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds/60)*360)
    console.log(seconds)
    secondHand.style.transform = 'rotate(${secondsDegree}deg'; 

            

}

setInterval(setDate,1000);