const users = [

    { id: 1, zipCode: "123" },
    { id: 2, zipCode: "321" },
    { id: 3, zipCode: "564" },
    { id: 4, zipCode: "546" },
    { id: 5, zipCode: "482" },
    { id: 6, zipCode: "123" },
    { id: 7, zipCode: "547" },

]

const zipCodeStartFive = users.filter((user) => (user.zipCode[0] == "5")).map((user) => (user.id))
console.log(zipCodeStartFive)