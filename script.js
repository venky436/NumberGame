let btn_again = document.querySelector(".btn--again");

let player = document.querySelector(".player");

let player_1 = document.querySelector(".player--0");
let player_2 = document.querySelector(".player--1");

let score_1 = document.querySelector("#score--0");
let score_2 = document.querySelector("#score--1");

//name

let name_0 = document.getElementById("name--0");
let name_1 = document.getElementById("name--1");

let current_score = document.querySelectorAll(".current-score");

let player_active = document.querySelector("player--active");

let btn_new = document.querySelector(".btn--new");
let btn_roll = document.querySelector(".btn--roll");
let btn_hold = document.querySelector(".btn--hold");

let dice_img = document.querySelector(".dice");

let btn = document.querySelectorAll(".btn");



let names;
let currentScore;
let activePlayer;
let playing;
let score = [0, 0];
//code

//mail varibles.............

let switch_player = () => {
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  player_1.classList.toggle("player--active");
  player_2.classList.toggle("player--active");
};

let init = () => {
  
  score[0] = 0;
  score[1] = 0;
  activePlayer = 0;
  currentScore = 0;

  current_score.forEach((ele) => {
    ele.textContent = 0;
  });

  playing = true;
  dice_img.classList.add("hidden");
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
};
init();
//dice rolling functionality

btn_roll.addEventListener("click", () => {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6 + 1);

    dice_img.classList.remove("hidden");
    dice_img.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore = currentScore + dice;
      console.log(currentScore);
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      switch_player();
    }
  }
});

let act;
// hold functionality

btn_hold.addEventListener("click", () => {
  
  if (playing) {
 

    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    if (score[activePlayer] >= 100) {
      playing = false;
      act = score[activePlayer];
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("active");
      dice_img.classList.add("hidden");
    } else {
      switch_player();
    }
  }
});
//new game functionality
let newGame = ()=>{
   console.log('click')
  names = prompt("enter player1 and player2 names with Space");
  name_0.textContent = names ? names.split(" ")[0] : 'Player1';
  name_1.textContent = names ? names.split(" ")[1] : 'Player2';
  init();
}

btn_new.addEventListener("click", newGame);



btn_again.addEventListener("click", () => {
        init();
    });



//  for (let x = 0; x <= 11; x++) {
//    console.log(i);
//    if (x === 10) {
//      setInterval(() => {
//        let dice = Math.trunc(Math.random() * 6 + 1);

//        dice_img.classList.remove("hidden");
//        dice_img.src = `dice-${dice}.png`;
//      }, 5000);
//    }
//  }

//  let total;

//  setInterval(() => {

//   setInterval(()=>{
//       dice = Math.trunc(Math.random() * 6 + 1);
//       total +=dice
//    dice_img.classList.remove("hidden");
//    dice_img.src = `dice-${dice}.png`;

//   },10000)
   
//  },1000);
// console.log(total)