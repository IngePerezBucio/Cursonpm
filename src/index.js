const messages = [
    "Jorge",
    "Alfonso",
    "Andrea",
    "Jessica",
    "Laura",
    "Carolina",
    "Paulina"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message);
}

module.exports = { randomMsg };