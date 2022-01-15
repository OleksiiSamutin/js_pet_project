export const Buttons = () => {
    const buttonsName = ["edit","archive","delete"]
    let buttons= document.createElement("div")
    buttons.classList.add("buttons")
    const buttonsWrapper = document.createElement("div")
    buttonsWrapper.classList.add("buttons__wrapper")
    buttonsName.forEach(el => {
        let btn = document.createElement("div");
        btn.classList.add(el)
        buttonsWrapper.appendChild(btn)
    })
    buttons.appendChild(buttonsWrapper)
    return buttons
}