const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + queryType + ':' + queryValue,
        success: function (data) {
            for (let item of data.items) {
                console.log("title: " + (item.volumeInfo.title) + "\n" +
                    "authors: " + (item.volumeInfo.authors) + "\n" +
                    "ISBN: " + (item.volumeInfo.industryIdentifiers[0].identifier))
            }
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    })
}

fetch("title", "How to Win Friends and Influence People")
