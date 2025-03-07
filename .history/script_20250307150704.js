document.addEventListener('DOMContentLoaded', function() {
    const myData = {
        title: "Things I'm Thinking About",
        description: "Just a few bits of info, you know?",
        items: ["Ideas", "Dreams", "Plans", "Thoughts"]
    };

    document.getElementById('card-title').textContent = myData.title;
    document.getElementById('card-description').textContent = myData.description;

    const itemsList = document.getElementById('card-items');
    myData.items.forEach(function(item) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemsList.appendChild(listItem);
    });
});