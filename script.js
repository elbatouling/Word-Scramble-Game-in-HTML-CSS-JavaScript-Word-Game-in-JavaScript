const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn= document.querySelector(".refresh-word"),
checkBtn= document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() =>{
       if(maxTime >0){
        maxTime--; //decrement maxTime by -1
        return timeText.innerText = maxTime;
       }
       clearInterval(timer);
       alert(`Time off! ${correctWord.toUpperCase()} was the correct word`)
       initGame(); //init the game so it restrat when the time is finish
    }, 1000);
}



const initGame = () => {
    initTimer(30);  //calling initTimer function with passing 3 as maxTime value
    let randomObj = words[Math.floor(Math.random() * words.length)];   //getting random object from words
    let wordArray = randomObj.word.split("");// splitting each letter of random word
    for(let i = wordArray.length; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1)); //getting random number
        //shuffming and swiping wordArray letters randomly
        [wordArray[i], wordArray[j]]=[wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length); //setting input mxlength attr value to word length
    // console.log(randomObj);
}
initGame();

const checkWord = () => {
   let userWord = inputField.value.toLocaleLowerCase();
   if(!userWord) return alert("Please enter a word check");
//    console.log(userWord);
   if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
alert(`Congrats! ${userWord.toUpperCase()} is a correct word`)

initGame();
}

refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);
