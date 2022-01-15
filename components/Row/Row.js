const Row = (category, text) => {
    const columnNames = ["icon_wrapper", "name", "created", "category", "content", "dates","buttons"]
    let row = document.createElement("div")
    row.classList.add("row", "column_wrapper")
    const columns = columnNames.map(el => {
        return document.createElement("div").classList.add(el)
    })
    columns.getElementsByClassName("icon_wrapper")[0].appendChild(document.createElement("div").classList.add(category))

}