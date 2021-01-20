export default function RaceResultShow(carList) {
    const result = document.querySelector('#result');
    result.style.visibility = 'visible';

    const winner = winnerCarResult(carList);
    const winnerAnnouncement = document.createElement('div');

    winnerAnnouncement.innerHTML = winner;
    winnerAnnouncement.style.fontWeight = 'bold';
    result.appendChild(winnerAnnouncement);
};

const winnerCarResult = carList => {
    let fasterCarName = '최종우승자: ';
    let maxLength = 0;
    let winnerCar = '';

    carList.forEach(car => {
        if (car.race.length > maxLength) {
            maxLength = car.race.length;
        }
    });
    
    for (const car of carList) {
        if (car.race.length === maxLength && winnerCar === '') {
            winnerCar += car.name;
        } else if (car.race.length === maxLength 
            && winnerCar !== '') {
            winnerCar += ', ' + car.name;
        }
    }

    fasterCarName += winnerCar;
    return fasterCarName;
};