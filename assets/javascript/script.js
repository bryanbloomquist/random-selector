const studentEl = document.querySelector("#display-student");
const jumbotronEl = document.querySelector(".jumbotron");
let numberArray = [];

//fisher-yates shuffle method
const shuffle = (array) => {
    let i = 0, j = 0, temp = null
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

const loadNumArray = () => {
    for (let i = 0; i < students.length; i++) {
        numberArray.push(i);
    };
    shuffle(numberArray);
    return numberArray;
};

const startApp = () => {
    let tempArray = JSON.parse(localStorage.getItem("numbersArray"));
    if (tempArray && tempArray.length > 0) {
        numberArray = tempArray;
    } else if (tempArray && tempArray.length === 0) {
        loadNumArray();
    } else {
        loadNumArray();
    }
};

const selectRandomStudent = () => {
    let i = numberArray[0];
    studentEl.setAttribute("class", "animated slideOutLeft");
    setTimeout(function () {
        studentEl.innerHTML = students[i];
        studentEl.setAttribute("class", "animated slideInRight");
    }, 500);
    if (numberArray.length === 1) {
        jumbotronEl.setAttribute("class", "jumbotron text-center reset");
        setTimeout(function () {
            jumbotronEl.setAttribute("class", "jumbotron text-center");
        }, 1000);
    }
    numberArray.shift();
    if (numberArray.length === 0) {
        loadNumArray();
    }
    localStorage.setItem("numbersArray", JSON.stringify(numberArray));
};

startApp();