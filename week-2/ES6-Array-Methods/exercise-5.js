const users = [
    { Name: "Tarteel", city: "South Christy" },
    { Name: "Asil", city: "South Christy" },
    { Name: "Asil", city: "Ramallah" }

]

const str = users.every((u) => (u.city == "South Christy"))
console.log(str)