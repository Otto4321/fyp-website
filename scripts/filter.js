const filterSelect = document.getElementById('emotion-filter');
const cards = document.querySelectorAll('.card');

filterSelect.addEventListener('change', (event) => {
    const selectedEmotion = event.target.value;

    cards.forEach((card) => {
        const cardSentiment = card.querySelector('p').textContent;

        if (selectedEmotion === 'all' || cardSentiment === selectedEmotion) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});