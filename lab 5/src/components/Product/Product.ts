import styles from './Product.css';

export enum AttributeCard {
	name = 'name',
	image = 'image',
	Title = 'Title',
	Description = 'Description',
	category = 'Category',
	Price = 'Price',
	Rating = 'Rating',
}
class card extends HTMLElement {
	name?: string;
	image?: string;
	Title?: string;
	Description?: string;
	Category?: string;
	Price?: number;
	Rating?: number;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeCard, null> = {
			name: null,
			image: null,
			Title: null,
			Description: null,
			Category: null,
			Price: null,
			Rating: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeCard, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case AttributeCard.Price:
				this.Price = newValue ? Number(newValue) : undefined;
				break;
			case AttributeCard.Rating:
				this.Rating = newValue ? Number(newValue) : undefined;
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

		 <div class="infoSection">
				 <h1>Name: ${this.name}</h1>
				 <img class="image" src="${this.image}" alt="">
				 <p class="text">Title: ${this.Title}</p>
				 <p class="text">Description: ${this.Description}</p>
				 <p class="text">Price: ${this.Price}</p>
				 <p class="text">Rating: ${this.Rating}</p>
		 </div>
 </section>

 `;
		}
	}
}
customElements.define('my-card', card);
export default card;
