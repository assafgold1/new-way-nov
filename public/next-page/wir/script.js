 // Function to fetch feedback data from the JSON file
async function fetchFeedbackData() {
    try {
        const response = await fetch('feedback.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching feedback data:', error);
        return [];
    }
}

// Function to render feedback
async function renderFeedback() {
    const feedbackList = await fetchFeedbackData();
    const feedbackUl = document.getElementById('feedback-list');
    feedbackUl.innerHTML = '';
    feedbackList.forEach(function(item) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="rating">
                <button class="star">&#9733;</button>
                <button class="star">&#9733;</button>
                <button class="star">&#9733;</button>
                <button class="star">&#9733;</button>
                <button class="star">&#9733;</button>
            </span>
            ${item}`;
        feedbackUl.appendChild(listItem);
    });
}

// Function to handle form submission
document.getElementById('feedback-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const feedbackText = document.getElementById('feedback').value.trim();
    if (feedbackText !== '') {
        const feedbackList = await fetchFeedbackData();
        feedbackList.push(feedbackText);
        try {
            const response = await fetch('feedback.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(feedbackList)
            });
            if (!response.ok) {
                throw new Error('Failed to update feedback data');
            }
            await renderFeedback();
            document.getElementById('feedback').value = '';
        } catch (error) {
            console.error('Error updating feedback data:', error);
        }
    }
});

// Render feedback on page load
document.addEventListener('DOMContentLoaded', renderFeedback);
