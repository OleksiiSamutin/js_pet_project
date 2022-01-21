import onArchive from './Archive.js';
import onDelete from './Delete.js';
import onEdit from './Edit.js';
export const Buttons = () => {
    const buttonsName = ["edit","archive","delete"];
    const listeners = [onEdit, onArhive, onDelete]
    const buttonsWrapper = document.createElement("div")
    buttonsWrapper.addEventListener('click', alert('hello'))
    buttonsWrapper.classList.add("buttons__wrapper")
    buttonsName.forEach((el,i) => {
        let btn = document.createElement("div");
        btn.classList.add(el)
        buttonsWrapper.appendChild(btn)
    })
    return buttonsWrapper
}