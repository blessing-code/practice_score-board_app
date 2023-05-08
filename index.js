
// function status(){
//     if(currentHomeScore > currentAwayScore){
//         currentHomeScore.classList.add(winning);
//         currentAwayScore.classList.add(loser);
//     }else if (currentAwayScore > currentHomeScore) {
//         currentAwayScore.classList.add(winning)
//         currentHomeScore.classList.add(loser)
//     } else {
        
//     }
// }

let currentHomeScore = 0;

const addHomeBtnOne = document.getElementById("homeBtnOne");
const addHomeBtnTwo = document.getElementById("homeBtnTwo");
const addHomeBtnThree = document.getElementById("homeBtnThree");

// home score
let homeScore = document.getElementById("home-score");

homeScore.innerHTML = currentHomeScore;

function addOne() {
    currentHomeScore += 1;
}

function addTwo() {
    currentHomeScore += 2;
}

function addThree() {
    currentHomeScore += 3;
}


addHomeBtnOne.addEventListener("click", function() {
    addOne()
    homeScore.innerText = currentHomeScore;
})


addHomeBtnTwo.addEventListener("click", function() {
    addTwo()
    homeScore.innerText = currentHomeScore;
})

addHomeBtnThree.addEventListener("click", function() {
    addThree()
    homeScore.innerText = currentHomeScore;
});

// function to minus 1 form the score
// function deleteBtn(){
//     currentHomeScore -= 1;
// }


let currentAwayScore = 0;

const addAwayBtnOne = document.getElementById("awayBtnOne");
const addAwayBtnTwo = document.getElementById("awayBtnTwo");
const addAwayBtnThree = document.getElementById("awayBtnThree");

let awayScore = document.getElementById("away-score");

awayScore.innerHTML = currentAwayScore;

function addAwayOne() {
    currentAwayScore += 1;
}

function addAwayTwo() {
    currentAwayScore += 2;
}

function addAwayThree() {
    currentAwayScore += 3;
}

addAwayBtnOne.addEventListener("click", function() {
    addAwayOne()
    awayScore.innerText = currentAwayScore;
})

addAwayBtnTwo.addEventListener("click", function() {
    addAwayTwo()
    awayScore.innerText = currentAwayScore;
})

addAwayBtnThree.addEventListener("click", function() {
    addAwayThree()
    awayScore.innerText = currentAwayScore;
});

function resert() {
    currentHomeScore = 0;
    currentAwayScore = 0;
    homeScore.innerHTML = currentHomeScore;
    awayScore.innerHTML = currentAwayScore;
}
