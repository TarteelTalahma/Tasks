let users = [
    { email: "Sincere@april.biz", companyName: "Romaguera-Crona" },
    { email: "Shanna@melissa.tv", companyName: "Deckow-Crist" },
]

const userInfo = users.map((u) => { return { email: u.email, companyName: u.companyName } })
console.log(userInfo)