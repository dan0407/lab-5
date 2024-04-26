// import "./components/indexapa"
// import { vainito } from "./services/getProduts";

class dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    // async connectedCallback() {
    //     const data = await vainito()
    //     this.render()
    // }

    render() {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-dashboard', dashboard)