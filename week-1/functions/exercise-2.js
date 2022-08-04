const isEven = function (num) {
    return num % 2 == 0
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const oddNumbers = function (array) {
    for (let i in array)
        if (isEven(array[i]) == false)
            console.log(array[i])
}

oddNumbers(array)