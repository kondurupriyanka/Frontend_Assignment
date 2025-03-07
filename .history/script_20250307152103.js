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

        let skills = skillsInput.value
            .split(',')
            .map(skill => skill.trim().toLowerCase())
            .filter(skill => skill.length > 0); // Remove empty values

        if (skills.length === 0) {
            skills = ["a creative project"]; // Default if no input
        }

        // Shuffle prompts to avoid repetition
        const shuffledPrompts = prompts.sort(() => 0.5 - Math.random());

        const uniqueIdeas = new Set(); // Use a Set to prevent duplicates

        let counter = 0;
        for (let i = 0; i < prompts.length && counter < 3; i++) {
            const randomSkill = skills[counter % skills.length]; // Rotate through entered skills
            const ideaText = `${shuffledPrompts[i]} ${randomSkill}.`;

            if (!uniqueIdeas.has(ideaText)) {
                uniqueIdeas.add(ideaText);
                counter++;

                // Create the idea card
                const ideaCard = document.createElement('div');
                ideaCard.className = 'idea-card';

                const title = document.createElement('h2');
                title.textContent = "Portfolio Idea";

                const description = document.createElement('p');
                description.textContent = ideaText;

                ideaCard.appendChild(title);
                ideaCard.appendChild(description);
                ideaSpace.appendChild(ideaCard);
            }
        }
    });
});
