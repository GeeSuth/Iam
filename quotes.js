

const quotes = [
    'The cost of refactoring a bad design is cheaper than the cost of living with it.',
    'Refactoring is an act of improving the structure of a code without modifying its behaviors.',
    'The Code comment for machine and your comment for Human'
]


function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

$(document).ready(function (){
    $('#random-quote').text("“"+getRandomQuote()+"”");
});