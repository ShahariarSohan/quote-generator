const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "The secret to getting ahead is getting started.",
      author: "Mark Twain"
    }
  ];
document.getElementById('btn').addEventListener('click',function(){
    const quotesHere =Math.floor(Math.random()*quotes.length)
    const h2= document.getElementById('heading')
    h2.innerText= quotes[quotesHere].quote
    const p= document.getElementById('para')
    p.innerText= quotes[quotesHere].author
    
})

