import Car from './car.js';
import GamePlay from './game_play.js';
import RaceResultShow from './race_result_show.js';
import ResultAppend from './result_append.js';

export default function Racing(cars, count) {   
    let carList = [];

    for (const carName of cars) {
        carList.push(new Car(carName));
    }

    for (let i = 0; i < count; i++) {
        raceStart(carList);
        ResultAppend(carList);
    }
    
    RaceResultShow(carList);
};


const raceStart = carList => {
    carList.forEach(function(car){
        if (GamePlay()) {
            car.race += '-';
        }
    });
};