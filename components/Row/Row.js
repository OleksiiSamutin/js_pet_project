import {Buttons} from '../Buttons/Buttons.js'

const createColumn = (className, category, name, text) => {
    const el = document.createElement("div")
    el.classList.add(className)
    switch (className) {
        case "icon_wrapper":
            const icon = document.createElement("div")
            icon.classList.add(category, "icon")
            el.appendChild(icon)
            break
        case "name":
            el.innerHTML = name
            break
        case "created":
            el.innerHTML = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            break;
        case "category":
            switch (category){
                case "random":
                    el.innerHTML = "Random thoughts"
                    break;
                case "ideas":
                    el.innerHTML = "Idea"
                    break;
                case "tasks":
                    el.innerHTML = "Task"
                    break;
            }
            break;
        case "content":
            el.innerHTML = text.length > 15 ? text.slice(0,13) + "..." : text
            break
        case "dates":
            const textMatch = text.match(/\d{1,2}\D\d{1,2}\D(\d{2}|\d{4})/g)
            el.innerHTML = textMatch ? textMatch.join(", ") : ""
            break;
        case "buttons":
            el.appendChild(Buttons())
            break;
    }
    return el
}

export const Row = (category, name="", text="") => {
    const columnNames = ["icon_wrapper", "name", "created", "category", "content", "dates", "buttons"]
    let row = document.createElement("div")
    row.classList.add("row", "column_wrapper")
    const columns = columnNames.map(columnName => {
        row.appendChild(createColumn(columnName, category,name,text))
    })
    return row
}