console.log('loading custom')
let _totalDropDownCount = 0
const _genDropDownId = () => {
    return 'dropper-box-' + _totalDropDownCount++
}

class DropDown extends HTMLDivElement {
    constructor() {
        super()
        const labelTextUp = "○ " + this.getAttribute('label-text')
        const labelTextDown = "● " + this.getAttribute('label-text')
        const checkboxId = _genDropDownId()

        const label = document.createElement('label')
        const checkbox = document.createElement('input')

        label.setAttribute('for', checkboxId)
        label.textContent = labelTextUp
        label.classList.add('dropper-label')
        checkbox.setAttribute('type','checkbox')
        checkbox.setAttribute('id', checkboxId)
        checkbox.classList.add('drop-controller')
        
        this.classList.add('drop-down-container')

        this.onclick = event => {
            if(!checkbox.checked){
                label.textContent = labelTextUp
            } else {
                label.textContent = labelTextDown
            }
        }

        this.prepend(checkbox)
        this.prepend(label)
        console.log('CREATING', labelText)
    }
}

customElements.define('drop-down', DropDown, {extends: 'div'})