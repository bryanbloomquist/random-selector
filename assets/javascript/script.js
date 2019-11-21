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
    console.log("this isn't working right???")
    studentArray = tempArray;
  } else {
    studentArray = shuffle(students);
  }
};

const selectRandomStudent = () => {
  if (studentArray.length === 0) {
    studentArray = studentArray.concat(shuffle(students));
  };
  studentEl.innerHTML = studentArray[0];
  studentArray.shift();
  localStorage.setItem("studentsArray", JSON.stringify(studentArray));
};

startApp();