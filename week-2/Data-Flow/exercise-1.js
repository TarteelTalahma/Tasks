const posts = [
    {
        name: "Tarteel",
        text: "Happy Birthday"
    },
    {
        name: "Asil",
        text: "All the best wished for you"
    }
]


const render = function () {
    for (let post of posts) {
        $("#posts").append($(`<div class="post">${post.name}: ${post.text}</div>`))
    }
}

render()

$("button").on("click", function () {
    const $name = $("#name").val()
    const $text = $("#text").val()
    const post = { name: $name, text: $text }
    posts.push(post)
    $("#posts").empty()
    render()
})

