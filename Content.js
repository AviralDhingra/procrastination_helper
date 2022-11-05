function setCookie(cname, cvalue, exmins) {
  const d = new Date();
  d.setTime(d.getTime() + (exmins*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


if (getCookie("active") === "true") {
  //console.log() // "do nothing"
  setTimeout(function(){
    alert("time is up! please go back to studying.")
    location.reload();
  }, 1000*60*5+1000); // five minutes plus a second of padding 
  
} else {
  const generateSTYLES = () => {
    return `<style>
    @import url('https://fonts.googleapis.com/css?family=opensans:500');
    
    ._404 {
      font-size: 220px;
      text-align: center;
    }
    .question {
      font-size: 25px;
      text-align: center;
    }
    </style>
      `
  };
  
  
  const generateHTML = (pageName, question) => {
    return `
    <!DOCTYPE html>
    <html>
    <body style="text-align:center;">
        <h1 style="color:green;">  
                Clock Hacks
        </h1>
        <h2>Stop Procrastinating</h2>
        <p>What is ${question}?</p>
      
        Answer : <input type="text" id="answer">
        <button type="button" id="submit">Try it</button>
        <p id="blank_space"></p>
      
    </body>
    </html>
  
     `;
  };
  
  
  function puzzle() {
    function rand_choice(choices) {
      let index = Math.floor(Math.random() * choices.length);
      return choices[index];
    }
    const method = rand_choice(['+', '-', '*']);
    const num1 = Math.floor(Math.random() * 141);
    num2 = Math.floor(Math.random() * 131);
    num3 = Math.floor(Math.random() * 11);
    if (method === '+') {
      var answer = num1 + num2;
    } else if (method === '-') {
      var answer = num1 - num2;
    }
    else if (method === '*') {
      var answer = num1 * num3;
    }
    const question = num1.toString() + method + num2.toString();
    if (method === '*') {
      const question = num1.toString() + method + num3.toString();
      const final = [question, answer.toString()]
      return(final)
    }
    const final = [question, answer.toString()]
    return(final)
  }
  
  function DOM(website_name) {
    const arr = puzzle();
    const question = arr[0];
    const answer = arr[1];
    console.log(question)
    console.log(answer)
  
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML(website_name, question);
  
    document.querySelector('#submit').addEventListener('click', 
    function() {
    var x = document.getElementById("answer").value;
    if ((x === answer) && (getCookie("active") == "")) {
      document.getElementById("blank_space").innerHTML = 'Correct';
      // document = initDocument
      // chrome.tab.create({url : 'www.google.com'})
      setCookie("active","true",5)
      location.reload();
  
  
    } else {
      document.getElementById("blank_space").innerHTML = 'Wrong';
    }
    });
  }
  
  
  switch (window.location.hostname) {
    case "www.facebook.com" :
      DOM("Facebook")
    case "www.discord.com": 
      DOM("Discord")
    case "www.netflix.com": 
      DOM("Netflix")
    case "www.instagram.com":  
      DOM("Instagram") 
    case "www.reddit.com":  
      DOM("Reddit")
    case "www.youtube.com":  
      DOM("Youtube") 
    case "www.twitch.com":  
      DOM("Twitch")
    case "www.twitter.com":  
      DOM("Twitter")
    case "www.lichess.org":  
      DOM("Lichess")
    case "www.chess.com":  
      DOM("Chess")
    case "www.tumblr.com":  
      DOM("Tumblr")
    case "www.chess.com":  
      DOM("Chess")
  }
}

