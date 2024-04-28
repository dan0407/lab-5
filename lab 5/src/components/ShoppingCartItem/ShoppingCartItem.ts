import styles from './ShoppingCartItem.css';

export enum Attributeshop {
	'image' = 'image',
	'title' = 'Title',
	'price' = 'price',
}
class shop extends HTMLElement {
	image?: string;
	Title?: string;
	price?: number;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attributeshop, null> = {
			image: null,
			Title: null,
			price: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attributeshop, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attributeshop.price:
				this.price = newValue ? Number(newValue) : undefined;
				break;

			default:
				this[propName] = newValue;
				break;
		}

		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const css = this.ownerDocument.createElement('style');
			css.innerHTML = styles;
			this.shadowRoot?.appendChild(css);

			this.shadowRoot.innerHTML += `
			<section class="cardSection">

			<div class="card">

				 <img class="image" src="${this.image}" alt="">
				 <h1 class="title">Title: ${this.title}</h1>
				 <h3>Price: ${this.price}</h3>
		 </div>
 </section>

 `;
		}
	}
}
customElements.define('my-shop', shop);
export default shop;
