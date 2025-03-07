document.addEventListener('DOMContentLoaded', function() {
    const ideas = [
        { title: "Morning Dew", description: "The freshness of a new day, full of possibilities." },
        { title: "Starry Nights", description: "The vastness of the universe and the wonder it inspires." },
        { title: "Rainy Days", description: "The quiet moments of reflection and the beauty of nature's rhythm." },
        { title: "Sunlit Meadows", description: "The warmth of the sun and the joy of open spaces." },
        { title: "Whispering Winds", description: "The gentle reminders of change and the flow of life." }
    ];

    const ideaSpace = document.getElementById('idea-space');

    ideas.forEach(idea => {
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';

        const title = document.createElement('h2');
        title.textContent = idea.title;

        const description = document.createElement('p');
        description.textContent = idea.description;

        ideaCard.appendChild(title);
        ideaCard.appendChild(description);
        ideaSpace.appendChild(ideaCard);
    });
});