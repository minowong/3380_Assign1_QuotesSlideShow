/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
// create empty array
const quotes = []
// create empty object in array
const numQuote = 6;     // total number of quotes
for (let i=0; i < numQuote; i++){
    quotes.push({});
}

// input quotes
quotes[0] = {
    id: 1,
    quote: "If you don’t fall how are you going to know what getting up is like.",
    source: "Stephen Curry",
    citation: "2016 MVP Speech",
    year: 2016
}

quotes[1] = {
    id: 2,
    quote: "I've failed over and over and over again in my life. And that is why I succeed.",
    source: "Michael Jordan"
}

quotes[2] = {
    id: 3,
    quote: "If you see me in a fight with a bear, pray for the bear.",
    source: "Kobe Bryant",
    year: 2013
}

quotes[3] = {
    id: 4,
    quote: "Confidence is everything in this game, if you don’t think you can, you won’t.",
    source: "Jerry West"
}

quotes[4] = {
    id: 5,
    quote: "The only person who can really motivate you is you.",
    source: "Shaquille O'Neal"
}

quotes[5] = {
    id: 6,
    quote: "You don’t have to be Magic to be special. You’re already special, you’re you.",
    source: "Magic Johnson"
}


/***
 * `getRandomQuote` function
***/

function getRandomQuote(){

    // random index within the quotes array length
    var index = Math.floor(Math.random() * quotes.length);
    // assign randomed quote into variable
    var ranQuote = quotes[index];
    // delete the used quote
    quotes.splice(index, 1);
    // return quote object
    return ranQuote;

}

/***
 * `printQuote` function
***/

function printQuote(){

    // assign random quote into var
    var ranQuote = getRandomQuote();
    // return if there is no more quotes
    if (ranQuote == null) {
        return;
    }

    // assign html string into var
    var htmlStr = '<p class="quote">' + ranQuote.quote + '</p>' +
                    '<p class="source">' + ranQuote.source;

    // add span element if citation proerty exists
    if (ranQuote.citation != null) {
        htmlStr += '<span class="citation">' + ranQuote.citation + '</span>';
    }
    // add span element if year proerty exists
    if (ranQuote.year != null) {
        htmlStr += '<span class="year">' + ranQuote.year + '</span>';
    }
    // closing the second <p>
    htmlStr += '</p>';

    // set innerHTML of quote-box
    document.getElementById('quote-box').innerHTML = htmlStr;

    // debug: show displayed quote ID to make sure no repeat quote
    console.log("quote: " + ranQuote.id)
}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener('click', printQuote);


/*
Modify page header, title & load the first quote
*/
document.querySelector('title').innerText = "NBA Players Quotes";
document.querySelector('h1').innerText = "NBA Players Quotes";
printQuote();