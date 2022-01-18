import {Buttons} from '../Buttons/Buttons.js'
export const Row = (category, text="") => {
    const columnNames = ["icon_wrapper", "name", "created", "category", "content", "dates","buttons"]
    let row = document.createElement("div")
    row.classList.add("row", "column_wrapper")
    const columns = columnNames.map(el => {
        const column = document.createElement("div")
        column.classList.add(el)
        row.appendChild(column)
        return column
    })
    const icon = document.createElement("div")
    icon.classList.add(category, "icon")
    console.log(columns)
    columns.find(el => el.classList.contains("icon_wrapper")).appendChild(icon)
    columns.find(el => el.classList.contains("buttons")).appendChild(Buttons())
    return row
}