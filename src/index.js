// api
const api = 'https://api.adviceslip.com/advice';

// dom
const adviceId = document.getElementById('adviceId');
const message = document.getElementById('message');
const diceBtn = document.getElementById('dice-btn');

async function logic() {
    try {
        const msgResponse = await fetch(api);
        const data = await msgResponse.json();

        message.innerHTML = `“${data.slip.advice}”`;
        adviceId.innerHTML = `ADVICE #${data.slip.id}`;

    } catch (err) {
        console.log(err);
        message.innerHTML = err.message;
    }
}

diceBtn.addEventListener('click', logic);