
function scoreStatus(){
    if(currentHomeScore > currentAwayScore){
        homeScore.classList.add("winning");
    }else if (currentAwayScore > currentHomeScore) {
        awayScore.classList.add("winning");
    } else {
        homeScore.classList.remove("winning");
        awayScore.classList.remove("winning");
    }
}

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
    scoreStatus()
})


addHomeBtnTwo.addEventListener("click", function() {
    addTwo()
    homeScore.innerText = currentHomeScore;
    scoreStatus()
})

addHomeBtnThree.addEventListener("click", function() {
    addThree()
    homeScore.innerText = currentHomeScore;
    scoreStatus()
});



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
    scoreStatus()
})

addAwayBtnTwo.addEventListener("click", function() {
    addAwayTwo()
    awayScore.innerText = currentAwayScore;
    scoreStatus()
})

addAwayBtnThree.addEventListener("click", function() {
    addAwayThree()
    awayScore.innerText = currentAwayScore;
    scoreStatus()
});

function resert() {
    currentHomeScore = 0;
    currentAwayScore = 0;
    homeScore.innerHTML = currentHomeScore;
    awayScore.innerHTML = currentAwayScore;
}

let homeDeleteBtn = document.getElementById("home-delete-btn");
let awayDeleteBtn = document.getElementById("away-delete-btn");

function deleteOne() {
    currentHomeScore -= 1;
    currentAwayScore -= 1;
}
homeDeleteBtn.addEventListener("click", function() {
    deleteOne()
    homeScore.innerText = currentHomeScore;
})

awayDeleteBtn.addEventListener("click", function() {
    deleteOne()
    awayScore.innerText = currentAwayScore;
})

