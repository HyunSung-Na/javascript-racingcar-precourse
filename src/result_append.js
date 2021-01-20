export default function ResultAppend(carList) {
    const result = document.querySelector('#result');
    const resultText = document.createElement('div');
    const br = document.createElement('br');

    for (const car of carList) {
        let carResult = document.createElement('li');
        carResult.innerHTML = `${car.name}: ${car.race}`;
        resultText.appendChild(carResult);
    }
    
    resultText.appendChild(br);
    resultText.style.listStyle = 'none';
    resultText.style.fontWeight = 'bold';
    result.appendChild(resultText);
};