let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla && isUSCitizen) {
    if (currentYear - yearOfTeslaPurchase >= 4) {
        console.log("would you like an upgrade?")
    }
    else {
        console.log("Are you satisfied with the car?")
    }
}

else if (!isUSCitizen && boughtTesla) {
    console.log("would like to move to the US?")
}


else if (!boughtTesla) {
    console.log("Are you interested in buying one?")
}
