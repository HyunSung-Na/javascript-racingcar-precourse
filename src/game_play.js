export default function GamePlay() {
    const goNumber = 4;
    const result = randomNum();
    
    if (result < goNumber) {
        return false;
    }

    return true;
};

function randomNum() {
    const MAX_NUM = 9;
    const MIN_NUM = 0;
    return Math.floor(Math.random() * (MAX_NUM-MIN_NUM + 1)) + MIN_NUM;
};