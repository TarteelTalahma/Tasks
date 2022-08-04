const p1 = {
    name: "Robert",
    age: 30,
    city: "Hebron"
}

const p2 = {
    name: "Jill",
    age: 30,
    city: "Hebron"
}

if (p1.age == p2.age) {
    if (p1.city == p2.city)
        console.log(p2.name + " wanted to date " + p1.name)
    else {
        console.log(p2.name + " wanted to date " + p1.name + ", but couldn’t")
    }
}