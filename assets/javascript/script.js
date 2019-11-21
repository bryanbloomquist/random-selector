const studentEl = document.querySelector("#display-student");
let studentArray = [];

//fisher-yates shuffle method
const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const startApp = () => {
  let tempArray = JSON.parse(localStorage.getItem("studentsArray"));
  if (tempArray && tempArray.length > 0) {
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