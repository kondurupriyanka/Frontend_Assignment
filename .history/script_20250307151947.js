document.addEventListener('DOMContentLoaded', function () {
    const skillsInput = document.getElementById('user-skills');
    const generateButton = document.getElementById('generate-button');
    const ideaSpace = document.getElementById('idea-space');

    if (!skillsInput || !generateButton || !ideaSpace) {
        console.error("Error: One or more required elements are missing.");
        return;
    }

    const prompts = [
        "Create a portfolio website for",
        "Design a mobile app for",
        "Develop a data visualization dashboard for",
        "Build an interactive experience for the healthcare industry",
        "Create a game for",
        "Design a social media platform for",
        "Develop a machine learning model for"
    ];

    generateButton.addEventListener('click', function () {
        ideaSpace.innerHTML = ''; // Clear previous ideas
        const skills = skillsInput.value
            .split(',')
            .map(skill => skill.trim())
            .filter(skill => skill.length > 0); // Remove empty skills

        for (let i = 0; i < 3; i++) {
            const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
            const randomSkill = skills.length > 0 
                ? skills[Math.floor(Math.random() * skills.length)] 
                : "a creative project";

            // Create the idea card
            const ideaCard = document.createElement('div');
            ideaCard.className = 'idea-card';

            // Add title
            const title = document.createElement('h2');
            title.textContent = "Portfolio Idea";

            // Add description
            const description = document.createElement('p');
            description.textContent = `${randomPrompt} ${randomSkill}.`;

            ideaCard.appendChild(title);
            ideaCard.appendChild(description);
            ideaSpace.appendChild(ideaCard);
        }
    });
});
