const users = [
    { Name: "Bill Gates", city: "Washington", company: "Microsoft" },
]

const str = (user) => console.log(user.Name + " live in city " + user.city + "  and owns the company " + user.company)
users.forEach(str)