const person = {
    hungry: true,

    feed: function () {
        if (person.hungry) {
            hungry = false;
            alert('Im no longer hungry!')
        }
    }
}

person.feed() 