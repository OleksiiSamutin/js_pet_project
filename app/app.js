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
    const category = document.querySelector('#categories');
    const noteName = document.querySelector('#note__name')
    const text = document.querySelector('#note__text').value
    table.appendChild(Row(category.value, noteName.value, text))
}

const createNoteBtn = document.getElementById("createNote");
const addNoteBtn = document.getElementById("addNote");

// const edit = document.querySelector(".edit");
// const archive = document.querySelector(".archive");
// const delete = document.querySelector(".delete");
edit.addEventListener("click", () => alert("click"))
// console.log(createNoteBtn)

createNoteBtn.addEventListener("click", createNote)
addNoteBtn.addEventListener("click", addNote)
addNoteBtn.addEventListener("click", createNote)
