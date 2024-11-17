const listElem = document.getElementById("my-list");
console.log(listElem)
const btnElem = document.getElementById("add-btn");
console.log(btnElem)

const students = ["anna", "papa","toto","atti"]

//Per ogni elemento dell array aggiungo li nella lista

let liItems = ""
for (let i=0; i<students.length;i++) {
    const curItem = students[i];
    liItems += `
    <li>${curItem}</li>`
    console.log(liItems)
    console.log(students)
}

//Porto in pagina
listElem.innerHTML = liItems

//Aggiungo nuovo studente
btnElem.addEventListener("click", function() {
    const newStudent = prompt("aggiungi nuovo studente")
    students.push(newStudent)
    console.log(newStudent)
    listElem.innerHTML += `<li>${newStudent}</li>`
   
}) 

console.log(students)