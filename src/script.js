const adviceNr = document.querySelector('#advice-nr');
const adviceText = document.querySelector('#advice-text');
const adviceBtn = document.querySelector('#get-data');


window.onload = () => {
    getAdvice();
}

adviceBtn.addEventListener('click', () => {
    getAdvice();
})

function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const adviceObject = adviceData.slip;
        adviceNr.innerHTML = `<h2>Advice #${adviceObject.id}</h2>`;
        adviceText.innerHTML = `<p>${adviceObject.advice}</p>`;
    }).catch(error => {
        console.log(error);
    });
}
