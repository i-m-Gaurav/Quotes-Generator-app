let quotes = document.getElementById('quotes');
let author = document.getElementById('author');
let newQuote = document.getElementById('newQuote');
let tweetbtn = document.getElementById('tweetbtn');

let realData = "";
let quotesData = "";

const tweetquote = ()=> {
    let tweett = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(tweett);
}


const printquotes = () => {

    let random = Math.floor(Math.random() * 100);

    let quotesData = realData[random];

    if ((quotesData.author == null) ? author.innerText =   "Anonymous" : author.innerText =   `${quotesData.author}`);

    quotes.innerText = `"${quotesData.text}"`;

}

const getQuotes = async () => {

    const api = "https://type.fit/api/quotes";
    try {

        let data = await fetch(api);
        realData = await data.json();

        printquotes();

    } catch (error) {
        console.log(error)
    }

}

newQuote.addEventListener('click', getQuotes);
tweetbtn.addEventListener('click',tweetquote);



getQuotes();