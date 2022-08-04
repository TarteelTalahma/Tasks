const array = [1, 2, 3]
const checkExists = function (array, num) {
    for (let i in array) {
        if (array[i] == num)
            return true;
        else
            return false;
    }
}
console.log(checkExists(array, 4))
