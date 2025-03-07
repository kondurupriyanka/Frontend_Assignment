document.addEventListener('DOMContentLoaded', function() {
    const skillsInput = document.getElementById('user-skills');
    const generateButton = document.getElementById('generate-button');
    const ideaSpace = document.getElementById('idea-space');

    const prompts = [
        "Create a portfolio website for a...",
        "Design a mobile app of small business...",
        "Develop a data visualization of sales for...",
        "Build an interactive experience dashboard for healthcare industry..."
        "Create a game for..."
        "Design a social media platform for..."
        "Develop a machine learning model for..."
    ];

    generateButton.addEventListener('click', function() {
        ideaSpace.innerHTML = ''; // Clear previous ideas
        const skills = skillsInput.value.split(',').map(skill => skill.trim());

        for (let i = 0; i < 3; i++) {
            const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
            const randomSkill = skills[Math.floor(Math.random() * skills.length)] || "a creative project";

            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';

            const title = document.createElement('h2');
            title.textContent = "Portfolio Idea";

            const description = document.createElement('p');
            description.textContent = `${randomPrompt} ${randomSkill}.`;

            ideaCard.appendChild(title);
            ideaCard.appendChild(description);
            ideaSpace.appendChild(ideaCard);
        }
    });
});