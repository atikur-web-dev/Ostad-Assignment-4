const quoteElement = document.querySelector("#quote");
const authorElement = document.querySelector("#author");
const generateBtn = document.querySelector("#generateBtn");
const quotes = [
    {
        text: "Success is not final, failure is not fatal. It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "Stay hungry. Stay foolish.",
        author: "Steve Jobs"
    },
    {
        text: "Small steps every day lead to big results.",
        author: "Anonymous"
    }
];

generateBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `— ${randomQuote.author}`;
});