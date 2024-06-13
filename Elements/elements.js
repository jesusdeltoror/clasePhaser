// 1) crear la clase del web componente
class GarageToggle extends HTMLElement{
    // 4) optional definimos un estado privado
    #state = {checked: false}
    static get styles(){
        return `
            label{
                color: red
            }
        `
    }
    constructor(){
        super()
        // 3) definimos el shadowDOM
        this.attachShadow({mode: 'open'})
    }
    // 6) Ciclo de vida del componente
    connectedCallback(){
        this.render()
        this.elements()
        this.events()
    }
    handleToggle = ()=>{
        this.#state.checked = !this.#state.checked
        this.update()
    }
    events(){
        this.$root.addEventListener('change', this.handleToggle)
    }
    // 7) actualizamos partes espesificas no todo el render
    update(){
        const {checked} = this.#state
        this.$input.checked = checked
        this.$span.textContent = checked
    }
    elements(){
        this.$root = this.shadowRoot
        this.$input = this.$root.querySelector('input')
        this.$span = this.$root.querySelector('span')
    }
    // 5) optional definimos metodo render en el cual ponemos el HTML que tendra mi componente
    render(){
        this.shadowRoot.innerHTML = `
            <style>${GarageToggle.styles}</style>
            <label for="toggle">
                <input id="toggle" type="checkbox">
                <span>${this.#state.checked}</span>
            </label>
        `
    }

}

// 2) definir el web component con el nombre del tag y la clase que implementa
customElements.define('garage-toggle', GarageToggle)