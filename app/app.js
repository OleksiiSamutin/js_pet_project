import  {Row} from "../components/Row/Row.js"

function createNote() {
    const popup = document.getElementsByClassName("addNote__wrapper")[0]
    if (popup.classList.contains("invisible")){
        popup.classList.remove("invisible")
    } else {
        popup.classList.add("invisible")
    }
    createNoteBtn.disabled = !createNoteBtn.disabled
}

function addNote(e) {
    e.preventDefault();
    const table = document.querySelector(".notes-table")
    table.appendChild(Row("random", "Text"))
    // console.log()
}

const createNoteBtn = document.getElementById("createNote");
const addNoteBtn = document.getElementById("addNote");
// console.log(createNoteBtn)

createNoteBtn.addEventListener("click", createNote)
addNoteBtn.addEventListener("click", addNote)
addNoteBtn.addEventListener("click", createNote)
