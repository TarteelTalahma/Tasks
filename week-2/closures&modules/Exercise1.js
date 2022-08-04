const StringFormatter = function () {

    const capitalizeFirst = function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }

    const skewerCase = function (str) {
        return str.replaceAll(" ", "-")
    }

    return {
        capitalizeFirst,
        skewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy"))
console.log(formatter.skewerCase("blue box"))