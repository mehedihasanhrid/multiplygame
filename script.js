setTimeout(() => {
    document.location.reload();
  }, 1000*10);

const num1 = Math.ceil(Math.random()*15);
const num2 = Math.ceil(Math.random()*15);
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const resetEl = document.getElementById("start");

resetEl.onclick =function(){
    score = 1;
    updateLocalStorage();
};

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `Score: ${score}`;
var timeLeft = 9;
var elem = document.getElementById('remainingTime');

var timerId = setInterval(countdown, 1000);

questionEl.innerText = `What is the result of ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2 ;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if(userAns == correctAns)
    {
        score++;
        updateLocalStorage();
    }
    else
    {
        score--;
        updateLocalStorage();
    } 
});

function updateLocalStorage(){
    localStorage.setItem("score" , JSON.stringify(score));
}

function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      doSomething();
    } else {
      elem.innerHTML = timeLeft;
      timeLeft--;
    }
  }