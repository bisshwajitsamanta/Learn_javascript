
const cutFruitPieces = (fruit) => {
    return fruit *4
}

function fruitProcessor(apple, orange) {
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange);
    return `Juice with ${applePieces} apples and ${orangePieces} oranges `
}

console.log(fruitProcessor(3,2))