function choice(arr){
    const rndIndex = Math.floor(Math.random()*arr.length);
    return arr[rndIndex];
}

export {choice};