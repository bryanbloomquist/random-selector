const studentEl = document.querySelector("#display-student");
let studentArray = [];

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
}

const startApp = () => {
  let tempArray = JSON.parse(localStorage.getItem("studentsArray"));
  if (tempArray && tempArray.length > 0) {
    studentArray = tempArray;
  } else if (tempArray && tempArray.length === 0) {
    studentArray = studentArray.concat(students);
    shuffle(studentArray);
  } else {
    studentArray = studentArray.concat(students);
    shuffle(studentArray);
  }
};

const selectRandomStudent = () => {
  if (studentArray.length === 1) {
    studentArray = studentArray.concat(students);
    shuffle(studentArray);
  };
  studentEl.setAttribute("class", "animated slideOutLeft");
  setTimeout( function() {
    studentEl.innerHTML = studentArray[0];
    studentEl.setAttribute("class", "animated slideInRight");
  }, 500);
  studentArray.shift();
  console.log(studentArray);
  localStorage.setItem("studentsArray", JSON.stringify(studentArray));
};

startApp();